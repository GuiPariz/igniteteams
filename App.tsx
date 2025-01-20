import { Groups } from '@screens/Groups'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'


import theme from './src/theme'
export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
       <Groups /> 
    </ThemeProvider>
  )
}

