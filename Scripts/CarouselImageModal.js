document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('carousel-image-modal');

    const carouselImages = document.querySelectorAll('.catalog-item img');

    const modalImage = document.getElementById('image-modal-image');

    let clickStartTIme;
    carouselImages.forEach(function(img) {
        img.addEventListener('mousedown', function(event) {
            clickStartTIme = Date.now();
        });

        img.addEventListener('mouseup', function(event) {
            const clickDuration = Date.now() - clickStartTIme;

            if(clickDuration < 90) {
                modal.style.display = 'flex';
                modalImage.src = this.src;
            }

            clickStartTIme = null;
        });

        img.addEventListener('dragStart', function(event) {
            event.preventDefault();
        })
    });

    const closeBtn = document.getElementsByClassName('image-modal-close')[0];
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if(event.target === modalImage) {
            modal.style.display = 'none';
        }
    });
});