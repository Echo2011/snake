
(function (window) {
  function Game() {
    // 属性
    this.version = 1.0
    this.map = new Map();
    this.food = new Food({map: this.map});
    this.snake = new Snake({map: this.map});
    this.timer = null;
  }

    // 方法:
  Game.prototype = {
    constructor: Game,
    gameStart : function () {
      this.map.render(); // 渲染地图
      this.userControl();
      var that = this;
      this.timer = setInterval(function () {
        // 清空地图,否则当蛇移动的时候,原来的身体还在
        that.map.map.innerHTML = "";
        that.render();
        that.impact(); // 碰撞检测
        that.gameover(); // 检测是否结束游戏
      }, 300);
    },

    // 渲染
    render : function () {
      this.snake.render();
      this.food.render();
    },

    //3 碰撞检测
    // 当蛇头和食物的xy相等时,食物被吃掉,同时在其他地方随机产生一个新的食物,同时蛇的身体增加一节
    impact: function () {
      if (this.snake.body[0].x == this.food.x && this.snake.body[0].y == this.food.y) {
        this.snake.eat();
        this.food.setPos(); // 让食物重新随机位置

      }
    },

    //2 gameover
    gameover: function () {
      var head = this.snake.body[0]; // 蛇头
      if (head.x < 0 || head.y < 0 || head.x > this.map.col - 1 || head.y > this.map.row - 1) {
        clearInterval(this.timer);
        alert("gameover!");
      }
    },

    //3 让用户控制蛇的移动
    userControl : function () {
      var that = this;
      window.onkeydown = function (e) {
        var code = e.keyCode;
        switch (code) {
          case 37:
            that.snake.direction = 'left';
            break;
          case 38:
            that.snake.direction = 'up';
            break;
          case 39:
            that.snake.direction = 'right';
            break;
          case 40:
            that.snake.direction = 'down';
            break;
        }
      }
    }

  }


  window.Game = Game;
})(window);