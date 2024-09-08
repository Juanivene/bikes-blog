import { create } from 'zustand';

type GlobalDataState = {
  data: Record<string, unknown> | null;
};

type GlobalDataActions = {
  setData: (data: Record<string, unknown>) => void;
};

const useGlobalDataStore = create<GlobalDataState & GlobalDataActions>(
  (set) => ({
    data: null,
    setData: (data) => set({ data }),
  })
);

export default useGlobalDataStore;
