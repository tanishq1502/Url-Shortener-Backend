const express = require('express');

const app = express();

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

const PORT = process.env.port || 5000;


app.use('/api/genUrl', require('./routes/genUrl'));
app.use('/', require('./routes/redirect'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
