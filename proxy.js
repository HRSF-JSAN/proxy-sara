const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.set('port', process.env.PORT || 3004);

app.use(express.static(path.join(__dirname, 'src')));

app.listen(app.get('port'), () => console.log(`sever listening on ${app.get('port')}`));
