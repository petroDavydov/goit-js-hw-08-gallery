const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
export default galleryItems;

// === создание шаблоной карти===
// function createImgCardMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item >
// 	<a
// 	  class="gallery__link"
// 	  href="${original}"
// 	>
// 	  <img
// 		class="gallery__image"
// 		src="${preview}"
// 		data-source="${original}" //взял єтот атрибут в функцию isGalleryImage
// 		alt="${description}"
// 	  />
// 	</a>
//   </li>`;
//     })
//     .join("");
// }
// // ===

// const mainGalery = document.querySelector(".js-gallery"); // нашел основной тег
// // console.log(mainGalery);

// const cardsItem = createImgCardMarkup(galleryItems); // вивел всею разметку в карточки
// // console.log(cardsItem);

// mainGalery.insertAdjacentHTML("beforeend", cardsItem); // вставил разметку
// // console.log(mainGalery);

// mainGalery.addEventListener("click", isGalleryImage); // повесил обработчик собития клик на ul
// // console.log(mainGalery);

// // ===lightBox
// const ligthBoxEl = document.querySelector(".js-lightbox"); // нашел js-lightbox
// // console.log(ligthBoxEl);

// const modal = document.querySelector(".lightbox__content"); //

// const lightboxImage = document.querySelector(".lightbox__image"); //

// function isGalleryImage(event) {
//   const isGalleryImageElement = event.target.classList.contains(
//     "gallery__image"
//   );
//   if (!isGalleryImageElement) {
//     return;
//   } else if (isGalleryImageElement) {
//     event.preventDefault();
//     ligthBoxEl.classList.add("is-open"); // добавил клас на елемент
//     lightboxImage.src = event.target.getAttribute("data-source"); // взял из шаблонних строк для  замени картинки на большую
//     lightboxImage.alt = event.target.alt; // добавил описание через alt
//     // console.log(lightboxImage); // виводит адрес и альт
//   }
//   window.addEventListener("keyup", keyEscape); // добавил прослушиватель на кнопку `Escape`
// }

// const btnLightBox = document.querySelector('[data-action="close-lightbox"]'); // нашел кнопку для закрития

// btnLightBox.addEventListener("click", closeLightBoxWindow); // добавил прослушиватель на кнопку

// function closeLightBoxWindow(event) {
//   // event.preventDefault();      // если ето разкоменчу то ремув не работает
//   ligthBoxEl.classList.remove("is-open");
//   lightboxImage.src = "";
//   lightboxImage.alt = "";
//   window.removeEventListener("keyup", keyEscape);
// }

// modal.addEventListener("click", closeLightBoxImage); // прослушивательна на ligthbox__content

// function closeLightBoxImage(event) {
//   if (event.target === event.currentTarget) {
//     closeLightBoxWindow();
//   }
// }

// function keyEscape(event) {
//   if (event.code === "Escape") {
//     closeLightBoxWindow();
//   }
// }

// // ==========клик по оверлею

// const overlayEl = document.querySelector(".lightbox__overlay"); // нашел overlay
// // console.log(overlayEl);

// overlayEl.addEventListener("click", onOverlayClose); // повесил прослушиватель

// function onOverlayClose() {
//   // создал функцию закрития по клику на оверлей
//   closeLightBoxWindow();
// }

// // ===пролистивание клавишами влево и  вправо

// document.addEventListener("keydown", arrow);

// function arrow(event) {
//   if (event.code == 37) {
//     // дайте хотяби намек
//   } else if (event.code == 39) {
//     // что сюда писать
//   }
// }
