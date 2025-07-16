// Import packages
import express, { json } from 'express';
import mongoose, { Schema, model } from 'mongoose';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(json());

// ✅ MongoDB Connection (Hardcoded but working)
const MONGO_URI = 'mongodb+srv://aanyamishra722:fr8PzVtrH2tBr8pT@mycluster.d0kmdpe.mongodb.net/myDatabase';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Schema and Model
const cmsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
const Book = model('Book', cmsSchema);

// Routes

// ➕ Create a new book
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 📚 Get all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📖 Get single book by ID
app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🚀 Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
