
const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Add this line
const cors = require('cors');
const productRouter = require('./Routes/Products');
const userRouter = require('./Routes/Users');
const connectDB = require('./db/index.js');
const path = require('path');
// Load environment variables from .env file
dotenv.config({
  path: './.env'
});

// Connect to the database
connectDB();

// Middleware
server.use(cors());
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));

// Routes
server.use('/products', productRouter.routes);
server.use('/users', userRouter.routes);
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
// Error handling middleware (optional but recommended)
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  
});
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})


// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
