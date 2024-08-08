const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const itemRoutes = require('./routes/order');
app.use('/items', itemRoutes);

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
