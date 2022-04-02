import create from "zustand";

const userStore = create((set) => ({
  id: "",
  setId: (id) => set(() => ({ id })),
}));

export default userStore;
