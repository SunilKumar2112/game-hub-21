import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8cd63077d7e74615a8de1db527c4a9ae",
  },
});
