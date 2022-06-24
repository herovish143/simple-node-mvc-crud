const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product.controller");

router.get('/test', ProductController.test);
router.get('/', ProductController.listProducts);
router.post('/create', ProductController.createProduct);
router.get("/:id", ProductController.productDetails);
router.put("/:id/update", ProductController.updateProduct);
router.delete("/:id/delete", ProductController.deleteProduct );

module.exports = router;