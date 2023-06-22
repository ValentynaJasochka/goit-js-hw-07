import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

function createMarkupList(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        ` <li class="gallery__item">
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
    .join(" ");
}
list.insertAdjacentHTML("afterbegin", createMarkupList(galleryItems));

list.addEventListener("click", clickImage);

function clickImage(evt) {
  evt.preventDefault();
  const cardItem = evt.target.closest(".gallery__item");
  if (!cardItem) {
    return;
  } else {
    function presEsc(event) {
      if (event.code === "Escape") {
        instance.close();
      }
    }
    const item = evt.target.dataset.source;
    const instance = basicLightbox.create(createModal(item), {
      onShow: () => window.addEventListener("keydown", presEsc),
      onClose: () => window.removeEventListener("keydown", presEsc),
    });

    instance.show();
  }
}

function createModal(link) {
  return `
    <img src="${link}" width="800" height="600">
`;
}
