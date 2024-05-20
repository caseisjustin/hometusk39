import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        minlength: 4,
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const user = mongoose.model("user", userSchema);
export default user;