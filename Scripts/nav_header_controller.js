document.addEventListener('DOMContentLoaded', function () {
    const titleSection = document.querySelector('.title-section');
    const pageHeader = document.querySelector('.page-header');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const titleSectionHeight = titleSection.clientHeight;
        //const pageHeaderHeight = pageHeader.clientHeight;

        if(scrollPosition >= titleSectionHeight)
        {
            pageHeader.classList.add('fixed');
        }
        else
        {
            pageHeader.classList.remove('fixed');
        }
    });
});