
const fs = require('fs');
//const index = fs.readFileSync('index.html', 'utf-8');
const mongoose = require('mongoose');
const model = require('../Models/Products')
const Product = model.Product
exports.createProducts = async (req, res) => {
    try {
        console.log(req.body);
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ error: 'Failed to save product' });
    }
};

exports. getproductsJSON = async(req, res)=>{
   id = req.params.id;
   const product = await Product.findById(id);
   res.json(product);
}
exports.detProductById = async(req, res)=>{
    const id = req.params.id;
    const product = await Product.findById(id)
    res.json(product)
}

exports.replaceProduct = async(req, res)=>{
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndReplace({_id:id}, req.body,{new:true})
        res.status(201).json(doc)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }

}
exports.updateProduct = async(req, res)=>{
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndUpdate({_id:id}, req.body,{new:true})
        res.status(201).json(doc)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
exports.deleteProduct = async(req, res)=>{
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({_id:id}, req.body,{new:true})
        res.status(201).json(doc)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}