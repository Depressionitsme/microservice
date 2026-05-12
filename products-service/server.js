const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop Gamingowy", price: 4500 },
        { id: 2, name: "Myszka Bezprzewodowa", price: 150 }
    ]);
});

app.listen(3000, () => console.log('Products Service on port 3000'));