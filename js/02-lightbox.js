import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
</li> */

const listPhoto = document.querySelector(".gallery");

const listGalleryItems = iterateArrayGalleryItems(galleryItems);

function iterateArrayGalleryItems(list) {
  return list
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
    )
    .join("");
}

listPhoto.innerHTML = listGalleryItems;

const accessToLinkFromA = document.querySelector(".gallery__link");

listPhoto.addEventListener("click", handleFunctionForPhotoList);

function handleFunctionForPhotoList(evt) {
  evt.preventDefault();

  // ================================================ // CREATE NEW MARKUP=======================

  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    // captionPosition: "bottom",
  });
}
