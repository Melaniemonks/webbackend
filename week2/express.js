const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
    console.log('You are in the second middleware')
    res.send('<h1>welcome user</h1>');
});

app.use('/', (req, res, next) => {
    console.log('You are in the first middleware')
    res.send('<h1>You created your first</h1>');
    
});



app.listen(3001);