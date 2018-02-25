import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View } from 'react-sketchapp'
import MainAccent from './MainAccent'
import Accent from './Accent'

const Palette = ({ name, colors, mainColorKey, ...props }) => (
  <Artboard name={name} {...props}>
    <MainAccent
      name={name}
      mainColorName={mainColorKey}
      mainColorHex={colors[mainColorKey]}
    />
    {Object.keys(colors).map((color, i) => (
      <Accent name={color} hex={colors[color]} key={color} />
    ))}
  </Artboard>
)

export default Palette
