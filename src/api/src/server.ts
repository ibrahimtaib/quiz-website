import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();

// Define middleware and routes here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
