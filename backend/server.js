const port = 8080;
const express = require('express');
const cors = require('cors'); 
const app = express();

console.clear();

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello test');
});

app.use(express.json());

app.post('/sign-up', (req, res) => {
    const {username,email,password} = req.body
    console.log(req.body)
    // do sql shits here amores
    
    res.status(200).json({ //give response to frontend
        data:{
            username,
            email,
            password
        },
        message:'form data passed'
    })
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
