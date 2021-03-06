const { Router } = require('express');
const { userGet, userPost, userPut, userDelete, userPatch } = require('../controllers/user.controller');

const route = Router();

route.get('/', userGet);
route.post('/', userPost);
route.put('/:id', userPut);
route.delete('/', userDelete);
route.patch('/', userPatch);

module.exports = route;