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
