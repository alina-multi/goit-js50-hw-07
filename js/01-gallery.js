import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");

const createGallery = createCardOfGallery(galleryItems);

function createCardOfGallery(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return  `<div class="gallery__item" >
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
}
gallery.insertAdjacentHTML("beforeend", createGallery);




// Реализация делегирования на div.gallery и получение url большого изображения.

gallery.addEventListener("click", onCardClick);

function onCardClick(evt) { 
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)

    instance.show()
    
    const visible = instance.visible()
    console.log(visible)
    if (instance.show()) { 
        window.addEventListener("keydown", onEscClick);
         function onEscClick(evt) {
    if (evt.code !== "Escape") { 
        return;
    };
             instance.close()
};

}

}



