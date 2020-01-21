const express = require('express'); //importa a biblioteca express
const mongoose = require('mongoose');
const routes = require('./routes');

 const app = express(); //coloca a aplicação no ar
 mongoose.connect('mongodb+srv://josenildolins:123123123@cluster0-u7nls.mongodb.net/semana1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology : true,
 });
 app.use(express.json());
 app.use(routes);




 app.listen(3333);