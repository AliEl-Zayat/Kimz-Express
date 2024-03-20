const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Post a product
router.post("/product", async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get products by category
router.get("/productsByCat", async (req, res) => {
  const cat_prefix = req.query.cat_prefix;
  if (!cat_prefix) {
    return res.status(400).json({ error: "cat_prefix is required" });
  }
  try {
    const products = await Product.find({ cat_prefix }).exec();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a single product by ID
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
