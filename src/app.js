import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    //用于指定小程序由哪些页面组成
    pages: [
      'pages/home/home',
      'pages/webview/webview'
    ],

    //window:用于设置小程序的状态栏、导航条、标题、窗口背景色
    window: {
      //RN支持
      navigationBarBackgroundColor: '#fff',//导航栏背景颜色
      navigationBarTitleText: 'anydoor',//导航栏标题文字内容
      navigationBarTextStyle: 'black',//导航栏标题颜色，仅支持 black / white
      //RN不支持
      backgroundTextStyle: 'light',//下拉 loading 的样式，仅支持 dark / light
    },

    //客户端窗口的底部或顶部有 tab 栏可以切换页面
    tabBar: {
      //RN支持,且必填
      color: "#666",//tab 上的文字默认颜色
      selectedColor: "#b4282d",//tab 上的文字选中时的颜色
      backgroundColor: "#fafafa",//tab 的背景色
      borderStyle: 'black',//tabbar 上边框的颜色， 仅支持 black / white
      //tab 的列表，最少 2 个、最多 5 个 tab
      list: [{
        //必填
        pagePath: "pages/home/home",
        text: "首页",
        //非必填
        iconPath: "./assets/images/home.png",
        selectedIconPath: "./assets/images/home-active.png"
      }, {
        pagePath: "pages/home/home",
        text: " tabBar",
        iconPath: "./assets/images/star.png",
        selectedIconPath: "./assets/images/star.png"
      }],
      //RN不支持
      positon:'',
      custom:'',
    }
  }
  //RN不支持此生命周期，在微信/百度/字节跳动/支付宝小程序中这一生命周期方法对应 app 的 onLaunch
  componentWillMount() {}

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
