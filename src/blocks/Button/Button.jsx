import { useState, useEffect } from 'react'
import styled from 'reshadow'

import styles from './button.css'
import { useTheme } from '../../libs'


export function Button(props) {
  const theme = useTheme((themeName) => import(`./button.${themeName}.css`))

  if (!theme) return null

  return styled(styles, theme)(<container as="button" {...props} />)
}