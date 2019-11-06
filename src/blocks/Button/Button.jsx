import { useState, useEffect } from 'react'
import styled, { css } from 'reshadow'

import { useTheme } from '../../libs'

const styles = css`
  container {
    font-size: 2rem;
  }
`

export function Button(props) {
  const theme = useTheme((themeName) => import(`./button.${themeName}.js`))

  if (!theme) return null

  return styled(styles, theme)(<container as="button" {...props} />)
}