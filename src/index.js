const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.set('port', (process.env.PORT || 3010))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers','*',
    );
    next();
});

require('./routes/tareas.routes')(app);

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
});