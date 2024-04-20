document.addEventListener('DOMContentLoaded', function () {
    const business_card = document.getElementById('hoverBusinessCard');
    const clickMeArrowContainer = document.getElementById('clickMeContainer');

    setTimeout(() => {
        if(!businessCardInteracted)
        {
            business_card.classList.add('business-card-image_attention');
        }
    }, 4000);

    setTimeout(() => {
        if(!businessCardClicked)
        {
            clickMeArrowContainer.style.display = 'flex';
        }
    }, 4000);
});