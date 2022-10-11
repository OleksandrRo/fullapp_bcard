const express = require('express');
const app = express();
const port = 3001;
const cors = require("cors")
app.use(cors())

app.get("/", (req, res) => {
    res.json ({
      name: "Oleksndr",
      hobby: "hard_coding"
    });
});

app.listen(port, (err) => {
    if (err) {
        console.error('Something bad happened');
    } else {
        console.log(`Server is listening on ${port}`);
    }
});

