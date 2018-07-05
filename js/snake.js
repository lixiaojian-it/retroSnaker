//- 蛇身体的构造函数
define(function (require, exports, module) {
    let $ = require('../vendor/jquery-3.2.1');
    let Code_block = require('./code_block')
    function Snake(width, height) {
        this.handColor = 'red';
        this.bodyColor = 'green';
        //- 声明一个二维数组，来初始化蛇的身体
        //- 每个数组中的：
        //- 索引0，表示为 X 轴的坐标, 
        //- 索引1，表示为 Y 轴的坐标。
        //- 索引2，表示为蛇的身体颜色
        this.body = [
            [1, 2, this.bodyColor],
            [2, 2, this.bodyColor],
            [3, 2, this.handColor],
        ];
        //- 初始化蛇的运动方向
        this.direction = 'right';
    }
    Snake.prototype = new Code_block();

    // 渲染蛇
    Snake.prototype.render = function ($canvas) {
        //- 遍历初始化数据
        this.$doms = [];
        this.body.forEach(function (item) {
            let $div = $('<div></div>');
            this.$doms.push($div)
            $div.css({
                width: this.width,
                height: this.height,
                position: this.position,
                backgroundColor: item[2],
                top: item[1] * this.height,
                left: item[0] * this.width
            })
            //- 将生成的$div 插入到$canvas
            $canvas.append($div)

            //- 这里使用的是bind来改变this的指向,我在forEach的时候并没有使用箭头函数
        }.bind(this))
    }

    //- 移动蛇
    Snake.prototype.move = function (foot, $canvas) {
        // this.body.forEach(function(item) {
        //     item[0] += 1;
        // })
        //- 遍历蛇的身体的，初始化数据,目前只会考虑二维数组的前两项。蛇的头部要根据蛇运动的方向来做处理。
        for (let i = 0; i < this.body.length - 1; i++) {
            //- 让第一项去等于第二项
            this.body[i][0] = this.body[i + 1][0];
            this.body[i][1] = this.body[i + 1][1];
        }
        //- 判断蛇运动的方向
        switch (this.direction) {
            case 'right':
                _.last(this.body)[0] += 1;
                break;
            case 'left':
                _.last(this.body)[0] -= 1;
                break;
            case 'down':
                _.last(this.body)[1] += 1;
                break;
            case 'up':
                _.last(this.body)[1] -= 1;
                break;
        }

        //- 获取到蛇头的坐标
        let handLeft = _.last(this.body)[0] * this.width;
        let handTop = _.last(this.body)[1] * this.height;
        //- 蛇在运动的时候去判断，蛇的头部是否与食物的坐标重合，如果重合，将食物删除，然后在重新渲染食物的坐标
        if (handLeft === foot.left && handTop === foot.top) {
            //- 当蛇头的坐标和食物的坐标重合后，记录蛇尾的最后一个代码块节点坐标
            let first = _.first(this.body);
            this.body.unshift([first[0], first[1], first[2]])
            foot.remove(); //- 先删除食物的代码块节点元素
            foot.render($canvas); //- 从新渲染食物
        }
    }
    module.exports = Snake;
})
