import apiService from './apiService';
import markupTpl from './markupTemplate';
import refs from './refs';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const API_KEY = '21876236-bdbf7791a65fc64e58b34d487';

let inputValue = '';
let page = 1;

refs.loadMore.style.display = 'none';

export const getSubmitForm = e => {
  e.preventDefault();
  refs.galleryList.innerHTML = '';
  inputValue = e.target.elements.query.value;
  if (inputValue.length) {
    apiService(inputValue, page, API_KEY)
      .then(images => {
        images.length
          ? (refs.loadMore.style.display = 'block')
          : (refs.loadMore.style.display = 'none');
          markupTpl(images);
      })
      .catch(error => console.log(error));
  }
};

export const moreImages = () => {
  page += 1;
  apiService(inputValue, page, API_KEY)
    .then(images => {
      markupTpl(images);
      scrollTo({
        top: document.documentElement.offsetHeight - 1600,
        behavior: 'smooth',
      });
    })
    .catch(error => caonsole.log(error));
};

export default function onOpenModal(event) {

  if (event.target.nodeName !== 'IMG') {
      return;
  }
  const instance = basicLightbox.create(`<img src="${event.target.dataset.src}" alt="" />`);
  instance.show();
}

refs.galleryList.addEventListener('click', onOpenModal);
refs.form.addEventListener('submit', getSubmitForm);
refs.loadMore.addEventListener('click', moreImages);

