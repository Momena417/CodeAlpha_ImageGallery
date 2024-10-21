let currentImageIndex = 0;
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById('modal-image').src = images[currentImageIndex];
}


window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
