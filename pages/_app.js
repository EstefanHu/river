import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import firebaseCredentials from '../config/firebaseConfiguration'
import { StateProvider } from '../state'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {

  return <StateProvider>
    <Component {...pageProps} />
  </StateProvider>

  return <FirebaseAuthProvider {...firebaseCredentials} firebase={firebase}>
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  </FirebaseAuthProvider>
}

export default App
