function main() {
    const gear = document.querySelector('.gear');
    let rotation = 0;
    gear.addEventListener('mousewheel', function (event) {
        //console.log(event);
        event.preventDefault();

        rotation = rotation + event.deltaY * 15;
        gear.style.transform = `rotate(${rotation}deg)`;
    });
}

window.addEventListener('load', main)