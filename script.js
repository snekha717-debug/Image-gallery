// Get DOM elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close-btn');

// Open Lightbox
galleryItems.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
        caption.innerText = image.alt; // Use alt text as caption
    });
});

// Close Lightbox via Close Button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close Lightbox by clicking anywhere outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Close Lightbox using Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
    }
});