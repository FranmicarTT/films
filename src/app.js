const express = require('express');
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

// connecting to db
mongoose.connect('mongodb://localhost/crud-films')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));

// importing routes
// app.use(cors())
// app.listen(80, function () {
//     console.log('CORS-enabled web server listening on port 80')
// })

// const apiEndpoint = 'api';

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)
app.set('views', path.join(__dirname, './components/films/routes'))
app.set('view engine', 'ejs')

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router
// app.use(`/`, indexRoutes);
// app.use('/api/films', require('./components/films/routes'));
require('./routes')(app);


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})
