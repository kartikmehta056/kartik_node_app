import express from 'express';
const app = express();

const APP_PORT = process.env.APP_PORT || 3000;
const APP_BASE_URL = process.env.APP_BASE_URL || '/';

app.get('/health-check', (req, res) => {
    res.sendStatus(200);
});

app.use((req, res, next) => {
    console.log(`Request Received from : ${req.headers['x-forwarded-for'] || req.socket.remoteAddress} ${req.path}`);
    next();
});

const router = express.Router();

router.get('/hi', (req, res) => {
    res.send("Hello");
});

router.get('/greet/:name', (req, res) => {
    res.send(`Good morning, ${req.params.name}!`);
});

app.use(APP_BASE_URL, router);

app.use((req, res) => {
    res.sendStatus(404);
})

app.listen(APP_PORT, () => {
    console.log(`server listening on port : ${APP_PORT}`);
});
