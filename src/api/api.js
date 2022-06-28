import axios from "axios";

const url = "http://localhost:2000/api/v1/allItems";

export const fetchAllItems = () =>
  axios
    .get(url)
    .catch((err) => console.log(err));
export const postSingleItem = (item) => {
  axios.post(url, item);
};
