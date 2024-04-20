document.addEventListener('DOMContentLoaded', function () {
    const titleSection = document.querySelector('.title-section');
    const pageHeader = document.querySelector('.page-header');
    const menuIcon = document.querySelector('.menu-icon');
    const submenu = document.querySelector('.submenu');
    const mobile_submenu = document.querySelector('.mobile-submenu');
    const subMenuCategories = document.querySelectorAll('.category');
    const backButton = document.getElementById('back-button');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const titleSectionHeight = titleSection.clientHeight;

        if(scrollPosition >= titleSectionHeight)
        {
            pageHeader.classList.add('fixed');
            submenu.style.top = pageHeader.offsetHeight + 'px';
            mobile_submenu.style.top = pageHeader.offsetHeight + 'px';
        }
        else
        {
            pageHeader.classList.remove('fixed');
        }
    });

    backButton.addEventListener('click', function() {
        window.history.back();
    })

    menuIcon.addEventListener('click', function () {
        pageHeader.classList.toggle('menu-expanded');
        menuIcon.classList.toggle('selected');
    });

    subMenuCategories.forEach(function(category) {
        var title = category.querySelector('.category-title');
        title.addEventListener('click', function() {
            category.classList.toggle('expanded');
        });
    });
});