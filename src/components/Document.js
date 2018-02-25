import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View, Page, Document } from 'react-sketchapp'
import Palette from './Palette'

const Palettes = ({ palettes }) => (
  <Document>
    <Page name="Palettes">
      {Object.keys(palettes).map((paletteName, i, keys) => (
        <Palette
          name={paletteName}
          mainColorKey="500"
          colors={palettes[paletteName]}
          key={paletteName}
          style={{
            left: i * (360 + 20),
            top: 0,
            position: 'absolute',
            width: 360,
          }}
        />
      ))}
    </Page>
  </Document>
)

Palettes.propTypes = {
  palettes: PropTypes.object.isRequired,
}

export default Palettes
