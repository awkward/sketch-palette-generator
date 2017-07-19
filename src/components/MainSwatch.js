import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View } from 'react-sketchapp'
import { textColor } from '../utils'

const MainSwatch = ({ name, mainColorName, mainColorHex, ...props }) =>
  <View
    name={`Swatch ${name}`}
    style={{
      height: 120,
      width: 360,
      backgroundColor: mainColorHex,
      padding: 8,
      justifyContent: 'space-between',
      marginBottom: 8,
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
        name="Swatch Name"
        style={{ color: textColor(mainColorHex), fontWeight: '600' }}
      >
        {mainColorName}
      </Text>
      <Text
        name="Swatch Hex"
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

export default MainSwatch
