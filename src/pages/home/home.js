import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { Loading } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'
import { getWindowHeight } from '@utils/style'
import Banner from './banner'
import Policy from './policy'
import Subform from './subform'
import Recommend from './recommend'
import './home.scss'



@connect(state => state.home, { ...actions })
class Home extends Component {
  config = {
    navigationBarTitleText: 'free-touch'
  }

  state = {
    loaded: true,
    loading: false,
    lastItemId: 0,
    hasMore: true
  }

  componentDidMount() {
    // this.props.dispatchHome().then(() => {
    //   this.setState({ loaded: true })
    // })
  }

  handlePrevent = () => {
    // XXX 时间关系，首页只实现底部推荐商品的点击
    Taro.showToast({
      title: '二级页面未实现',
      icon: 'none'
    })
  }

  render () {
    if (!this.state.loaded) {
      return <Loading />
    }

    const { homeInfo } = this.props

    return (
      <View className='home'>
       <View className='home__nav'>
          <View className='home__nav-wrap'>
            <View className='home__nav-lf'>
              <Image className='home__nav-img' src={require('../../assets/images/back.png')} />
              <Text className='home__nav-lf-txt'>平安好贷</Text>
            </View>
            <View className='home__nav-rt'>
              <View className='home__nav-rt-item'>
                <Image className='home__nav-img' src={require('../../assets/images/star.png')} />
                <Text className='home__nav-rt-txt'>收藏</Text>
              </View>
              <View className='home__nav-rt-area'>
                <Image className='home__nav-rt-area-img1' src={require('../../assets/images/more.png')} />
                <Text>|</Text>
                <Image className='home__nav-rt-area-img2' src={require('../../assets/images/close.png')} />
              </View>
            </View>
          </View>
        </View>
        <ScrollView
          scrollY
          className='home__wrap'
          style={{ height: getWindowHeight() }}
        >
          <View>
            <Banner />
            <Policy />
            <Recommend />
            <Subform />
          </View>

          {this.state.loading &&
            <View className='home__loading'>
              <Text className='home__loading-txt'>正在加载中...</Text>
            </View>
          }
          {!this.state.hasMore &&
            <View className='home__loading home__loading--not-more'>
              <Text className='home__loading-txt'>更多内容，敬请期待</Text>
            </View>
          }
        </ScrollView>
      </View>
    )
  }
}

export default Home
