const Product = require('../models/product');

// List all products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, published, category } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      published,
      category,
    });

    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  const { name, description, price, published, category } = req.body;
  const productId = req.params.id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, {
      name,
      description,
      price,
      published,
      category,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Remove a product by ID
exports.removeProduct = async (req, res) => {
  try {
    const removedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!removedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product removed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
