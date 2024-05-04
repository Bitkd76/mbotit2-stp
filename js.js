window.addEventListener('scroll', function() {
    var image = document.getElementById('zoomingImage');
    var imagePosition = image.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var maxZoomLevel = 1.5;
    var initialZoomFactor = 1;
    var zoomLevel = Math.min(maxZoomLevel, initialZoomFactor + (windowHeight / 2 - Math.abs(imagePosition)) / (windowHeight / 2));


    image.style.transition = 'transform 0.3s ease';
    image.style.transform = 'translate(-50%, -50%) scale(' + zoomLevel + ')';

    var leftMessage = document.getElementById('msggauche');
    var rightMessage = document.getElementById('msgdroite');

    if (Math.abs(imagePosition) <= windowHeight / 4) {
        leftMessage.classList.add('active');
        rightMessage.classList.add('active');
    } else {
        leftMessage.classList.remove('active');
        rightMessage.classList.remove('active');
    }
    var messagePosition = image.getBoundingClientRect().left;
    leftMessage.style.left = Math.max(-20, messagePosition - 220) + 'px';
    rightMessage.style.right = Math.max(-20, messagePosition - 220) + 'px';
});
document.querySelectorAll('.message').forEach(function(message) {
    message.addEventListener('transitionend', function() {
        if (!message.classList.contains('active')) {
            if (message.classList.contains('gauche')) {
                message.classList.add('fade-out', 'gauche');
            } else if (message.classList.contains('droite')) {
                message.classList.add('fade-out', 'droite');
            }
        }
    });
});