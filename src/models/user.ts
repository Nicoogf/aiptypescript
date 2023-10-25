import {model , Schema , Document } from "mongoose";
import bcrypt from "bcrypt" ;

export interface IUser extends Document {
    email : String ,
    password : String
}

const UserSchema = new Schema ({
    email: {
        type : String,
        unique : true ,
        required : true ,
        lowercase : true ,
        trim : true 
    },
    password : {
        type : String ,
        required :true
    }
})

UserSchema.pre<IUser>('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt( 10 ) ;
    const hash = await bcrypt.hash(user.password.toString(), salt);
    user.password = hash
    next() ;
});

UserSchema.methods.comparePassword = async function ( password:String  ) :Promise<boolean> {
    return await bcrypt.compare( password.toString() , this.password )
}

export default model<IUser>( 'User ' , UserSchema ) ;
