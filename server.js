const express = require('express');

const app = express();
const port = 5000;
app.get('/api/customers', (req, res) => {
    const customer = [
        {id: 1, firstName: 'sourav', LastName:'Ojha'},
        {id: 2, firstName: 'Mrityunjay', LastName:'Sah'},
        {id: 3, firstName: 'Abhinandan', LastName:'Sah'},
    ];
    res.json(customer);
});


app.listen(port, () =>
 console.log(`Server started at ${port}`))