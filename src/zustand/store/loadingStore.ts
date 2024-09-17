import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
}

type LoadingActions = {
  setLoading: (loading: boolean) => void;
};

const useLoadingStore = create<LoadingState & LoadingActions>((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));

export default useLoadingStore;
