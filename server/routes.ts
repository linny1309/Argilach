const expressRoute = require("express");
const appRoute = expressRoute.Router();

export {appRoute as routes};

//appRoute.get('/', (req, res) => res.send('Hello World!'));
appRoute.get('/users', (req, res) => res.send([]));
appRoute.post('/users', (req, res) => res.send({body: req.body}));