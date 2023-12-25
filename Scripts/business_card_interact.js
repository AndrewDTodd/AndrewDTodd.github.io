businessCardInteracted = false;
businessCardClicked = false;

document.addEventListener('DOMContentLoaded', function () {
    const business_card = document.getElementById('hoverBusinessCard');
    const clickMeArrowContainer = document.getElementById('clickMeContainer');
	let isFlipped = false;
    let defaultTransform = getComputedStyle(business_card).transform;
	let originalTransform = 'none';
	let defaultBoxShadow = getComputedStyle(business_card).boxShadow;

	function toggleImage(event) {
        businessCardInteracted = true;
        businessCardClicked = true;

        business_card.classList.remove('business-card-image_attention');
        clickMeArrowContainer.style.display = 'none';
        
		isFlipped = !isFlipped;

		originalTransform = getComputedStyle(business_card).transform;

		business_card.style.transform = originalTransform + 'scaleY(0)';

		setTimeout(function () {
			business_card.src = isFlipped ? 'Images/BusinessCard_back.png' : 'Images/BusinessCard_front.png';

            business_card.style.transform = defaultTransform;

            business_card.style.boxShadow = defaultBoxShadow;
            /*if(isInBounds)
            {
			    business_card.style.transform = originalTransform;
            }
            else
            {
                business_card.style.transform = defaultTransform;

                business_card.style.boxShadow = defaultBoxShadow;
            }*/
		}, 300);
	}

	business_card.addEventListener('click', toggleImage);

    if('ontouchstart' in window || navigator.maxTouchPoints)
    {
        business_card.addEventListener('touchstart', function(event) {
            event.preventDefault();

            businessCardInteracted = true;

            business_card.classList.remove('business-card-image_attention');
        }, {passive: true});

        business_card.addEventListener('touchmove', function (event) {
            event.preventDefault();
            
            const touch = event.touches[0];

            const imageRect = business_card.getBoundingClientRect();
            const touchXPercent = ((touch.clientX - imageRect.left) / imageRect.width) * 100;
            const touchYPercent = ((touch.clientY - imageRect.top) / imageRect.height) * 100;

            const rotateX = (touchXPercent - 50) * 0.2;
            const rotateY = (touchYPercent - 50) * 0.2;

            business_card.style.transform = 'perspective(900px) rotateX(' + rotateY + 'deg) rotateY(' + -rotateX + 'deg) scale(1.1, 1.1)';

            const shadowSize = 10 + Math.abs(rotateX) + Math.abs(rotateY);
            const shadowX = rotateY * 2;
            const shadowY = rotateX * 2;

            business_card.style.boxShadow = shadowY + 'px ' + shadowX + 'px ' + shadowSize + 'px rgba(0, 0, 0, 0.5)';
        });
        
        business_card.addEventListener('touchend', function () {
            business_card.style.transform = defaultTransform;

            business_card.style.boxShadow = defaultBoxShadow;
        });
    }
    if('onmousemove' in window)
    {
    	business_card.addEventListener('mouseenter', function () {
    		businessCardInteracted = true;

            business_card.classList.remove('business-card-image_attention');
    	});
    
    	business_card.addEventListener('mousemove', function (event) {
    		const imageRect = business_card.getBoundingClientRect();
    		const mouseXPercent = ((event.clientX - imageRect.left) / imageRect.width) * 100;
    		const mouseYPercent = ((event.clientY - imageRect.top) / imageRect.height) * 100;
    
    		const rotateX = (mouseXPercent - 50) * 0.2;
    		const rotateY = (mouseYPercent - 50) * 0.2;
    
    		business_card.style.transform = 'perspective(900px) rotateX(' + rotateY + 'deg) rotateY(' + -rotateX + 'deg) scale(1.1, 1.1)';
    
    		const shadowSize = 10 + Math.abs(rotateX) + Math.abs(rotateY);
    		const shadowX = rotateY * 2;
    		const shadowY = rotateX * 2;
    
    		business_card.style.boxShadow = shadowY + 'px ' + shadowX + 'px ' + shadowSize + 'px rgba(0, 0, 0, 0.5)';
    	});
    
    	business_card.addEventListener('mouseleave', function () {
    		business_card.style.transform = defaultTransform;
    
    		business_card.style.boxShadow = defaultBoxShadow;
    	});
    }
});
