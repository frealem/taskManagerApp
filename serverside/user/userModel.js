import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userSchema=new mongoose.Schema({
fullname:{type:String},
email:{type:String},
password:{type:String},

},{timestamps:true}
)

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
})

userSchema.methods.matchPassword=async function(enteredPassword){

    return await bcrypt.compare(enteredPassword,this.password);
}

const userModel=mongoose.model('User',userSchema);
export default userModel;