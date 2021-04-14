const express = require('express'); //importa a biblioteca express
const mongoose = require('mongoose');
const routes = require('./routes');

 const app = express(); //coloca a aplicação no ar
 mongoose.connect( {
    useNewUrlParser: true,
    useUnifiedTopology : true,
 });
 app.use(express.json());
 app.use(routes);
 app.listen(3333);
