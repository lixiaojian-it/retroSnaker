let $canvas = $('#canvas');
//- 食物的构造函数
let foot = new Foot(20,20);
//- 渲染食物
foot.render($canvas)


let snake = new Snake;
snake.render($canvas);
// snake.remove()

setInterval(function() {
    snake.move();
    snake.remove();
    snake.render($canvas);
},1000)









