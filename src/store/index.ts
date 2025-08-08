import { createStore, Store, createLogger } from 'vuex';
import { InjectionKey } from 'vue';
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

// Update the memo interface to handle multiple image URLs
export interface Memo {
  id: string;
  content: string;
  tags: string[];
  imageUrls?: string[] | null; // Use an array for multiple image URLs
  timestamp: any;
  creator: string;
}

export interface State {
  memos: Memo[];
  filterSettings: {
    hashtags: string[];
    date: null | Date;
    dateRange: string;
  };
  currentUser: any;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    memos: [],
    filterSettings: {
      hashtags: [],
      date: null,
      dateRange: 'all'
    },
    currentUser: null
  },
  mutations: {
    setMemos(state, memos: Memo[]) {
      state.memos = memos;
    },
    addMemo(state, memo: Memo) {
      state.memos.unshift(memo);
    },
    deleteMemo(state, memoId: string) {
      state.memos = state.memos.filter(memo => memo.id !== memoId);
    },
    // Updated to expect imageUrls as an array
    editMemo(state, updatedMemo: { id: string; content: string; tags: string[]; imageUrls?: string[] | null }) {
      const index = state.memos.findIndex(memo => memo.id === updatedMemo.id);
      if (index !== -1) {
        state.memos[index] = { ...state.memos[index], ...updatedMemo };
      }
    },
    updateFilterSettings(state, filters: { hashtags?: string[], date?: Date, dateRange?: string }) {
      state.filterSettings = { ...state.filterSettings, ...filters };
    },
    setUser(state, user: any) {
      state.currentUser = user;
    }
  },
  actions: {
     async fetchMemos({ commit }) {
    const db = getFirestore();
    const memosCollection = collection(db, 'memos');
    try {
      const querySnapshot = await getDocs(memosCollection);
      const fetchedMemos: Memo[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const imageUrls = data.imageUrls || (data.imageUrl ? [data.imageUrl] : []);
        fetchedMemos.push({
        id: doc.id,
  content: data.content, // Assuming content is available in data
  tags: data.tags,       // Assuming tags are available in data
  imageUrls: imageUrls,
  timestamp: data.timestamp,
  creator: data.creator, // Assuming creator is available in data
        });
      });
      commit('setMemos', fetchedMemos);
    } catch (error) {
      console.error("Error fetching memos: ", error);
    }
  },
    async addMemo({ commit }, memoData: { content: string; tags: string[]; imageUrls: string[] | null; creator: string }) {
      const db = getFirestore();
      const memosCollection = collection(db, 'memos');
      const newMemoWithDate = {
        ...memoData,
        timestamp: new Date()
      };
      try {
        const docRef = await addDoc(memosCollection, newMemoWithDate);
        commit('addMemo', {
          id: docRef.id,
          ...newMemoWithDate
        });
      } catch (error) {
        console.error("Error adding memo: ", error);
      }
    },
    async deleteMemo({ commit }, memoId: string) {
      const db = getFirestore();
      const memoDoc = doc(db, 'memos', memoId);
      try {
        await deleteDoc(memoDoc);
        commit('deleteMemo', memoId);
      } catch (error) {
        console.error("Error deleting memo: ", error);
      }
    },
    // Updated to handle an array of imageUrls
    async editMemo({ commit }, updatedMemo: { id: string; content: string; tags: string[]; imageUrls?: string[] | null }) {
      const db = getFirestore();
      const memoDoc = doc(db, 'memos', updatedMemo.id);
      try {
        const updateData: any = {
          content: updatedMemo.content,
          tags: updatedMemo.tags
        };
        if (updatedMemo.imageUrls !== undefined) {
          updateData.imageUrls = updatedMemo.imageUrls;
        }

        await updateDoc(memoDoc, updateData);
        commit('editMemo', updatedMemo);
      } catch (error) {
        console.error("Error editing memo: ", error);
      }
    },
    updateFilterSettings({ commit }, filters: { hashtags?: string[], date?: Date, dateRange?: string }) {
      commit('updateFilterSettings', filters);
    },
    setUser({ commit }, user: any) {
      commit('setUser', user);
    }
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
});