// pages/Personal_center/Personal_center.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //头像
    avatarUrl: '',
    //昵称
    nickName: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取用户信息 （头像、昵称）
    wx.getUserInfo({
      success(res){
      },
      //获取失败、未授权
      fail(err){
        console.log(err,"获取失败")
        //弹出模态框跳转到授权页面
        wx.showModal({
          title: '警告',
          content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
          success:function(res){
            if(res.confirm){
              wx.navigateTo({
                //授权页面路径
                url: '../index/index',
              })
            }
          }
        })
      }
    }),
    //判断是否授权
    wx.getSetting({
      success:res=>{
        if(res.authSetting['scope.userInfo']){
          //授权成功、获取微信头像、昵称
          wx.getUserInfo({
            success:res=>{
              //把头像昵称赋值给data
              this.setData({
                //头像
                avatarUrl: res.userInfo.avatarUrl,
                //昵称
                nickName: res.userInfo.nickName,
              })
            }
          })
        }
      }
    })
  },
  //跳转到名片夹
  toBusiness_card:function(){
    wx.navigateTo({
      url: '../Personal_center/Business_card/Business_card',
    })
  },
  //跳转到浏览记录
  toBrowse_record: function () {
    wx.navigateTo({
      url: '../Personal_center/Browse_record/Browse_record',
    })
  },
  //跳转到购买记录
  toPurchase_record: function () {
    wx.navigateTo({
      url: '../Personal_center/Purchase_record/Purchase_record',
    })
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

  }
})