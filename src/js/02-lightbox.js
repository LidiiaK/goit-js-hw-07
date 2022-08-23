import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCards = document.querySelector(".gallery");

function createGallery(arrey) {
    return arrey.reduce((acc, elem) => acc + `
    <a class="gallery__item" href="${elem.original}">
    <img
    class="gallery__image"
    src="${elem.preview}"
    alt="${elem.description}"
    />
    </a>`, [])
}
const result = createGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", result);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);
