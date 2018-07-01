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
}

// 渲染蛇
Snake.prototype.render = function() {
    //- 声明一个空数组，将生成div依次追加到空数组中
    let listEl = [];
    for(let i=0; i<this.size; i++) {
        let $item = $('<div></div>')
        $item.css({
            width: this.width,
            height: this.height,
            backgroundColor: this.bodyColor,
            position: this.position,
            top: this.height,
            left: (i + 1) * this.width
        })
        listEl.push($item)
    }
      _.last(listEl).css({
           backgroundColor: this.handColor
       })
    listEl.forEach(function(item,index) {
     
    })
    $canvas.append(listEl)
}
