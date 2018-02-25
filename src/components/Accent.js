import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View } from 'react-sketchapp'
import { textColor } from '../utils'
import { Color } from '../propTypes'

const Accent = ({ name, hex, ...props }) => (
  <View
    name={`Accent ${name}`}
    style={{
      height: 50,
      width: '100%',
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
      <Text name="Shade" style={{ color: textColor(hex), fontWeight: '600' }}>
        {name}
      </Text>
      <Text
        name="Color"
        style={{ color: textColor(hex), textAlign: 'right', fontWeight: '600' }}
      >
        {hex}
      </Text>
    </View>
  </View>
)

Accent.propTypes = Color

export default Accent
