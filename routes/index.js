const express = require('express');
const userRoutes = require('./user');
const expenseRoutes = require('./expense');
const router = express.Router();

router.use('/users', userRoutes);
router.use('/expenses', expenseRoutes);

module.exports = router;
