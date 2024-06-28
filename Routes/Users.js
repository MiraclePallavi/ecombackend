
const express = require('express');
const Router = express.Router();
const UsersControllers = require('../Controllers/Users');
Router
.post('/',UsersControllers.createProducts)

.get('/',UsersControllers.getproductsJSON)

.get('/:id',UsersControllers.detProductById )
.put('/:id', UsersControllers.replaceProduct)

.patch('/:id',UsersControllers.updateProduct)

.delete('/:id',UsersControllers.deleteProduct)

exports.routes = Router