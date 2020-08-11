import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReachBottom () {
    console.log('===s=sdsds')
  }

  render () {
    return (
      <View className='index'>
        <van-button type="primary">按钮</van-button>
        <Text onClick={() => { Taro.navigateTo({ url: '/pages/about/index' }) }}>Hello world!</Text>
      </View>
    )
  }
}
