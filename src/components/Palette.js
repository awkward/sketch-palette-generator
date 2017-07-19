import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View } from 'react-sketchapp'
import MainSwatch from './MainSwatch'
import Swatch from './Swatch'

const Palette = ({ name, colors, mainColorKey, ...props }) =>
  <View {...props}>
    <MainSwatch
      name={name}
      mainColorName={mainColorKey}
      mainColorHex={colors[mainColorKey]}
    />
    {Object.keys(colors).map((color, i) =>
      <Swatch name={color} hex={colors[color]} key={color} />
    )}
  </View>

export default Palette
