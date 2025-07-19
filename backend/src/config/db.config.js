const { default: mongoose } = require("mongoose"); 
const { PUBLIC_DATA } = require("../../constant"); 
exports.ConnectDB = async()=>{ 
    console.log("ConnectDB Called");
    
    try { 
        await mongoose.connect(PUBLIC_DATA.mongo_uri) 
        console.log(`Connected with ${mongoose.connection.host}`); 
        mongoose.connection.on("connected", () => {
        console.log("Connection event triggered");
    });
    } catch (error) 
    { 
        mongoose.disconnect(); process.exit(1); 
    } 
}