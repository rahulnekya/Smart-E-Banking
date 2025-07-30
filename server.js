const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');


app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);


// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/smartbank', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(5000, () => console.log('Server running on port 5000'));
