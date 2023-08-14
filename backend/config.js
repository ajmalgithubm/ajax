const URL = 'mongodb://127.0.0.1:27017';
const  DATA_BASE = 'newDataBase';

const MongoClient = require('mongodb').MongoClient
module.exports = {
    MongoDB : () => {
        return new Promise((resolve, reject) => {
            MongoClient.connect(URL).then((client) => {
                const db = client.db(DATA_BASE)
                resolve(db);
            }).catch(err => {
                reject(err);
            })
        })
    }
}