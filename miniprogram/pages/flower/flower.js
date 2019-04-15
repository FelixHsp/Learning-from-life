// pages/flower/flower.js
var num = 60 //计时器计数标志
Page({

  /**
   * 页面的初始数据
   */
  data: {
    min: 45, //分
    sec: "00", //秒
    isAbled: false,
    isShow: true, //主页面和选花页面显隐切换
    picture: '', //图片选择
    isBtnShow: true, //按钮转换
    isFloShow: false, //默认图片显隐
    _num: 0, //选择花的时候点上会有特殊显示的标识位
    loading: '', //定时器
  },

  //从前台切到后台的时候重置计时器
  onHide: function() {
    this.giveUp()
  },

  //滑动silder时间数字改变
  bindValue: function(e) {
    this.setData({
      min: e.detail.value
    })
  },

  //开始按钮
  ok: function() {
    this.setData({
      isShow: false
    })
  },

  //倒计时
  play: function() {
    this.setData({
      loading: setInterval(this.move, 1000)
    })
    // timer = setInterval(this.move, 1000);
  },

  //选花之后的确定按钮
  start: function(e) {
    this.setData({
      isAbled: true,
      isShow: true,
      isFloShow: true,
      isBtnShow: false,
      min: this.data.min - 1,
    })
    clearInterval(this.data.loading);
    this.play()
  },

  //放弃按钮
  giveUp() {
    this.setData({
      min: 45, //重置分
      sec: "00", //重置秒
      isBtnShow: true,
      isAbled: false,
      isFloShow: false,
      // _crl: 0
    })
    clearInterval(this.data.loading);
    num = 60; //重置标志位
    return
  },

  //定时器执行函数
  move() {
    //给秒补零
    var strS = this.zeroFill('' + parseInt(num % 60), 2)
    this.setData({
      sec: strS,
    })
    //当时间归零停止计时器
    if (this.data.min == 0 && num == 0) {
      this.giveUp()
      return
    }
    //秒到0了分-1
    if (num == 0) {
      this.setData({
        min: this.data.min - 1
      })
      num = 60
      return
    }
    //每秒递减
    num--
  },

  //补零函数
  zeroFill(str, n) {
    //补零方法，str为数字字符串 n为需要的位数，不够补零
    if (str.length < n) {
      str = '0' + str
    }
    return str
  },

  //选花
  click1: function(e) {
    this.setData({
      picture: 'cloud://learninglife-c8aa8e.6c65-learninglife-c8aa8e/flowers/1.png',
      _num: e.target.dataset.num
    })

  },
  click2: function(e) {
    this.setData({
      picture: 'cloud://learninglife-c8aa8e.6c65-learninglife-c8aa8e/flowers/2.png',
      _num: e.target.dataset.num

    })
  },
  click3: function(e) {
    this.setData({
      picture: 'cloud://learninglife-c8aa8e.6c65-learninglife-c8aa8e/flowers/3.png',
      _num: e.target.dataset.num

    })
  },
  click4: function(e) {
    this.setData({
      picture: 'cloud://learninglife-c8aa8e.6c65-learninglife-c8aa8e/flowers/4.png',
      _num: e.target.dataset.num

    })
  },
  click5: function(e) {
    this.setData({
      picture: 'cloud://learninglife-c8aa8e.6c65-learninglife-c8aa8e/flowers/5.png',
      _num: e.target.dataset.num

    })
  },
  click6: function(e) {
    this.setData({
      picture: 'cloud://learninglife-c8aa8e.6c65-learninglife-c8aa8e/flowers/6.png',
      _num: e.target.dataset.num

    })
  },
})