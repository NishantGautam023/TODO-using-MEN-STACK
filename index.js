const express = require('express');
const port = 8000;

const app = express();

app.use(express.urlencoded());
app.use(express.static('assets')); // use the middleware access the static files 

 // set our view engine
 app.set('view engine','ejs');
 app.set('views','./views');


// setting our routes for the localhost:8000 path 
app.get('/', function(req, res) {
    return res.render('home'); // since we are rendering our home view
})




// make the app listen
app.listen(port, function(err) {
    if(err) {
        console.log(`There is an error ${err}`)
    }
    console.log(`The Server is running successfully on Port number: ${port}`)
})