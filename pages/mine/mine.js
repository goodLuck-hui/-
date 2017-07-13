// mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  top1: function () {
    console.log(22222);
  },

  top2: function () {
    console.log(6666);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("mine页面加载完成");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("mine页面渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("mine页面监听完成");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("mine页面隐藏完成");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("mine页面卸载完成");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("mine页面用户正在下拉动作");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("mine页面触发上拉触底事件");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("mine页面用后点击了分享");
  },
  onPageScroll : function () {
    console.log("页面在滚动");
  }
})