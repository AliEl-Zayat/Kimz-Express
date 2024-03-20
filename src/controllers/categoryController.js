const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// Post a product
router.post("/category", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all products
router.get("/category", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
