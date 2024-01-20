document.addEventListener('DOMContentLoaded', function () {
    const catalogIndexSection = document.querySelector('.catalog-index');
    const pageHeader = document.querySelector('.page-header');
    const menuIcon = document.querySelector('.menu-icon');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const catalogIndexHeight = catalogIndexSection.clientHeight;

        const scrollThreshold = Math.max(viewportHeight, catalogIndexHeight);

        if(scrollPosition >= scrollThreshold)
        {
            pageHeader.classList.add('fixed');
        }
        else
        {
            pageHeader.classList.remove('fixed');
        }
    });

    menuIcon.addEventListener('click', function () {
        pageHeader.classList.toggle('menu-expanded');
    });
});