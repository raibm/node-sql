const express = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');

const routes = express.Router();

// routes.get('/', (req, res) => {
//     return res.json({ hello: 'World' });
// });

//rotas de usuario
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

//rotas de endereco/
routes.post('/users/:user_id/address', AddressController.store);
routes.get('/users/:user_id/address', AddressController.index);

//rotas de tecnologias/
routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);

module.exports = routes;