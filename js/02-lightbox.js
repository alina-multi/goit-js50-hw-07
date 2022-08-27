import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");



const createGallery = createCardOfGallery(galleryItems);

function createCardOfGallery(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return  `
     <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
    }).join("");
}
gallery.insertAdjacentHTML("beforeend", createGallery);


// let lightbox = new SimpleLightbox('.gallery a',
//     {
//     captionsData: "alt",
//     captionDelay: 250,
//     captionPosition: "bottom",
//     })
//     ;

SimpleLightbox.on('show.simplelightbox', function () {
});



// SimpleLightbox.open({
//     items: ['demo/images/1big.jpg', 'demo/images/2big.jpg', 'demo/images/3big.jpg']
// });


