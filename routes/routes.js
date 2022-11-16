const express = require("express");
const router = express.Router();
const { generateQr } = require("../utills/generate-qr");
const uuid = require("../utills/random-UID");

// Import the functions you need from the SDKs you need
const  { initializeApp } = require("firebase/app") ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATcP2JVkDthFUm5ympAT4hLWgXaoIfRXo",
    authDomain: "qr-data-92562.firebaseapp.com",
    projectId: "qr-data-92562",
    storageBucket: "qr-data-92562.appspot.com",
    messagingSenderId: "271653578578",
    appId: "1:271653578578:web:af9367ee4fd0c8c8c37c8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

router.get("/", async (req, res) => {
    let userID = uuid();
    let image = await generateQr(userID);
    console.log(app)

    res.send(image);
});

module.exports = router;
