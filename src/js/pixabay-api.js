import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43794074-5ff9b3f6f51ca0335da2b7303';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;
const PER_PAGE = 15;

export async function imagesFetch(value, page) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${value}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=${PER_PAGE}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
