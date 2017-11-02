
(function (window) {
  // 构造函数
  function Snake(option){
    this.map = option.map; // 此项 option.map 得到的是地图的节点元素,用来存放 食物和蛇
    this.color = option.color || "#92EA21";
    this.direction = "left";
    this.speed = 1; // 每次移动1个单元格
    this.size = option.size || 25; // 蛇的每个单元格的大小宽度高度
    this.body = [ // 蛇的身体,初始由4个单元格组成,
      {x:16,y:4 },//在第16列,第4行上 // 蛇身体的第一个格格, 存的是x坐标和y坐标的列值和行值
      {x:17,y:4 },
      {x:18,y:4 },
      {x:19,y:4 }
    ]
  }

  // 原型
  Snake.prototype = {
    constructor : Snake,
    render : function () {
      this.move(); // 在每次渲染的时候,都要移动一次
      for (var i = 0; i < this.body.length; i++) {
        var obj = this.body[i];
        var s = document.createElement("div");

        s.style.width = this.size + "px";
        s.style.height = this.size + "px";
        s.style.backgroundColor = this.color;
        if(i == 0){
          s.style.backgroundColor = "#ff7300";
          s.style.zIndex = 999;
        };
        s.style.borderRadius = "50%";
        s.style.position = "absolute";
        s.style.left = obj.x * this.size + "px";
        s.style.top = obj.y * this.size + "px";
        this.map.map.appendChild(s);
      }
    },
    move : function () { // 传递身体位置
      //1 身体移动,前一个位置传递给下一个
      for (var i = this.body.length-1; i > 0; i--) {
        var obj = this.body;
        obj[i].x = obj[i-1].x;
        obj[i].y = obj[i-1].y;
      }
      //2 设置头部移动
      var head = this.body[0]; // 获取头部
      // 根据上下左右不同来设置头部的移动不同
      switch(this.direction){
        case "left":
          head.x -= 1;
          break;
        case "right":
          head.x += 1;
          break;
        case "down" :
          head.y += 1;
          break;
        case "up" :
          head.y -= 1;
          break;
      }
    },

    eat : function () { // 当蛇头碰到食物的时候,吃掉它
      console.log(11);
      var last = this.body[this.body.length-1]; // 获取最后一个元素
      var s = { // 创建一个对象,存储 x y 的值
        x : last.x,
        y : last.y
      };
      this.body.push(s); // 给body添加一个节点
    }
  }

  window.Snake = Snake;
})(window)