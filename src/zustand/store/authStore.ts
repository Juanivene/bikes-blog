import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  user: string | null;
};

type AuthActions = {
  login: (token: string, user: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  isAuthenticated: false,
  token: null,
  user: null,
  login: (token, user) => set({ isAuthenticated: true, token, user }),
  logout: () => set({ isAuthenticated: false, token: null, user: null }),
}));

export default useAuthStore;
