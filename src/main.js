import { imagesFetch } from './js/pixabay-api';
import { createMarcup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const galleryList = document.querySelector('#gallery');
const loaderEl = document.querySelector('.loader');
const loadMore = document.querySelector('#loadMore');
let page = 1;
let valueSearch = '';

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  valueSearch = event.target.elements.searchInput.value.trim();

  if (!valueSearch) {
    galleryList.innerHTML = '';
    iziToast.show({
      message: 'Please enter text to find something!',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });
    return;
  }

  galleryList.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  page = 1;
  try {
    const response = await imagesFetch(valueSearch, page);

    searchForm.searchInput.value = '';
    galleryList.innerHTML = '';

    if (!response.hits.length) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        color: 'red',
      });
      loadMore.classList.add('is-hidden');
      galleryList.innerHTML = '';
      loaderEl.classList.add('is-hidden');
      return;
    }

    createMarcup(response.hits, galleryList);
    loadMore.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
    if (page * 15 >= response.totalHits) {
      loadMore.classList.add('is-hidden');
      iziToast.show({
        title: 'Error',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        messageColor: '#ffffff',
        timeout: 3000,
        backgroundColor: '#ef4040',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
      messageColor: '#ffffff',
      timeout: 3000,
      backgroundColor: '#ef4040',
    });
    loaderEl.classList.add('is-hidden');
    loadMore.classList.add('is-hidden');
  }
});

loadMore.addEventListener('click', async event => {
  page += 1;
  const response = await imagesFetch(valueSearch, page);
  scrollTo(galleryList);
  createMarcup(response.hits, galleryList);
  if (page * 15 >= response.totalHits) {
    loadMore.classList.add('is-hidden');
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      messageColor: '#ffffff',
      timeout: 3000,
      backgroundColor: '#ef4040',
    });
  }
});

function scrollTo(galleryList) {
  setTimeout(() => {
    const { height: cardHeight } =
      galleryList.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }, 500);
}
