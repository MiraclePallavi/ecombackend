
const express = require('express');
const Router = express.Router();
const productController = require('../Controllers/Products');
Router
.post('/',productController.createProducts)

.get('/',productController.getproductsJSON)

.get('/:id',productController.detProductById )
.put('/:id', productController.replaceProduct)

.patch('/:id',productController.updateProduct)

.delete('/:id',productController.deleteProduct)

exports.routes = Router