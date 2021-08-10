const mongoose = require('mongoose');
require('dotenv').config()


module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            family: 4
        };

        mongoose.connect(`mongodb+srv://discordbot:${process.env.PASS}@db.54dmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
        mongoose.set(`useFindAndModify`, false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on(`connected`, () => {
            console.log(`DB is ready`)
        })

        mongoose.connection.on(`disconnected`, () => {
            console.log(`Db is not ready`)
        })

        mongoose.connection.on(`err`, (err) => {
            console.log(`Db Connection Error:` +err)
        })
    }
}