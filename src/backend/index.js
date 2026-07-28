const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running & hello from backend');
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});