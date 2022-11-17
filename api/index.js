const express = require("express");
const app = express();
const router = require("./routes/routes");
require("dotenv").config();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/", router)

app.listen(port, () => {
    console.log(`App listening on port http://127.0.0.1:${port}`);
});
