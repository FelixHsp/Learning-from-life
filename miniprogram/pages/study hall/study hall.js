var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowYear: '',
    nowMou:'',
    nowDay:''
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
  onLoad: function () {
    this.setData({
      nowYear: util.formatYear(new Date()),
      nowMou: util.formatMou(new Date()),
      nowDay: util.formatDay(new Date())
    });
  },
  click1: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=1',
    })
  },
  click2: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=2',
    })
  },
  click3: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=3',
    })
  },
  click4: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=4',
    })
  },
  click5: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=5',
    })
  },
  click6: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=6',
    })
  },
  click7: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=7',
    })
  },
  click8: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=8',
    })
  },
  click9: function () {
    wx.navigateTo({
      url: '../study hall/study hall-reserve/study hall-reserve?id=9',
    })
  } 
})