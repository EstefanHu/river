import React from 'react'
import { StateProvider } from '../state'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {

  return <Component {...pageProps} />

  return <StateProvider>
    <Component {...pageProps} />
  </StateProvider>

  // console.log('THIS => ', firebase)

  // return <FirebaseAuthProvider {...firebaseCredentials} firebase={firebase}>
  //   <StateProvider>
  //     <Component {...pageProps} />
  //   </StateProvider>
  // </FirebaseAuthProvider>
}

export default App
