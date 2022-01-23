import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyD_de9T1Qec064d8_6IafFMAIlNabAWhcM",
    authDomain: "colosseum-b1319.firebaseapp.com",
    projectId: "colosseum-b1319",
    storageBucket: "colosseum-b1319.appspot.com",
    messagingSenderId: "82595830077",
    appId: "1:82595830077:web:00d90ace95374d80578d54",
    measurementId: "G-6TR8C6073M"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }