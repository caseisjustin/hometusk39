import mongoose from "mongoose";
import internal from "stream";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 10,
        maxlength: 50
    },
    page: {
        type: Number,
        min: 80
    },
    price: {
        type: Number,
        min: 10000,
    },
    author: {
        type: String,
    }
})

const book = mongoose.model("book", bookSchema);
export default book;