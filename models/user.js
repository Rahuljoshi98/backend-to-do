import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        required: true,
        type: String,
        select: false,   //while extracting the data from db it is not visible directly if we want to see the password the we have to run the query
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const User = mongoose.model("User", userSchema);