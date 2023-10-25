import {Request , Response} from "express" ;
import User , { IUser} from "../models/user" ;

export const singUp = async( req : Request , res : Response ) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({ mgs : "Campos Incompletos" })
    }
   const user = await User.findOne( {email : req.body.email }) ;
   if(user) {
    return res.status(400).json( { msg :"El usuario ya existe"} )
   }
   
}

export const signIn = ( req : Request , res : Response ) => {
    res.send("signIn")
}