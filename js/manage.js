//- 代码管理
define(function (require, exports, module) {
    //导入依赖项
    var $ = require('../vendor/jquery-3.2.1');
    let Snake = require('./snake');
    let Foot = require('./foot')
    function Manage() {
       
        this.startBtn = $('#start_btn');
        this.grade = $('#grade');
        this.pauseBtn = $('#pause_btn');
        this.snake = new Snake();
        this.foot = new Foot();
        this.$canvas = $('#canvas');
        this.isStarted = false;
        this.gameState = null;
    }
    module.exports = Manage;

    //- 初始化
    Manage.prototype.init = function () {
        //- 渲染食物
        this.foot.render(this.$canvas)
        //- 渲染蛇
        this.snake.render(this.$canvas);
        this.initEvent()
    }

    Manage.prototype.initEvent = function () {
        this.bindStart();
        this.bindKeyCode();
        this.gameSuspend();
    }

    Manage.prototype.bindStart = function () {
        //- 获取开始游戏按钮
        this.startBtn.on('click', function () {
            if (this.isStarted) {
                return false;
            }
            this.isStarted = true;
            let time = this.grade.val();
            this.gameState = setInterval(function () {
                this.snake.move(this.foot, this.$canvas);
                this.snake.remove();
                this.snake.render(this.$canvas);
            }.bind(this), time)
        }.bind(this))
    }
    Manage.prototype.bindKeyCode = function () {
        //- 添加按键事件
        document.addEventListener('keydown', function (e) {
            let keyCode = e.keyCode;
            //- 判断按下的事件
            switch (keyCode) {
                case 38:
                    this.snake.direction = 'up'
                    break;
                case 40:
                    this.snake.direction = 'down'
                    break;
                case 37:
                    this.snake.direction = 'left'
                    break;
                case 39:
                    this.snake.direction = 'right'
                    break;
            }
        }.bind(this))
    }
    //- 游戏暂停
    Manage.prototype.gameSuspend = function() {
        this.pauseBtn.on('click',function() {
            clearInterval(this.gameState)
            this.isStarted = false;
        }.bind(this))
    }
})



























