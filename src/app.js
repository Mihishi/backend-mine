
import express from 'express';
import { categoryRouter } from './Routes/category.js';
import { productRouter } from './Routes/product.js';

const app = express();

app.use(express.json()); // For parsing JSON requests

app.use('/products', productRouter);
app.use('/categories',categoryRouter);

app.listen(8000, () => console.log(`Server running on port ${8000}`));