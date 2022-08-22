import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCards = document.querySelector(".gallery");

function createGallery(arrey) {
    return arrey.reduce((acc, elem) => acc + `<div class="gallery__item">
    <a class="gallery__link" href="${elem.original}">
    <img
        class="gallery__image"
        src="${elem.preview}"
        data-source="${elem.original}"
        alt="${elem.description}"
    />
    </a>
</div>`, [])
}
const result = createGallery(galleryItems);
galleryCards.insertAdjacentHTML("beforeend", result);
galleryCards.addEventListener("click", openModal);

const instance = basicLightbox.create(`
    <img src="">`,
    {
        onShow: instance => {
            window.addEventListener("keydown", keyDown);
        },
        onClose: instance => {
            window.addEventListener("keydown", keyDown);
        }
    }
)

function openModal(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
    return;
    }
    instance.element().querySelector("img").src = event.target.dataset.source;
    instance.show();
}

function keyDown(event) {
    if (event.key === "Escape") {
        instance.close();
        return;
    }
}



// console.log(galleryItems);
// console.log(result)