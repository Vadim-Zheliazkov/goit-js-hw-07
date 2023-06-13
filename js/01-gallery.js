import { galleryItems } from "./gallery-items.js";

const listPhoto = document.querySelector(".gallery");
listPhoto.addEventListener("click", makeBigPhoto);
const listGalleryItems = iterateArrayGalleryItems(galleryItems);
console.log(listGalleryItems);
function iterateArrayGalleryItems(list) {
  return list
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

listPhoto.innerHTML = listGalleryItems;

const accessToLinkFromA = document.querySelector(".gallery__link");

function makeBigPhoto(evt) {
  evt.preventDefault();
  accessToLinkFromA.toggleAttribute("href");
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  // CONNECT MODAL TO LIST=======================
  // ================================================

  const instance = basicLightbox.create(`
 <img src ="${evt.target.dataset.source}" width='800' height='600'>
`);

  instance.show();

  // CLOSE MODAL WITH HELP OF ESC=======================
  // ================================================

  document.addEventListener("keydown", closeModalBtnEsc);

  function closeModalBtnEsc(evt) {
    if (evt.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModalBtnEsc);
    }
    return;
  }
}
