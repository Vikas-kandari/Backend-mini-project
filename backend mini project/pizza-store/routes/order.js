const express = require('express');
const router = express.Router();

let items = []; // This will act as our "database"

// POST /items - Add a new item
router.post('/', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1; // Simple ID assignment
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET /items - Retrieve all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET /items/:id - Retrieve a specific item by its ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// PUT /items/:id - Update an existing item by its ID
router.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  let item = items.find(i => i.id === itemId);
  if (item) {
    Object.assign(item, updatedItem);
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// DELETE /items/:id - Delete an item by its ID
router.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter(i => i.id !== itemId);
  res.status(204).send();
});

module.exports = router;

