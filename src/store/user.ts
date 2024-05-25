import { createStore } from "zustand/vanilla";

// zustand store for user authentification and user data

export type UserState = {
  user: any;
};

export type UserActions = {
  setUser: (user: any) => void;
  logout: () => void;
};

export type UserStore = UserState & UserActions;

export const initUserStore = (): UserState => {
  return { user: null };
};

export const defaultInitState: UserState = {
  user: null,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),
  }));
};

// export const useUserStore = create<UserStore>((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   logout: () => set({ user: null }),
// }));
