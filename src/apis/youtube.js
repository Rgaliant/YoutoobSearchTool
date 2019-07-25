import axios from "axios";

const KEY = "AIzaSyAU8I5lKmFTC6TzIYzUgAHT7YJ9zPOH22E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
