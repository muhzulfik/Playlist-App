import axios from "axios";

const getUserId = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.id;
};

export default getUserId;
