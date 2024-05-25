const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');
const port = 3003;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://izz:test12345@cluster0.wdnghpl.mongodb.net/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Root endpoint for fetching all users
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => console.log(err));
});

// Endpoint for creating a new user
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

// Endpoint for updating a user by ID
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        })
        .catch(err => res.status(400).json(err));
});

// Endpoint for fetching a user by ID
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        })
        .catch(err => res.status(400).json(err));
});

// Endpoint for deleting a user by ID
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        })
        .catch(err => res.status(400).json(err));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
