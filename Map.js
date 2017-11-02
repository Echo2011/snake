(function (window) {
  // 构造函数
  function Map(option){ // option 是一个对象
    if(arguments.length == 0){
      this.color = "green"; // 这个颜色是在Map对象传值的时候,在参数里定义的,因此要加上 option
      this.row = 20; //地图上共放多少行,一个单元格相当于一个div
      this.col =  20; //地图上共放多少列
      this.size =  25;  // 一个单元格宽高多少px
      this.map = null;
    }else{
    this.color = option.color ||"green"; // 这个颜色是在Map对象传值的时候,在参数里定义的,因此要加上 option
    this.row = option.row || 20; //地图上共放多少行,一个单元格相当于一个div
    this.col = option.col || 30; //地图上共放多少列
    this.size = option.size || 25;  // 一个单元格宽高多少px
    this.map = null;
    }
  }

  // 原型, 追加渲染
  Map.prototype.render = function () {
    var div = document.createElement("div"); // 创建div
    this.map = div; // ??地图的标签, ??有什么用?
    div.style.backgroundColor = this.color; // 背景色
    div.style.width = this.col * this.size + "px"; // 宽度
    div.style.height = this.row * this.size + "px"; // 高度
    div.style.position = "relative"; // 定位,因为后面的蛇要进行绝对定位,要给父级添加relative的定位属性
    document.body.appendChild(div); // 插入到body中
  }

  window.Map = Map;
})(window);
