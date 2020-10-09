const express = require('express');
const port = 8000;
const app = express();

// make the app listen

app.listen(port, function(err) {
    if(err) {
        console.log(`There is an error ${err}`)
    }
    console.log(`The Server is running successfully on Port number: ${port}`)
})