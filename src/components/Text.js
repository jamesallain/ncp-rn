
// @flow

import React, {Component} from 'react'
import {Text} from 'react-native'
import colors from '../common/colors'

// TODO: Try using Styled Components or Galmorous

export class HeroText extends Component {
  render () {
    return (
      <Text style={{fontSize: 42, color: colors.primary, ...this.props.style}}>
        {this.props.children}
      </Text>
    )
  }
}

export class CellTitleText extends Component {
  render () {
    return (
      <Text style={{fontSize: 20, lineHeight: 25, marginBottom: 5}}>
        {this.props.children}
      </Text>
    )
  }
}

export class CellDescriptionText extends Component {
  render () {
    return (
      <Text style={{marginBottom: 5}}>
        {this.props.children}
      </Text>
    )
  }
}

export class CellBadgeText extends Component {
  render () {
    return (
      <Text style={{fontSize: 12, ...this.props.style}}>
        {this.props.children}
      </Text>
    )
  }
}
