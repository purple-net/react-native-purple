import React, { PropTypes,Component } from 'react'

import { View, StyleSheet,Text, TouchableHighlight, Image, Platform } from 'react-native'
import Icon from './Icon'
import PurpleText from './PurpleText'

import colors from '../config/colors'
import fonts from '../config/fonts'
import normalize from '../util/normalizeText'

let styles;
class PurpleItem extends Component{
  static defaultProps = {
    underlayColor: 'white',
    chevronColor: '#ccc',
    rightIcon: {name: 'chevron-right'},
    hideChevron: false,
    roundAvatar: false
  }
  static propTypes = {
    title: PropTypes.string,
    avatar: PropTypes.any,
    icon: PropTypes.any,
    onPress: PropTypes.func,
    rightIcon: PropTypes.object,
    underlayColor: PropTypes.string,
    subTitle: PropTypes.string,
    subTitleStyle: PropTypes.any,
    containerStyle: PropTypes.any,
    wrapperStyle: PropTypes.any,
    titleStyle: PropTypes.any,
    hideChevron: PropTypes.bool,
    chevronColor: PropTypes.string,
    roundAvatar: PropTypes.bool
  }
  constructor(props){
    super(props);
  }

  render(){
    let {
      onPress,
      title,
      leftIcon,
      rightIcon,
      avatar,
      avatarStyle,
      underlayColor,
      subTitle,
      subTitleStyle,
      containerStyle,
      wrapperStyle,
      titleStyle,
      hideChevron,
      chevronColor,
      roundAvatar,
      component,
      fontFamily,
      rightTitle,
      rightTitleContainerStyle,
      rightTitleStyle,
      subTitleContainerStyle,
    }=this.props;

    let Component = onPress ? TouchableHighlight : View;
    if (component) {
      Component = component
    }
    if (typeof avatar === 'string') {
      avatar = {uri: avatar}
    }
    return (
      <Component
        onPress={onPress}
        underlayColor={underlayColor}
        style={[styles.container, containerStyle && containerStyle]}>
        <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
          {
            leftIcon && leftIcon.name && (
              <Icon
                type={leftIcon.type}
                iconStyle={[styles.icon, leftIcon.style && leftIcon.style]}
                name={leftIcon.name}
                color={leftIcon.color || colors.grey4}
              />
            )
          }
          {
            avatar && (
              <Image
                style={[
                  styles.avatar,
                  roundAvatar && {borderRadius: 17},
                  avatarStyle && avatarStyle]}
                source={avatar}
                />
            )
          }
          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.title,
                titleStyle && titleStyle,
                !leftIcon && {marginLeft: 10},
                fontFamily && {fontFamily}
              ]}>{title}</Text>
            {subTitle && (
              <View style={subTitleContainerStyle}>
                <Text
                  style={[
                    styles.subTitle,
                    !leftIcon && {marginLeft: 10},
                    subTitleStyle && subTitleStyle,
                    fontFamily && {fontFamily}
                  ]}>{subTitle}</Text>
              </View>
            )}
          </View>
          {
            !hideChevron && !rightTitle && (
              <View style={styles.chevronContainer}>
                <Icon
                  type={rightIcon.type}
                  style={styles.chevron}
                  size={28}
                  name={rightIcon.name}
                  color={rightIcon.color || chevronColor} />
              </View>
            )
          }
          {
            rightTitle && (
              <View style={[styles.rightTitleContainer, rightTitleContainerStyle]}>
                <Text style={[styles.rightTitleStyle, rightTitleStyle]}>{rightTitle}</Text>
              </View>
            )
          }
        </View>
      </Component>
    )
  };
};

styles = StyleSheet.create({
  avatar: {
    width: 34,
    height: 34
  },
  container: {
    padding: 10,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 8
  },
  title: {
    fontSize: normalize(12),
    color: colors.grey1
  },
  subTitle: {
    color: colors.grey3,
    fontSize: normalize(10),
    marginTop: 5,
    ...Platform.select({
      ios: {
        fontWeight: '600'
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  chevronContainer: {
    flex: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  rightTitleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  rightTitleStyle: {
    marginRight: 5,
    color: colors.grey4
  },
  chevron: {
  }
})

export default PurpleItem
