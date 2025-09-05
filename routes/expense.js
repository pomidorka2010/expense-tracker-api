const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Create Expense
router.post('/', async (req, res) => {
  const expense = new Expense(req.body);
  try {
    await expense.save();
    res.status(201).send(expense);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get Expenses
router.get('/', async (req, res) => {
  const expenses = await Expense.find();
  res.send(expenses);
});

// Update Expense
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    res.send(expense);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete Expense
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.send({ message: 'Expense deleted' });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
