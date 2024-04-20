let models = document.querySelectorAll('.model');

models.forEach((model) => {
    model.addEventListener('click', () => {
        model.dismissPoster();

        model.style.border = "border: 1px solid #cfcfcf7e";
    });

    model.addEventListener('load', () => {
        model.classList.add('loaded');
    })
});