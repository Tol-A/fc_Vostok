import { useState } from 'react'

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: light)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || defaultTheme
  )


  return { theme, setTheme }
}