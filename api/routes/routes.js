const express = require("express");
const router = express.Router();
const { generateQr } = require("../utills/generate-qr");
const uuid = require("../utills/random-UID");
const { setUID, realTimeSnapshots } = require("../utills/db-functions");

router.get("/", async (req, res) => {
    let userID = uuid();

    setUID(userID);

    let image = await generateQr(userID);

    res.send(userID);
});

router.get("/user/:UserID", async (req, res) => {
    // todo: update firebase with uid
    let userID = req.params.UserID

    if(!userID){
        console.log("user id null")
        res.send("user id null")
    }


    // res.send(req.params.UserID)

    let snapshotRes =  await   realTimeSnapshots(userID)

    res.send(snapshotRes)
});

module.exports = router;
