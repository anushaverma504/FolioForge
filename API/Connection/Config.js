const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("Db connected on ",process.env.URL);
        
    } catch (error) {
        console.log("Error : ",error);
    }
}

module.exports = dbconnect;