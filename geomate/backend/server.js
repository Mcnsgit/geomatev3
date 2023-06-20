// db.js
const mongoose = require('mongoose');
const db = require('./dbConfig');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database!');
});
mongoose.connect('mongodb+srv://cardigamiguel221:Dropshiping22@mcnsblogtest.ngpfkjm.mongodb.net/',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// pusher.js
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: 'your-app-id',
    key: 'your-key',
    secret: 'your-secret',
    cluster: 'your-cluster',
    useTLS: true
});

// Trigger an event on a channel
pusher.trigger('my-channel', 'my-event', {
    message: 'hello world'
});