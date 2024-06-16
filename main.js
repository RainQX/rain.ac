const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/boot', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/boot.html'));
});

app.get('/desktop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/desktop.html'));
});

app.listen(80, () => console.log(`Server started on port 80`));