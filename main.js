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

app.get('/vz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/vz.html'));
});

app.listen(3001, () => console.log(`Server started on port 3001`));