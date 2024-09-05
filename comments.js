// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set up server to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});