//PASSWORD YSLfk5Tso3TU0Ygy
// MONGODB CONNECTION STRING  mongodb+srv://caleb:<password>@cluster0-kylem.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Thing created successfully!'
    });
  });

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: '',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: '',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;