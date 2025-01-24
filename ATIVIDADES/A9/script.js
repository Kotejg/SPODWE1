const image = document.querySelector('img');
const radiusTop = document.getElementById('radiusTop');
const radiusRight = document.getElementById('radiusRight');
const radiusBottom = document.getElementById('radiusBottom');
const radiusLeft = document.getElementById('radiusLeft');

function updateBorder() {
    image.style.borderRadius = `${radiusTop.value}px ${radiusRight.value}px ${radiusBottom.value}px ${radiusLeft.value}px`;
}

radiusTop.addEventListener('input', updateBorder);
radiusRight.addEventListener('input', updateBorder);
radiusBottom.addEventListener('input', updateBorder);
radiusLeft.addEventListener('input', updateBorder);