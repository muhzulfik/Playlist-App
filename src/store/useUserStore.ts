import axios from "axios";
import create from "zustand";

const useUsers = create((set: any) => ({
  user: <any>[],
  fetch: async () => {
    const token = localStorage.getItem("authorization");
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set({ user: response.data });
  },
}));

export default useUsers;
