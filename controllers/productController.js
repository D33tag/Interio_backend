const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product({ ...req.body,image: req.file.path});
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//fetch a single product 
exports.fetchProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json("Product not found");
    res.json(product);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


//update a product
exports.updateProduct = async (req, res) => {
    try {
        // Find the product by ID
        const product = await Product.findById(req.params.id);
        // check if product exists
        if (!product) return res.status(404).json("Product not found");
        //update product
        const updatedProduct = await Product.UpdateOne({
            __id: req.params.id,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            inStock: req.body.inStock,
            image: req.body.image,
        });
        res.status(200).json({message: "Product updated successfully", data: updatedProduct});
    } catch (error) {
        res.status(500).json(error.message);
        
    }
}