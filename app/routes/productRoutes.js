const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes for CRUD operations
router.get('/products', productController.listProducts);

// Create a new product
router.post('/products', productController.createProduct);

// Get a product by ID
router.get('/:id', productController.getProductById);

// Update a product by ID
router.put('/:id', productController.updateProduct);

// Remove a product by ID
router.delete('/:id', productController.removeProduct);

module.exports = router;