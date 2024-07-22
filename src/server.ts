// Import the 'express' module
import express from 'express';
import db from './models'

// ? Routes
import statusRouter from './routes/statuses'
import doctorRouter from './routes/doctor'

require('dotenv').config()

// Create an Express application
const app = express();


// Initialize DB
db.sequelize.sync().then(() => {
  console.log("DB Models synced");
});

// Set the port number for the server
const PORT = process.env.PORT
app.use(express.json())
app.use('/api', statusRouter)
app.use('/api', doctorRouter)

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});


// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${PORT}`);
});