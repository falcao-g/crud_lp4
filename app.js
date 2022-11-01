const express = require ('express');
const app = express();
const { json } = require('express');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('Server conectado em http://localhost:5000');
})

