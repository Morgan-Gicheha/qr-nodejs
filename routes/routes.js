const express = require("express");
const router = express.Router();
const { generateQr } = require("../utills/generate-qr");
const uuid = require("../utills/random-UID");



router.get("/", async (req, res) => {
    let userID = uuid();
    let image = await generateQr(userID);


    res.send(image);
});

module.exports = router;
