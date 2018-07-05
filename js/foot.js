//- 食物的构造函数
define(function (require, exports, module) {
    let Code_block = require('./code_block');
    let _ = require('../vendor/underscore');
    let $ = require('../vendor/jquery-3.2.1');

    function Foot(width, height) {
        this.backgroundColor = 'yellow'
    }
    Foot.prototype = new Code_block();
    //- 渲染食物方法
    Foot.prototype.render = function ($canvas) {
        this.$doms = [];
        //- 渲染时生成随机生成食物
        this.top = _.random(0, ($canvas.height() / this.height - 1)) * this.height;
        this.left = _.random(($canvas.width() / this.width - 1)) * this.width;
        //- 这里直接生成的 jQuery 包装Dom对象挂载到实例的对象上，
        //- 目的是为了在 Foot的其他方法中可以访问当前实例对象对应的真实DOM对象。  
        let $div = $('<div></div>');
        this.$doms.push($div)
        this.$doms[0].css({
            width: this.width,
            height: this.height,
            position: this.position,
            top: this.top,
            left: this.left,
            backgroundColor: this.backgroundColor
        })
        //- 将食物添加到页面的画布中
        //- 这里$canvas 元素是在main.js中获取的，
        $canvas.append(this.$doms)
    }

    module.exports = Foot;
})


