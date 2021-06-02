/**
 * Светофоры находятся в полном беспорядке.
 * Ваша здача починить их и заставить работать как надо с помощью
 * setInterval и setTimeout
 *
 * Для включения и выключения лампочек достаточно добавить или убрать
 * класс red, yellow или green у нужного светофора.
 * С помощью текста внутри елементов с классом "bulb" можно отображать
 * оставшееся количество секунд.
 *
 * Сейчас классы и значения установлены только для демонстрации возможностей.
 * Все значения можно очистить перед реализацией.
 *
 * Реализуйте переключение светофора настолько детализировано, насколько у вас получится.
 *
 * 0. Если необходимо, добавьте id или классы светофорам
 * 1. Начните с установки только красного и зеленого
 * 2. Добавьте желтый между зеленым и красным
 * 3. Добавьте жетлый вместе с красным перед зеленым
 * 4. Обратный отсчет - конечно, задание со звездочкой
 */

/** YOUR CODE HERE */

function myFunction() {
    function trafficXallowed(){
        var crosswalkX = document.getElementById("crosswalkX");
        crosswalkX.classList.add("red");
        crosswalkX.classList.remove("green");

        var roadX = document.getElementById("roadX");
        roadX.classList.add("green");
        roadX.classList.remove("red");
    
        var crosswalkY = document.getElementById("crosswalkY");
        crosswalkY.classList.add("green");
        crosswalkY.classList.remove("red");
    
        var roadY = document.getElementById("roadY");
        roadY.classList.add("red");
        roadY.classList.remove("green");
    };
    setTimeout(trafficXallowed,0);

    function trafficXprohibited(){
        var crosswalkX = document.getElementById("crosswalkX");
        crosswalkX.classList.remove("red");
        crosswalkX.classList.add("green");
    
        var roadX = document.getElementById("roadX");
        roadX.classList.remove("green");
        roadX.classList.add("red");
    
        var crosswalkY = document.getElementById("crosswalkY");
        crosswalkY.classList.remove("green");
        crosswalkY.classList.add("red");
    
        var roadY = document.getElementById("roadY");
        roadY.classList.remove("red");
        roadY.classList.add("green");
    }
    setTimeout(trafficXprohibited,6000);

    function yellow() {
        function yellowOn() {
            var roadX = document.getElementById("roadX");
            roadX.classList.add("yellow");
    
            var roadX = document.getElementById("roadY");
            roadX.classList.add("yellow");
        }
        setTimeout(yellowOn, 3000);
    
        function yellowOff() {
            var roadX = document.getElementById("roadX");
            roadX.classList.remove("yellow");
    
            var roadX = document.getElementById("roadY");
            roadX.classList.remove("yellow");
        }
        setTimeout(yellowOff, 6000);
        setTimeout(yellowOn, 9000);
        setTimeout(yellowOff, 12000);
    }
        yellow();
};
myFunction();

setInterval(myFunction, 12000);




