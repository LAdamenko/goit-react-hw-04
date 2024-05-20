import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (question, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: question,
      page: currentPage,
      per_page: 12,
      client_id: "w17w9SF2fMmSkyCaPKTPra6wor4XBee-9hFmGEhkCcA",
    },
  });
  return response.data;
};
