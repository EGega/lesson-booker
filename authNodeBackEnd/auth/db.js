const mongoose = require("mongoose")

module.exports = () => {
    try {
        mongoose.connect(process.env.DB)
        console.log("Connected to the database successfully");
    } catch (error) {
        console.log(error);
        console.log("Couldn't connect to the database");
    }
}