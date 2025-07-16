// Import packages
import express, { json } from 'express';
import { connect, Schema, model } from 'mongoose';
import cors  from 'cors'
const app = express();

app.use(cors()); // Enable CORS for all routes
// Middleware
app.use(json()); // To parse JSON body

// Connect to MongoDB
connect('mongodb+srv://akankshamishra6038:NthQOznEiU9X7WJd@cluster2.pramc8h.mongodb.net/')


// Create Schema and Model
const cmsSchema = new Schema(
    {
       username : {
            type: String,
        },
        email: {
            type: String,
        },
      address:{
        type:String,
      } ,
      phone:{
        type:String,
      }
    }
);

const Username = model('Username', cmsSchema);

// Routes

// Create a new book
app.post('/users', async (req, res) => {
  try {
    const book = new Username(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const result = await Username.findByIdAndUpdate(id, req.body);
      if (!result) {
          return res.status(404).json({ message: 'Employee not found' });
      }
      return res.status(200).send({ message: 'Employee updated!!' });
  } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message })
  }
});

// Get all books
app.get('/users', async (req, res) => {
  try {
    const users = await Username.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single book by ID
app.get('/users/:id', async (req, res) => {
  try {
    const users = await Username.findById(req.params.id);
    if (!users) return res.status(404).json({ message: 'user is not defind' });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
  
  app.delete('/users/:id', async (req, res) => {
    try {
      const user = await Username.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(500).json({ "gggggggggggggg" :"ffgfg"});
    }
  });
  
// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
