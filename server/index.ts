// express server running on 3000
import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json({ data: req.body });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

