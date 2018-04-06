import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'
import chroma from 'chroma-js'
import { Document } from './components'
import fs from '@skpm/fs'

function parseJsonPalette(filePath, cb) {
  try {
    const str = fs.readFileSync(filePath, 'utf8')
    const result = JSON.parse(str)
    cb(null, result)
  } catch (error) {
    cb(error, null)
  }
}

export default context => {
  const sketch = context.api()
  const fileDialog = NSOpenPanel.openPanel()
  fileDialog.setAllowsMultipleSelection(false)
  fileDialog.setAllowedFileTypes(['json'])
  const dialogResponse = fileDialog.runModal()

  if (dialogResponse == NSModalResponseOK) {
    const filePath = fileDialog.URLs()[0]

    parseJsonPalette(filePath, (err, palettes) => {
      if (err) {
        sketch.alert(
          'Could not parse JSON, please check if the file contains valid JSON.',
          'Something went wrong'
        )
        return
      }

      render(<Document palettes={palettes} />, context.document.currentPage())
    })
  }
}
