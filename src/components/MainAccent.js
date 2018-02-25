import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View } from 'react-sketchapp'
import { textColor } from '../utils'

const MainAccent = ({ name, mainColorName, mainColorHex, ...props }) => (
  <View
    name={`Main accent ${name}`}
    style={{
      height: 120,
      width: '100%',
      backgroundColor: mainColorHex,
      padding: 8,
      justifyContent: 'space-between',
    }}
    {...props}
  >
    <Text
      name="Palette name"
      style={{ color: textColor(mainColorHex), fontWeight: '600' }}
    >
      {name}
    </Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text
        name="Shade"
        style={{ color: textColor(mainColorHex), fontWeight: '600' }}
      >
        {mainColorName}
      </Text>
      <Text
        name="Color"
        style={{
          color: textColor(mainColorHex),
          textAlign: 'right',
          fontWeight: '600',
        }}
      >
        {mainColorHex}
      </Text>
    </View>
  </View>
)

export default MainAccent
