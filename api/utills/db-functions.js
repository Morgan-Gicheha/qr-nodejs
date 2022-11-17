const { db } = require("./con-firebase");
const uuid = require("./random-UID");
const timestamp = require("unix-timestamp");

const collection = db.collection("userIDS");

const setUID = async (userid) => {
    const docref = collection.doc(userid);

    await docref.set({ userID: userid, notified: false, numberOfNotifications: 0, createdAt: timestamp.now() });
};

async function realTimeSnapshots(userid) {

   collection.doc(userid).onSnapshot(
        (docSnapshot) => {
            // console.log(`Received doc snapshot: ${JSON.stringify(docSnapshot)}`);
            xx=docSnapshot
            return xx ;
            // ...
        },
        (e) => {
            console.log(e);
        }
    );
    // console.log(" 29", xx);
    return "snapshot";
}

module.exports = { setUID, realTimeSnapshots };
