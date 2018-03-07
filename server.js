const app = require('./proxy.js');

app.listen(app.get('port'), () => console.log(`sever listening on ${app.get('port')}`));