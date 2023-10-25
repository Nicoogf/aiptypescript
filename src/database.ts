import mongoose from "mongoose" ;
import config from "./config/config" ;

/*
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true 
}
*/

mongoose.connect( config.DB.URI , {}) ;

const connection = mongoose.connection ;


connection.once('open' , () => {
    console.log("MongoDB se conecto de forma Existosa")
})

connection.on("error" , ( err ) => {
    console.log( err ) ;
    process.exit(0)
})