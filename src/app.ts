import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(process.env.PORT || 5000, () => console.log('Server is now running....'));