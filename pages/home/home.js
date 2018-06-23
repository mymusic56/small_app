// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeData: {}
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },

  doRequest: function() {
    var data = {
      data: '{"number":"home_page2","key":"d1d3a4bb67183b0df8db6922abacc032","param":{"idfa":"1234","imei":"","designId":29,"platform":"h5","chanle":"nineton"}}'
    };
    wx.request({
      url: 'https://xcy.signature.nineton.cn/api/apiaccess',
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      dataType: 'json',
      success: function(res){
        console.log(res);
        if (res.status == 1) {
          this.homeData = res.dataList;
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求数据
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
  
  }
})