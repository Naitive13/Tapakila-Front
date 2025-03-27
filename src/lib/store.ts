import { create } from "zustand";

type UserInfo = {
  username: string;
  email: string;
  setUsername: (newUsername: string) => void;
  setEmail: (newEmail: string) => void;
};
const useUserInfoStore = create<UserInfo>((set) => ({
  username: "",
  email: "",
  setUsername: (newUsername: string) => set({ username: newUsername }),
  setEmail: (newEmail: string) => set({ email: newEmail }),
}));

export default useUserInfoStore;
