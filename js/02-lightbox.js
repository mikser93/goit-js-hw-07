import { galleryItems } from './gallery-items.js';
// Change code below this line

const photoCollection = document.querySelector(".gallery");
const imgMarkup = galleryItems
  .map(
    (item) =>
      `<li>
      <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
      </li>`
  )
  .join("");

  photoCollection.insertAdjacentHTML("afterbegin", imgMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});