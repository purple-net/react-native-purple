## Cross Platform React Native UI Toolkit

## Get Started

*If you are using Exponent, you can run `npm i react-native-purple --save` and skip to step 3.*

#### Step 1

Install react-native-vector-icons (if you do not already have it)

`npm i react-native-vector-icons --save && react-native link react-native-vector-icons`

*If you have any issues with icons not working or installation of React Native Vector Icons, check out their installation guide [here](https://github.com/oblador/react-native-vector-icons#installation)*

#### Step 2

Install React Native Purple

`npm i react-native-purple --save`

or

`yarn add react-native-purple `

#### Step 3

Start using components

```js
import {
  PurpleButton
} from 'react-native-purple'

< PurpleButton
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

```

```js
<PurpleButton
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON'
  fontFamily='Comic Sans MS' />

```

# API


## Buttons
Buttons take a title and an optional [material icon name](https://design.google.com/icons/), as well as the props below.

> You can override Material icons with one of the following: zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo by providing an icon.type as a prop.

![Buttons](http://i.imgur.com/CVf1xbr.png)

```js
import { Button } from 'react-native-purple'

<PurpleButton
  title='BUTTON' />

<PurpleButton
  raised
  icon={{name: 'cached'}}
  title='BUTTON WITH ICON' />

<PurpleButton
  large
  iconRight
  icon={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />

<PurpleButton
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='LARGE WITH RIGHT ICON' />

<PurpleButton
  large
  icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
  title='OCTICON' />

```

#### PurpleButton props

> Also recevies all TouchableWithoutFeedback props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| Component | TouchableHighlight (iOS), TouchableNativeFeedback (android) | React Native Component | Specify other component such as TouchableOpacity or other (optional) |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| title | none | string | button title (required) |
| large | false | boolean | makes button large |
| fontFamily | System font (iOS), Roboto (android) | string | specify different font family |
| fontWeight | none | string | specify font weight for title (optional) |
| iconRight | false | boolean | moves icon to right of title |
| onPress | none | function | onPress method (required) |
| icon | {color: 'white'} | object {name: string, color: string, size: number, type: string (default is material, or choose one of zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | icon configuration (optional) |
| backgroundColor | #397af8 | string (color) | background color of button (optional) |
| borderRadius | none | number | adds border radius to card (optional) |
| color | white | string(color) | font color (optional) |
| textStyle | none | object (style) | text styling (optional)  |
| fontSize | 18 | number | font size (optional)  |
| underlayColor | transparent | string(color) | underlay color for button press (optional)  |
| raised | false | boolean | flag to add raised button styling (optional)  |
| disabled | false | boolean | prop to indicate button is disabled (optional) |


## Social Icons & Buttons

![Social Icons](http://i.imgur.com/HYZ5sbP.png)

```js
import { SocialIcon } from 'react-native-purple'

// Icon
<SocialIcon
  type='twitter'
/>

<SocialIcon
  raised={false}
  type='gitlab'
/>

<SocialIcon
  light
  type='medium'
/>

<SocialIcon
  light
  raised={false}
  type='medium'
/>


// Button
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>


<SocialIcon
  button
  light
  type='instagram'
/>

```

#### SocialIcon props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| title | none | string | title if made into a button (optional) |
| type | none | social media type (facebook, twitter, google-plus-official, pinterest, linkedin, youtube, vimeo, tumblr, instagram, quora, foursquare, wordpress, stumbleupon, github, github-alt, twitch, medium, soundcloud, gitlab, angellist, codepen) | social media type (required) |
| raised | true | boolean | raised adds a drop shadow, set to false to remove |
| button | false | boolean | creates button (optional) |
| onPress | none | function | onPress method (optional) |
| light | false | boolean | reverses icon color scheme, setting background to white and icon to primary color |
| iconStyle | none | object (style) | extra styling for icon component (optional) |
| style | none | object (style) | button styling (optional) |
| iconColor | white | string | icon color (optional) |
| iconSize | 24 | number | icon size (optional) |
| component | TouchableHighlight | React Native Component | type of button (optional)  |
| fontFamily | System font bold (iOS), Roboto-Black (android) | string | specify different font family (optional) |
| fontWeight | bold (ios), black(android) | string | specify font weight of title if set as a button with a title |
| fontStyle | none | object (style) | specify text styling (optional) |
| disabled | false | boolean | disable button (optional) |
| loading | false | boolean | shows loading indicator (optional) |


## Icons & Icon Buttons

![Icons](http://i.imgur.com/2A28abz.png)

Icons take the name of a [material icon](https://design.google.com/icons/) as a prop.

> You can override Material icons with one of the following: [font-awesome](http://fontawesome.io/icons/), [octicon](https://octicons.github.com/), [ionicon](http://ionicons.com/), [foundation](http://zurb.com/playground/foundation-icon-fonts-3), [evilicon](http://evil-icons.io/), [zocial](http://weloveiconfonts.com/), or [entypo](http://www.entypo.com/) by providing a type prop.

> Hint: use **reverse** to make your icon look like a button

```js

import { Icon } from 'react-native-purple'

<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />

```

#### Icon props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| name | none | string | name of icon (required) |
| type | material | string | type (defaults to material, options are `zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo`) |
| size | 26 | number | size of icon (optional) |
| color | black | string | color of icon (optional) |
| iconStyle | inherited style | object (style) | additional styling to icon (optional) |
| component | View if no onPress method is defined, TouchableHighlight if onPress method is defined | React Native component | update React Native Component (optional) |
| onPress | none | function | onPress method for button (optional) |
| underlayColor | icon color | string | underlayColor for press event |
| reverse | false | boolean | reverses color scheme (optional) |
| raised | false | boolean | adds box shadow to button (optional) |
| containerStyle | inherited styling | object (style) | add styling to container holding icon (optional) |
| reverseColor | white | string | specify reverse icon color (optional) |



## Lists

![Lists](http://i.imgur.com/7V8CIfl.png)

#### Using Map Function. Implemented with avatar.

```
import { List, ListItem } from 'react-native-purple'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
      />
    ))
  }
</List>

```

#### Using Map Function. Implemented with link and icon.

```js
import { List, ListItem } from 'react-native-purple'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  ... // more items
]

<List>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{name: item.icon}}
      />
    ))
  }
</List>
```

#### Using RN ListView. Implemented with link and avatar.

```js
import { List, ListItem } from 'react-native-purple'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={{uri:rowData.avatar_url}}
    />
  )
}

render () {
  return (
    <List>
      <ListView
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    </List>
  )
}

```

#### List Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: #cbd2d9 | object (style) | style the list container |


#### ListItem props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| avatar | none | object| left avatar (optional). Refer to [React Native Image Source](https://facebook.github.io/react-native/docs/images.html) |
| avatarStyle | none | object (style) | avatar styling (optional) |
| chevronColor | #bdc6cf | string | set chevron color |
| component | View or TouchableHighlight if onPress method is added as prop | React Native element | replace element with custom element (optional) |
| containerStyle | none | object (style) | additional main container styling (optional) |
| hideChevron | false | boolean | set if you do not want a chevron (optional) |
| leftIcon | none | object {name, color, style, type} (type defaults to material icons) | icon configuration for left icon (optional) |
| rightIcon | {name: 'chevron-right'} | object {name, color, style, type} (type defaults to material icons) | right icon (optional), will only show up if there is an onPress method attached ([material icon name](https://design.google.com/icons/)) |
| onPress | none | function | onPress method for link (optional) |
| roundAvatar | false | boolean | make left avatar round |
| subtitle | none | string | subtitle text (optional) |
| subtitleContainerStyle | none | style (object) | provide styling for subtitle container |
| subtitleStyle | none | object (style) | additional subtitle styling (optional ) |
| title | none | string | main title for list item (required) |
| titleStyle | none | object (style) | additional title styling (optional) |
| wrapperStyle | none | object (style) | additional wrapper styling (optional) |
| underlayColor | white | string | define underlay color for TouchableHighlight (optional) |
| fontFamily | HelevticaNeue (iOS), Roboto (android) | string | specify different font family |
| rightTitle | none | string | provide a rightTitle to have a title show up on the right side of the button, will override any icon on the right |
| rightTitleContainerStyle | flex: 1, alignItems: 'flex-end', justifyContent: 'center' | object (style) | style the outer container of the rightTitle text |
| rightTitleStyle | marginRight: 5, color: '#bdc6cf' | object (style) | style the text of the right text |
