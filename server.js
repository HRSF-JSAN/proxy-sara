const app = require('./proxy.js');

app.listen(app.get('port'), () => console.dir(`sever listening on ${app.get('port')}`));
