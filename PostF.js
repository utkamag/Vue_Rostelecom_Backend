import mongoose from "mongoose";

const PostF = new mongoose.Schema({
    directory_A: {type: String},
    name: {type: String},
    size: {type: String},
    date: {type: String},
    time: {type: String},
    img: {type: String}
})

export default mongoose.model('PostF', PostF)