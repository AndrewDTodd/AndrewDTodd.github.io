document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('carousel-image-modal');

    const carouselImages = document.querySelectorAll('.carousel img');

    const modalImage = document.getElementById('image-modal-image');

    carouselImages.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImage.src = this.src;
        });
    });

    const closeBtn = document.getElementsByClassName('image-modal-close')[0];
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if(event.target === modal) {
            modal.style.display = 'none';
        }
    });
});