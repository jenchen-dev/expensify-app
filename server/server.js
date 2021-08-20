const path = require('path');
const express = require('express');
const app = express();
const publicFolderPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicFolderPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicFolderPath, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is up!');
});
