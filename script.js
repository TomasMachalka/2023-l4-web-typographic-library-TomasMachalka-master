// script.js
const mainImg = document.getElementById('mainImg');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const thumbnailSrc = thumbnail.getAttribute('src');
        mainImg.setAttribute('src', thumbnailSrc);
    });
});