export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/pageA/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#636666',
    selectedColor: '#1BB34D',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: 'assets/img/home.png',
        selectedIconPath: 'assets/img/homeActive.png',
      },
      {
        text: '页面一',
        pagePath: 'pages/pageA/index',
        iconPath: 'assets/img/bridge.png',
        selectedIconPath: 'assets/img/bridgeActive.png',
      },
    ],
  },
})
