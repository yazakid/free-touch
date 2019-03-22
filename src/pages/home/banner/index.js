import Taro, { Component } from '@tarojs/taro'
import { View, Image ,Text} from '@tarojs/components'
import './index.scss'

export default class SwiperBanner extends Component {
  static defaultProps = {

  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <View className='home-banner'>
        <View className='home-banner__item'>
              <Image
                className='home-banner__item-img'
                src={require('../../../assets/images/banner.png')}
              />
            </View>
      </View>
    )
  }
}
