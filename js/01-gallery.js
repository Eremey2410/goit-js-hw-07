import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryMarcup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarcup);

galleryEl.addEventListener("click", onNewGalleryClick);

console.log(createGalleryItemsMarkup(galleryItems));
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
    `;
    })
    .join("");
}

function onNewGalleryClick(event) {
  event.preventDefault();
  console.log(event.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600"/>
`);
  instance.show();
}

console.log(galleryItems);
