const express = require('express');
const path = require('path');
const config = require('config');

const app = express();

const PORT = config.get('port') || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function start() {
    try {
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}:::`));
    } catch (e){
        console.log(`Eror:: ${e}`);
        process.exit(1);
    }
}

start();
