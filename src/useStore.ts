import { useStore as baseUseStore } from 'vuex';
import { key } from './store/index';

export function useStore() {
  return baseUseStore(key);
}