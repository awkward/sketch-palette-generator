import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'
import chroma from 'chroma-js'
import palettes from './palettes'

// take a hex and give us a nice text color to put over it
const textColor = hex => {
  const vsWhite = chroma.contrast(hex, 'white')
  if (vsWhite > 4) {
    return '#FFF'
  }
  return chroma(hex).darken(3).hex()
}

const MainSwatch = ({ name, mainColorName, mainColorHex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 120,
      width: 360,
      backgroundColor: mainColorHex,
      padding: 8,
      justifyContent: 'space-between',
    }}
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
)

const Palette = ({ name, colors, mainColorKey }) => (
  <View>
    <MainSwatch
      name={name}
      mainColorName={mainColorKey}
      mainColorHex={colors[mainColorKey]}
    />
    {Object.keys(colors).map((color, i) => (
      <Swatch name={color} hex={colors[color]} key={color} />
    ))}
  </View>
)

const Swatch = ({ name, hex }) => (
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
)

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Swatch.propTypes = Color

const Document = ({ palettes }) => (
  <Artboard
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    {Object.keys(palettes).map((paletteName, i) => (
      <Palette
        name={paletteName}
        mainColorKey="500"
        colors={palettes[paletteName]}
      />
    ))}
  </Artboard>
)

Document.propTypes = {
  palettes: PropTypes.object.isRequired,
}

export default context => {
  render(<Document palettes={palettes} />, context.document.currentPage())
}
