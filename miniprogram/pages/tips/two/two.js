// miniprogram/pages/tips/two/two.js
var oppid;
var ls;
// var ls2;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    add: '',
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        oppid = res.result.openid
        console.log(oppid)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    });
    wx.cloud.callFunction({
      // 云函数名称
      name: 'time',
      // 传给云函数的参数
      data: {

      },
    }).then(res => {
      this.data.time = JSON.parse(res.result).sysTime2
      // console.log(this.data.time)  
    });
    const db = wx.cloud.database({});
    const notes = db.collection('notes');
    notes.where({
      _openid: oppid,
    }).get({
      success: (res) => {
        // console.log(res.data)
        this.ls = res.data
        this.setData({
          ['array']: this.ls
        })
        console.log(this.data.array)
      }
    });
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
    const db = wx.cloud.database({});
    const notes = db.collection('notes');
    notes.where({
      _openid: oppid
    }).get({
      success: (res) => {
        // console.log(res.data)
        this.ls = res.data
        this.setData({
          ['array']: this.ls
        })
        console.log(this.data.array)
      }
    })
    wx.stopPullDownRefresh()
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
  //删除札记
  del: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否删除札记',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          })
          const db = wx.cloud.database({});
          const notes = db.collection('notes');
          // console.log(this.data)
          notes.doc(this.data.array[e.currentTarget.dataset.id]._id).remove({
            success(res) {

            }
          })
          // console.log(e.currentTarget.dataset.id)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

/**
   * 弹窗
   */
  showDialogBtn: function () {

    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
    // console.log(this.data.add)
    const db = wx.cloud.database({});
    const notes = db.collection('notes');
    notes.add({
      data: {
        notes_detail: this.data.add,
        notes_time: this.data.time
      }
    })
    this.hideModal();
  },
  inputChange: function (e) {
    this.data.add=e.detail.value
    console.log(this.data.add)
  }







})