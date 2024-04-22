import { create } from "zustand";

interface ItokenStore {
  token: string;
  setToken: (token: string) => void;
}

export const useToken = create<ItokenStore>()((set) => ({
  token: "",
  setToken: (token) => set({ token: token }),
}));
