import apiService from './apiService';
import markupTpl from './markupTemplate';
import refs from './refs';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let inputValue = '';
let page = 1;

refs.loadMore.getElementsByClassName.display = 'none';

export const getSubmitForm = el => {
    el.preventDefault();
    refs.galleryList.innerHTML = '';
    InputValue = el.target.elements.query.value;
    if (inputValue.length) {
        apiService(inputValue, page, API_KEY)
            .then(images => {
                images.length
                    ? (refs.loadMore.style.display = 'block')
                    : (refs.loadMore.style.display = 'none');
                markupTpl(images);
                
            }).catch(error => console.log(error));
    }
};



// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()