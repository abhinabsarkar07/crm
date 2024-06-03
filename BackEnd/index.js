const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./db');
const router = require('./routers/mainRouter')
const port = 5000;


app.use(express.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use(router)

const server = app.listen(port, (req,res) => {
    console.log(`server is running on port ${port}`)
});

module.exports = server