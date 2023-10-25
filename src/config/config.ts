export default {

    jwtSecret : process.env.JWT_SECRET || "somesecrettocken",

    DB : {
        URI : process.env.MONGODB_URI || "mongodb://localhost:27017/" ,
        USER :  process.env.MONGODB_USER || "mongoroot",
        PASSWORD :  process.env.MONGODB_PASSWORD || "mongoroot-39435" ,
    }
}