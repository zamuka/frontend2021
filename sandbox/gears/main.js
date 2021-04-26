let rotate = 0;

function rotatingGear() {
    const gear = document.querySelector('.gear');
    function addOnWheel(event) {
        if (event.deltaY > 0) {
            rotate = rotate + 15;
        } else {
            rotate = rotate - 15;
        }
        gear.style.transform = `rotate(${rotate}deg)`;
        event.preventDefault();
    }
    gear.addEventListener('wheel', addOnWheel);
}
window.addEventListener('load',rotatingGear);
