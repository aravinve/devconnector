const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Connected'));

app.use('/api/users', require('./routes/apis/usersRoute'));
app.use('/api/auth', require('./routes/apis/authRoute'));
app.use('/api/profile', require('./routes/apis/profileRoute'));
app.use('/api/posts', require('./routes/apis/postsRoute'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
