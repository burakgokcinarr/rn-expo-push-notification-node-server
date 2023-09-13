import cors from 'cors';
import express, { json } from 'express';
const app       = express();
const port      = 5000;

// Notification Expo Node Server
import { sendNotification } from './src/Notification.js';

app.use(json());
app.use(cors());

app.post('/notification', async(req, res) => {

    let content  = req.body.content;
    const receip = await sendNotification(content);

    res.send(receip);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})