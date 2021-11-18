import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCQAvXtW_v_MGFwDWFcFrNGZSC4S4CPz_o",
    authDomain: "river-3094f.firebaseapp.com",
    projectId: "river-3094f",
    storageBucket: "river-3094f.appspot.com",
    messagingSenderId: "132716726044",
    appId: "1:132716726044:web:c9a5cdba4d48eb9abcdcd9"
})

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

const postsCol = collection(db, 'Posts')

export { auth, db, postsCol }