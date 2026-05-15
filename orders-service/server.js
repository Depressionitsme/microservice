const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/api/orders/process', (req, res) => {
    console.log("Otrzymano zamówienie:", req.body);
    res.json({ message: "Zamówienie przetworzone pomyślnie!" });
});

app.listen(3001);