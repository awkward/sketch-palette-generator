import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View } from 'react-sketchapp'
import { textColor } from '../utils'
import { Color } from '../propTypes'

const Swatch = ({ name, hex, ...props }) =>
  <View
    name={`Swatch ${name}`}
    style={{
      height: 50,
      width: 360,
      backgroundColor: hex,
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
    }}
    {...props}
  >
    <View
      style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
    >
      <Text
        name="Swatch Name"
        style={{ color: textColor(hex), fontWeight: '600' }}
      >
        {name}
      </Text>
      <Text
        name="Swatch Hex"
        style={{ color: textColor(hex), textAlign: 'right', fontWeight: '600' }}
      >
        {hex}
      </Text>
    </View>
  </View>

Swatch.propTypes = Color

export default Swatch
