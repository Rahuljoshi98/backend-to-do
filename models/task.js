import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    // reference should be the name of collection which is User
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const Task = mongoose.model("Task", taskSchema);