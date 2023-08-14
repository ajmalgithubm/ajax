const collection = require('../collection');
const config = require('../config');

module.exports = {
    addText: (data) => {
        return new Promise(async (resolve, reject) => {
            config.MongoDB().then(async (db) => {
               const doc = await db.collection(collection.USER_COLLECTION).insertOne(data);
               resolve(doc)
            }).catch((err) => {
                reject(err)
            })
        })
    },
}