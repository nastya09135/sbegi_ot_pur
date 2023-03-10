//функция, которая принимает размер в качестве аргумента и возвращает случайное число от 0 до этого размера (но не включая его)
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
 //принимает два аргумента: event и target. 
    var getDistance = function (event, target) {
        //хранит горизонтальное расстояние между кликом и кладом, которое мы получаем, вычитая target.x (x-координата клада) из event.offsetX (x-координата клика). 
        var diffX = event.offsetX - target.x;
        var diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };
    //лимит кликов
var clickLimit = 30;
//переменная clicks
var clicks = 0;
// Получить для расстояния строку подсказки
    var getDistanceHint = function (distance) {
        //расстояние меньше 10, она вернет «Обожжешься!»
        if (distance < 10) {
        return "Осталось немного!";
        // расстояние от 10 до 20 функция вернет «Очень горячо»
        } else if (distance < 20) {
        return "Почти спрятался";
        //расстояние от 20 до 40 функция вернет «Горячо»
        } else if (distance < 40) {
         alert("Осталось "+ (clickLimit - clicks) + " попыток. Поторопись!!!");
         return "Нужно поискать ещё немного";
        //расстояние от 40 до 80 функция вернет «Тепло»
        } else if (distance < 80) {
        return "Нужно поискать ещё";
        //расстояние от 80 до 160 функция вернет «Холодно»
        } else if (distance < 160) {
        alert("Осталось "+ (clickLimit - clicks) + " попыток.");
        return "Опасно";
        //расстояние от 160 до 320 функция вернет «Очень холодно»
        } else if (distance < 320) {
        return "Очень опасно";
        //расстояние от 320 до 640 функция вернет «Очень-очень холодно»
       } else if (distance < 640) {
        return "Очень очень опасно!!! :(";
        //расстояние больше 640 функция вернет «Змерзнешь!»
        }
       };
//задаются переменные width и height, соответствующие ширине и высоте элемента img, который мы используем в качестве карты
var width = 798;
var height = 798;

//Каждый раз при запуске этого кода мы получим новую случайную позицию на карте и координаты этой позиции будут сохранены в свойствах x и y переменной target
    var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
//функция, которая будет вызываться каждый раз, когда игрок кликнет по карте
$("#map").click(function (event) {
    clicks++;
    //конец игры если >30 кликов
    if(clicks > clickLimit){
        alert("ТЕБЯ ПОЙМАЛИ!!!");
        return;
    }
//код вычисляет расстояние, получит нужную строку с сообщением и отобразит эту строку
       var distance = getDistance(event, target);
// Преобразуем расстояние в подсказку
       var distanceHint = getDistanceHint(distance);
// Записываем в элемент #distance новую подсказку
       $("#distance").text(distanceHint);
       //сообщение о числе оставшихся попыток
       $("#clicks-remarning").text("Осталось"+(clickLimit-clicks)+ "попыток");
       //код проверяет расстояние до клада, в случае победы сообщая об этом игроку:
       if (distance < 15) {
        alert("Ты смог спрятаться! Сделано попыток: " + clicks);
       }
});


