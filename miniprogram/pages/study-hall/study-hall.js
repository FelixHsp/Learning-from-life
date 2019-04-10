var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowYear: '',
    nowMou: '',
    nowDay: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
  onLoad: function() {
    /* wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    }) */
    wx.cloud.callFunction({
      // 云函数名称
      name: 'weather',
      // 传给云函数的参数
      data: {
        code: '101050101'
      },
    }).then(res => {
      // console.log(res.result)
      // console.log(JSON.parse(res.result).weatherinfo)
      // city = JSON.parse(res.result).weatherinfo.city
      // temp = JSON.parse(res.result).weatherinfo.temp
        this.setData({
          weather: JSON.parse(res.result).weatherinfo,
          ['weather.temp']: [JSON.parse(res.result).weatherinfo.temp]+'℃'
        })
      })
      .catch(console.error);
    this.setData({
      nowYear: util.formatYear(new Date()),
      nowMou: util.formatMou(new Date()),
      nowDay: util.formatDay(new Date())
    });
  },
  //添加数据库
  /* const db = wx.cloud.database({});
    const table = db.collection('todos');
    table.add({
      data: {
        description: "我正在学习云开发！",
        due: new Date(),
        tags: [
          "cloud",
          "database"
        ],
      },
      success: function (res) {
        console.log(res._id)
      }
    }); */
  // 读取数据库
  /* queryData: function () {
    const db = wx.cloud.database({});
    const table = db.collection('todos');
    table.doc("XKhyWHffS3SWfGcV").get({
      success: function (res) {
        console.log(res)
      }
    })
  }, */
  click1: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
        studyhall_name: '自习室一'
      })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=1',
            })
          }
        }
      })
    /* const db = wx.cloud.database({});
    const table = db.collection('todos');
    table.doc("f4cf49925cac6e5502ed8b1e42338136").get({
      success: function (res) {
        console.log(res)
      }
    }) */
  },
  click2: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
        studyhall_name: '自习室二'
      })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=2',
            })
          }
        }
      })
  },
  click3: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
      studyhall_name: '自习室三'
    })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=3',
            })
          }
        }
      })
  },
  click4: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
      studyhall_name: '自习室四'
    })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=4',
            })
          }
        }
      })
  },
  click5: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
      studyhall_name: '自习室五'
    })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=5',
            })
          }
        }
      })
  },
  click6: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
      studyhall_name: '自习室六'
    })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=6',
            })
          }
        }
      })
  },
  click7: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
      studyhall_name: '自习室七'
    })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=7',
            })
          }
        }
      })
  },
  click8: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
      studyhall_name: '自习室八'
    })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=8',
            })
          }
        }
      })
  },
  click9: function() {
    const db = wx.cloud.database({});
    const studyhalls = db.collection('studyhalls');
    studyhalls.where({
      studyhall_name: '自习室九'
    })
      .get({
        success(res) {
          // console.log(res.data[0].studyhall_tag)
          if (res.data[0].studyhall_tag == true) {
            wx.navigateTo({
              url: '../study-hall/study-hall-reserve/study-hall-reserve?id=9',
            })
          }
        }
      })
  }
})