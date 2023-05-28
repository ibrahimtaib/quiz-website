import dotenv from 'dotenv';
import express from 'express';
import router from './routes/router';

dotenv.config();
const app = express();

// Define middleware and routes here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
