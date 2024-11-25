const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.status(200);
    res.send("Hello dima iz 621");
});

app.listen(PORT, () => console.log('app running'));