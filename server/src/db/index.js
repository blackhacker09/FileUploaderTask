const mongoose = require('mongoose');

const createConnection = (successCallBack, errorCallback) => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/test')
        .then( () => {
            typeof successCallBack === "function" && successCallBack();
        })
        .catch((error) => {
            console.log(error);
            typeof errorCallback === "function" && errorCallback();
        })
}

module.exports = {
    createConnection,
};