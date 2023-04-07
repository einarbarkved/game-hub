import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "df486c8ad7fc45bd866def9fdee40a0f",
  },
});
