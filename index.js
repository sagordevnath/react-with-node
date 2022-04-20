const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to my personal first Node.js app!');
});

const users = [
    {id: 1, name: 'John', email: 'jhon@gmail.com', phone: '123-456-7890'},
    {id: 2, name: 'Alex', email: 'aAlex@gmail.com', phone: '123-456-7890'},
    {id: 3, name: 'Hales', email: 'hales@gmail.com', phone: '123-456-7890'},
    {id: 4, name: 'lewis', email: 'lewis@gmail.com', phone: '123-456-7890'},
    {id: 5, name: 'Haden', email: 'haden@gmail.com', phone: '123-456-7890'},
    {id: 6, name: 'Son', email: 'Sson@gmail.com', phone: '123-456-7890'},
    {id: 7, name: 'Messi', email: 'messi@gmail.com', phone: '123-456-7890'},
];

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
        res.send(matched);
    }
    else {    
    res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (rep, res) => {
    const fruits = ['apple', 'banana', 'orange', 'pineapple', 'pear'];
    res.send(fruits);
} )

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('sour sour fazli flavour');
})

app.listen(port, () => {
    console.log('Listening on port', port)
})