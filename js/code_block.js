//- 定义公共属性
define(function (require, exports, module) {
    function Code_block() {
        this.width = 20;
        this.height = 20;
        this.position = 'absolute'
        this.top = 0;
        this.left = 0;
        this.$doms = [];
    }
    //- 定义公共方法

    //- 删除Dom元素
    Code_block.prototype.remove = function () {
        //- 获取到挂载到实例方法中初始化的div
        this.$doms.forEach(function (item) {
            item.remove();
        })
    }
    module.exports = Code_block;
})

