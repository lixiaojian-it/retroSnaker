//- 食物的构造函数
function Foot(width, height) {
    this.width = width;
    this.height = height;
    this.position = 'absolute'
    this.top = _.random(0, this.height * ($canvas.height() / this.height - 1));
    this.left = _.random(0, this.width * ($canvas.width() / this.width - 1));
    this.backgroundColor = 'yellow'
}

//- 渲染食物方法
Foot.prototype.render = function ($canvas) {
    //- 这里直接生成的 jQuery 包装Dom对象挂载到实例的对象上，
    //- 目的是为了在 Foot的其他方法中可以访问当前实例对象对应的真实DOM对象。  
    let $div = $('<div></div>');
    this.$this = $div;
    this.$this.css({
        width: this.width,
        height: this.height,
        position: this.position,
        top: this.top,
        left: this.left,
        backgroundColor: this.backgroundColor
    })
    //- 将食物添加到页面的画布中
    //- 这里$canvas 元素是在main.js中获取的，
    $canvas.append(this.$this)
}

//- 删除食物方法
Foot.prototype.removeEl = function () {
    //- 通过实例对象找到自己的 DOM 对象，然后删除
    this.$this.remove()
}




//- 删除食物
// setTimeout(function() {
//     foot.removeEl();
// }, 1000)
