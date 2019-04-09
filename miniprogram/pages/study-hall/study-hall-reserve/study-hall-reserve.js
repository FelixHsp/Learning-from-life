// pages/study hall/study hall-reserve/study hall-reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:'',
    timearray:['半小时','一小时','两小时','三小时'],
    book:{
      room_id:'',
      room_time:'',
      room_price_yuan:'',
      room_price:'',
      user_name:'',
      user_call:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onLoad: function (option) {
    this.setData({
      idx: option.id,
      ['book.room_id']:option.id
    });
  },
  bindtime: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeindex: e.detail.value,
    })
    if(e.detail.value==0){
      this.setData({
        ['book.room_price_yuan']:0.5*10+'元',
        ['book.room_price']:0.5*10,
        ['book.room_time']:0.5
      })
    }
    if (e.detail.value == 1) {
      this.setData({
        ['book.room_price_yuan']: 1 * 10 + '元',
        ['book.room_price']: 1 * 10,
        ['book.room_time']: 1
      })
    }
    if (e.detail.value == 2) {
      this.setData({
        ['book.room_price_yuan']: 2 * 10 + '元',
        ['book.room_price']: 2 * 10,
        ['book.room_time']: 2
      })
    }
    if (e.detail.value == 3) {
      this.setData({
        ['book.room_price_yuan']: 3 * 10 + '元',
        ['book.room_price']: 3 * 10,
        ['book.room_time']: 3
      })
    }
    if (e.detail.value == 4) {
      this.setData({
        ['book.room_price_yuan']: 4 * 10 + '元',
        ['book.room_price']: 4 * 10,
        ['book.room_time']: 4
      })
    }
  },
  username (e) {
    // console.log(e.detail.value)
    this.setData({
      ['book.user_name']:e.detail.value
    })
  },
  usercall(e) {
    // console.log(e.detail.value)
    this.setData({
      ['book.user_call']: e.detail.value
    })
  },
  submit () {
    if (this.data.book.user_name == '' || this.data.book.user_call == ''||this.data.book.room_time == ''){
      wx.showModal({
        title: '提示',
        content: '请将信息填写完整',
        success:function(){

        }
      })
    }else{
      console.log(this.data.book)
    }
  }
})