const collection = require('../collection');
const config = require('../config');

module.exports = {
    addText: (data) => {
        return new Promise(async (resolve, reject) => {
           const db = await config.MongoDB();
           const doc = await db.collection(collection.USER_COLLECTION).insertOne(data);
           resolve(doc)
        })
    },
    getText:(id) => {
        return new Promise(async (resolve, reject) => {
            const db = await config.MongoDB();
            const doc = await db.collection(collection.USER_COLLECTION).findOne({_id:id});
            resolve(doc)
        })
    }
}