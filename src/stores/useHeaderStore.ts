import { create } from "zustand";

interface IHeaderStore {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;

  isOpenProfileMenu: boolean;
  setIsOpenProfileMenu: () => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (value) => set({ isMenuOpen: value }),

  isOpenProfileMenu: false,
  setIsOpenProfileMenu: () =>
    set((state) => ({ isOpenProfileMenu: !state.isOpenProfileMenu })),
}));
