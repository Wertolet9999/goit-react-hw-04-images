import axios from "axios";

const API_KEY = '32384029-b335b886a5c53d23582a19afa';
axios.defaults.baseURL = 'https://pixabay.com';

export const apiService = async (query, page) => {
  return await axios
    .get('/api/', {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    })
    .then(response => response.data);
};