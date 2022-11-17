// Require the package
const QRCode = require("qrcode");
require("dotenv").config();

const baseurl = process.env.URL || "http://127.0.0.1:3000";
async function generateQr(userID) {
    try {
        // console.log(url)
        const url = await QRCode.toDataURL(`https://1d26-197-254-114-226.in.ngrok.io/${userID}`);
        // console.log(baseurl)
        return url;
    } catch (err) {
        return err;
    }
}

// Converting the data into base64
module.exports = { generateQr };
