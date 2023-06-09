const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1/inotebook"

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully!");
      } catch (error) {
        console.error(error);
      }
}

module.exports = connectToMongo;