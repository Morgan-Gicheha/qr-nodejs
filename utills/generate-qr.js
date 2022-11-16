// Require the package
const QRCode = require("qrcode");

async function generateQr(userID) {
    try {
        const url = await QRCode.toDataURL(`http://127.0.0.1:3000/${userID}`);
        return url;
    } catch (err) {
        return err;
    }
}

// Converting the data into base64
module.exports = { generateQr };
