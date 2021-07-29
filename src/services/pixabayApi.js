import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer 22368455-652b774db086074207edc62e9";

const fetchPicturesApi = async ({
  searchQuery = "",
  currentPage = 1,
  pageSize = 12,
}) => {
  const response = await axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=22368455-652b774db086074207edc62e9&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);

  if (!response.length) return Promise.reject("No any matches found!");
  if (response.length) return response;
};

export default fetchPicturesApi;
