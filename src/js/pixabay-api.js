import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '43794074-5ff9b3f6f51ca0335da2b7303';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = true;

export async function imagesFetch(value) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${value}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
