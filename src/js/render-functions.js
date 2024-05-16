import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery-link');

export const createMarcup = (list, tag) => {
  const marcup = list
    .map(image => {
      return ` <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}" data-lightbox="gallery">
    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}">
          <ul class="stats-block">
            <li>
              <span>Likes</span>
              <span>${image.likes}</span> 
            </li>
            <li>
              <span>Views</span>
              <span>${image.views}</span>
            </li>
            <li>
              <span>Coments</span>
              <span>${image.comments}</span>
            </li>
            <li>
              <span>Download</span>
              <span>${image.downloads}</span>
            </li>
          </ul>
        </a>
      </li>`;
    })
    .join('');
  tag.insertAdjacentHTML('beforeend', marcup);
  gallery.refresh();
};
