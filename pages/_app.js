import React from 'react'
import { StateProvider } from './../state'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {

  return <StateProvider>
    <Component {...pageProps} />
  </StateProvider>
}

export default App
