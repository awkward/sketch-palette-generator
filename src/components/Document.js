import React from 'react'
import PropTypes from 'prop-types'
import { Artboard, Text, View } from 'react-sketchapp'
import Palette from './Palette'

const Document = ({ palettes }) =>
  <Artboard
    name="Swatches"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}
  >
    {Object.keys(palettes).map((paletteName, i, keys) =>
      <Palette
        name={paletteName}
        mainColorKey="500"
        colors={palettes[paletteName]}
        key={paletteName}
        style={{ marginRight: i === keys.length - 1 ? 0 : 8 }}
      />
    )}
  </Artboard>

Document.propTypes = {
  palettes: PropTypes.object.isRequired,
}

export default Document
