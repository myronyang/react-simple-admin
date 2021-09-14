import React from 'react'
import { Button } from 'antd'
import {
  mixLighten,
  mixDarken,
  tinycolor
} from 'vite-plugin-theme/es/colorUtils'
import { replaceStyleVariables } from 'vite-plugin-theme/es/client'
import { darkCssIsReady, loadDarkThemeCss } from 'vite-plugin-theme/es/client'
import {
  getThemeColors,
  generateColors
} from '../../../../build/conifg/themeConfig'

let MODE = 'dark'

const Page1 = () => {
  const onChangeColor = async () => {
    const color = '#ff4d4f'
    const colors = generateColors({
      mixDarken,
      mixLighten,
      tinycolor,
      color
    })

    return await replaceStyleVariables({
      colorVariables: [...getThemeColors(color), ...colors]
    })
  }

  const onChangeTheme = async () => {
    const htmlRoot = document.getElementById('htmlRoot')
    if (MODE === 'dark') {
      if (!darkCssIsReady) {
        await loadDarkThemeCss()
      }
      htmlRoot.setAttribute('data-theme', 'dark')
      MODE = 'light'
    } else {
      htmlRoot.setAttribute('data-theme', 'light')
      MODE = 'dark'
    }
  }

  return (
    <div>
      <Button onClick={onChangeColor}>Change theme</Button>
      <Button onClick={onChangeTheme}>Dark theme</Button>
    </div>
  )
}

export default Page1
