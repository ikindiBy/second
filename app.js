const express = require('express');
const path = require('path');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(
            config.get('mongoUri'), 
            // process.env.DB_ACCESS,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        );

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}!`));
    } catch (e){
        console.log(`Error:: ${e}`);
        process.exit(1);
    }
}

start();
