import galleryItems from "./app.js";

const refs = {
  mainGallery: document.querySelector(".js-gallery"),
  lightBoxEl: document.querySelector(".js-lightbox"),
  modal: document.querySelector(".lightbox__content"),
  lightboxImage: document.querySelector(".lightbox__image"),
  btnLightBox: document.querySelector('[data-action="close-lightbox"]'),
  overlayEl: document.querySelector(".lightbox__overlay"),
};

refs.mainGallery.addEventListener("click", isGalleryImage);
refs.btnLightBox.addEventListener("click", closeLightBoxWindow);
refs.modal.addEventListener("click", closeLightBoxImage);
refs.overlayEl.addEventListener("click", onOverlayClose);
document.addEventListener("keydown", arrow);

// сoздаю пример карточки
function createImgCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item >
	  <a
		class="gallery__link"
		href="${original}"
	  >
		<img
		  class="gallery__image"
		  src="${preview}"
		  data-source="${original}" //взял єтот атрибут в функцию isGalleryImage
		  alt="${description}"
		/>
	  </a>
	</li>`;
    })
    .join("");
}
// ===

const cardsItem = createImgCardMarkup(galleryItems); // вивел всею разметку в карточки
// console.log(cardsItem);

refs.mainGallery.insertAdjacentHTML("beforeend", cardsItem); // вставил разметку
// console.log(mainGalery);

function isGalleryImage(event) {
  const isGalleryImageElement = event.target.classList.contains(
    "gallery__image"
  );
  if (!isGalleryImageElement) {
    return;
  } else if (isGalleryImageElement) {
    event.preventDefault();
    refs.lightBoxEl.classList.add("is-open"); // добавил клас на елемент
    refs.lightboxImage.src = event.target.getAttribute("data-source"); // взял из шаблонних строк для  замени картинки на большую
    refs.lightboxImage.alt = event.target.alt; // добавил описание через alt
    // console.log(lightboxImage); // виводит адрес и альт
  }
  window.addEventListener("keyup", keyEscape); // добавил прослушиватель на кнопку `Escape`
}

function closeLightBoxWindow() {
  refs.lightBoxEl.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
  window.removeEventListener("keyup", keyEscape);
}

function closeLightBoxImage(event) {
  if (event.target === event.currentTarget) {
    closeLightBoxWindow();
  }
}

function keyEscape(event) {
  if (event.code === "Escape") {
    closeLightBoxWindow();
  }
}

function onOverlayClose() {
  // создал функцию закрития по клику на оверлей
  closeLightBoxWindow();
}

//   ===============

function arrow(event) {
  if (event.code == 37) {
    // дайте хотяби намек
  } else if (event.code == 39) {
    // что сюда писать
  }
}
