import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {
  }

  componentWillUnmount() {
  }

  render () {
    return (
      <View className='home-flash-sale'>
        <View className='home-flash-sale__list'>
            <View className='home-flash-sale__list-item'>
              <Image
                className='home-flash-sale__list-item-img'
                src={require('../../../assets/images/item01.png')}
              />
              <Image
                className='home-flash-sale__list-item-img'
                src={require('../../../assets/images/item02.png')}
              />
            </View>
            <View className='home-flash-sale__list-item'>
              <Image
                className='home-flash-sale__list-item-img'
                src={require('../../../assets/images/item03.png')}
              />
              <Image
                className='home-flash-sale__list-item-img'
                src={require('../../../assets/images/item04.png')}
              />
            </View>
        </View>
      </View>
    )
  }
}
