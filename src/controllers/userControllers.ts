import {Request , Response} from "express"

export const singUp = ( req : Request , res : Response ) => {
    res.send("singUp")
}

export const signIn = ( req : Request , res : Response ) => {
    res.send("signIn")
}