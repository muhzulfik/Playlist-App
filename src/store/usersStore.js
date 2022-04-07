import axios from "axios";
import create from "zustand";

const useUsers = create((set) => ({
  userId: "",
  fetch: async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set({ userId: response.data.id });
  },
}));

export default useUsers;
