import mongoose from "mongoose";
export const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    priority: {
        type: Number,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

export const TaskModel = mongoose.model("TaskDetails", taskSchema);
