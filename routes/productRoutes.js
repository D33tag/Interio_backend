const router = require('express').Router();
const { createProduct, getProducts } = require('../controllers/productController');
const { verifyAdmin } = require('../middlewares/authMiddleware');

router.post('/create', verifyAdmin, createProduct);
router.get('/fetch-all', getProducts);

module.exports = router;