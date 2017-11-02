
(function (window) {
  // 构造函数
  function Food(option){
    this.map = option.map;  //  隶属于某一个地图,可以还有其他地图,是么
    this.color = option.color || "yellow"; // 食物的颜色
    this.x = 0; // 在第几列,而不是具体的px的值,食物的x轴的位置,即left的值,绝对定位
    this.y = 0; // 在第几行,食物的y轴的位置,top的值,
    this.size = option.size || 25; // 食物的宽度和高度的长度,px单位

    this.setPos(); // 初始化食物的位置
  }

  // 原型
  Food.prototype.render = function () {
    var div = document.createElement("div");
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    div.style.width = this.size + "px";
    div.style.height = this.size + "px";
    div.style.left = this.x * this.size + "px"; // this.x的位置已经在setPos方法中改变
    div.style.top = this.y * this.size + "px"; // this.y的位置已经在setPos方法中改变
    this.map.map.appendChild(div);
    // this.map 是Food实例化对象的一个属性
    // this.map.map 是指参数传过来的map对应的值
    // 也就是Map实例化的对象,
    // 在Map的原型中,设置了其map属性为创建好的div元素,就是那个地图的div
  };

  // 设置食物的随机位置
  Food.prototype.setPos = function () {
    this.x = parseInt(Math.random() * this.map.col); // 随机生成列,即x的横坐标的位置
    this.y = parseInt(Math.random() * this.map.row); // 随机生成行,即y的纵坐标的位置
  };


  window.Food = Food;
})(window)