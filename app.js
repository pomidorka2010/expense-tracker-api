const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use routes
app.use('/api', require('./routes/index'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
