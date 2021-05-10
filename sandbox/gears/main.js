window.addEventListener('load', function () {
    const gearEl = document.getElementById('gear');
    let rotate = 5;
    gearEl.addEventListener('wheel', function updateWheel(event) {
        event.preventDefault();
        const positionY = event.deltaY;
        if(positionY > 0) {
            rotate = rotate + 5;
            gearEl.style.transform = "rotate(" + rotate + 'deg' + ")";
        }else{
            rotate = rotate - 5;
            gearEl.style.transform = "rotate(" + rotate + 'deg' + ")";
        }
    })
});