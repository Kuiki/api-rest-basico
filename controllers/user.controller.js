const { response, request } = require('express');

const userGet = ( req = request, res = response ) => {
  const { q, nombre = '', page = 1, limit = 100 } = req.query;

  res.json({
    msg: 'get API - Controlador',
    q,
    nombre,
    page,
    limit
  });
}

const userPost = ( req, res = response ) => {
  const data = req.body;

  res.json({
    msg: 'post API - Controlador',
    data
  });
} 

const userPut = ( req, res = response ) => {
  const id = req.params.id;

  res.json({
    msg: 'put API - Controlador',
    id
  });
} 

const userDelete = ( req, res = response ) => {
  res.json({
    msg: 'delete API - Controlador'
  });
} 

const userPatch = ( req, res = response ) => {
  res.json({
    msg: 'patch API - Controlador'
  });
} 


module.exports = {
  userGet, userPost, userDelete, userPut, userPatch
}