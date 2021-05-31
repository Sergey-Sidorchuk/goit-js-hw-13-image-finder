import refs from './refs';
import template from '../templates/templates.hbs';

const updateMarkup = images => {
    let markup = template(images);
    refs.galleryList.insertAdjacentElement('beforeend', markup);

};

export default updateMarkup;
