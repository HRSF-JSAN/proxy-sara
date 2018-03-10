const app = require('./proxy.js');

const port = process.env.PORT || 3600;

app.listen(port, () => console.dir(`sever listening on ${port}`));
