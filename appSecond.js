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

// сoздаю пример карточки
function createImgCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }, index) => {
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
		  data-index="${index}"
		/>
	  </a>
	</li>`;
    })
    .join("");
}
// ===

const cardsItem = createImgCardMarkup(galleryItems); // вивел всею разметку в карточки
console.log(cardsItem);

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

    refs.lightboxImage.dataset.index = event.target.dataset.index;
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

//   на клавиатуре в право и в лево перелистивание галереи

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    onArrowLeft();
  }
  if (event.code === "ArrowRight") {
    onArrowRight();
  }
});

function onArrowLeft() {
  let index = +refs.lightboxImage.dataset.index;
  if (index === 0) {
    step(galleryItems.length - 1);
    return;
  }
  step(index, -1);
}
function onArrowRight() {
  let index = +refs.lightboxImage.dataset.index;
  if (index === galleryItems.length - 1) {
    step(0);
    return;
  }
  step(index, 1);
}

function step(index, step = 0) {
  refs.lightboxImage.dataset.index = `${index + step}`;
  refs.lightboxImage.src = galleryItems[index + step].original;
}
