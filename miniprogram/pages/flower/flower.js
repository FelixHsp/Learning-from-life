// pages/flower/flower.js
var num = 5 //计时器计数标志
var timer = '' //计时器名字
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
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

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
    timer = setInterval(this.move, 1000);
  },

  //选花之后的确定按钮
  start: function(e) {
    this.setData({
      isAbled: true,
      isShow: true,
      isFloShow: true,
      isBtnShow: false,
    })
    clearInterval(timer);
    this.play()
  },

  //放弃按钮
  giveUp() {
    this.setData({
      min: 45, //重置分
      sec: "00", //重置秒
      isBtnShow: true,
      isAbled:false,
      isFloShow:false
    })
    clearInterval(timer);
    num = 5; //重置标志位
    return
  },

  //定时器执行函数
  move() {
    console.log(this.data.min)
    //给秒补零
    var strS = this.zeroFill('' + parseInt(num % 60), 2)

    //赋值给text内容
    this.setData({
      sec: strS,
    })

    //当时间归零停止计时器
    if (this.data.min == 0 && num == 0) {
      this.giveUp()
      return
    } 
    if (num == 0) {
      this.setData({
        min: this.data.min - 1
      })
      num = 5
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
  click1() {
    this.setData({
      picture: '../../images/hua.png'
    })
  },
  click2() {
    this.setData({
      picture: '../../images/tree.jpg'
    })
  },
  click3() {
    this.setData({
      picture: '../../images/tip-one.png'
    })
  },
  click4() {
    this.setData({
      picture: '../../images/two.png'
    })
  },
  click5() {
    this.setData({
      picture: '../../images/self.png'
    })
  },
  click6() {
    this.setData({
      picture: '../../images/pay.png'
    })
  }
})