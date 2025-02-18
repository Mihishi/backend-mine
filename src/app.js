import express from 'express';

const app = express();
//import { productRouter } from './Routes/product.js';
import {getProducts} from './Appications/product.js';

app.use(express.json()); // For parsing JSON requests



app.get('/products', getProducts)



app.listen(8000, () => console.log(`Server running on port ${8000}`));