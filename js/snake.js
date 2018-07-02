//- 蛇身体的构造函数
function Snake() {
    this.width = 20;
    this.height = 20;
    this.size = 3;
    this.handColor = 'red';
    this.bodyColor = 'green';
    this.position = 'absolute';
    this.top = this.height * 2;
    this.left = this.width * 1;
    //- 声明一个二维数组，来初始化蛇的身体
    //- 每个数组中的：
    //- 索引0，表示为 X 轴的坐标, 
    //- 索引1，表示为 Y 轴的坐标。
    //- 索引2，表示为蛇的身体颜色
    this.body = [
        [1, 2, this.bodyColor],
        [2, 2, this.bodyColor],
        [3, 2, this.handColor],
    ]
}

// 渲染蛇
Snake.prototype.render = function ($canvas) {
    //- 遍历初始化数据
    this.$dom = [];
    this.body.forEach(function (item) {
        let $div = $('<div></div>');
        this.$dom.push($div)
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
//- 删除蛇
Snake.prototype.remove = function () {
    //- 获取到挂载到实例方法中初始化的div
    this.$dom.forEach(function (item) {
        item.remove();
    })
}
//- 移动蛇
Snake.prototype.move = function () {
    this.body.forEach(function(item) {
        item[0] += 1;
    })
}