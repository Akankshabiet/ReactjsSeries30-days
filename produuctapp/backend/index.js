// Import packages
import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import cors  from 'cors'
const app = express();

app.use(cors()); // Enable CORS for all routes
// Middleware
app.use(json()); // To parse JSON body

// Connect to MongoDB
connect('mongodb+srv://akankshamishra6038:WHNTcp6mChrZi8u2@cluster0.xh7vbu9.mongodb.net/')
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ Could not connect to MongoDB', err));

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, 
  }
);

const Product = model('Product', productSchema);

// Routes

// Create a new Product
app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const product = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(500).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});