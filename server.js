const express = require('express');
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//route-ok
app.use('/',require('./routes/mainRoute'));
app.use('/feltolt', require('./routes/uploadRoute'));



app.listen(5000,() => {
    console.log(`A szerver fut http://localhost:5000`);
});