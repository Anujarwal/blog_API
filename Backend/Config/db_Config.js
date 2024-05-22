const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOS_URL)
        console.log("DataBase Connect Successfully : "  , conn.connection.host.black.bgWhite)
    } catch (error) {
        console.log("DataBase Connect Failed : " , error.message.red)
    }
}

module.exports = connectDB;