import { useStore as baseUseStore } from 'vuex';
import { State, key } from './store/index';

export function useStore() {
  return baseUseStore(key);
}