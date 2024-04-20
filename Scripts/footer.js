function isDeviceCapable() {
    return navigator.userAgent.match(/Android|iPhone|iPad|iPod|Windows Phone|iemobile/i);
}

function handlePhoneClick() {
    if(isDeviceCapable())
    {
        window.location.href = 'tel:+14434508469';
    }
    else
    {
        alert('Andrews Phone Number: +1 443-450-8469');
    }
}

/*document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('phoneModal').style.display = 'none';
});*/