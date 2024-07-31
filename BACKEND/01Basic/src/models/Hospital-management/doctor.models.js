import mongoose from "mongoose"



const doctoeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experianceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ],
},{timestamps:true});

export const Doctor=mongoose.model("Docotr",doctoeSchema);