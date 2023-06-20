javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MCNSBLOGTEST', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to MongoDB successfully!');
}).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});

module.exports = mongoose.connection;
