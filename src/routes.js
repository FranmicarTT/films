const cors = require('cors');
const films = require('./components/films/routes')

const apiEndpoint = 'api';

module.exports = app => {
    app.use(cors())
    // app.listen(80, function () {
    //     console.log('CORS-enabled web server listening on port 80')
    // })

    app.use(`/${apiEndpoint}/films`, films);
}

