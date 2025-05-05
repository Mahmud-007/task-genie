import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  priority: { type: Number, min: 1, max: 5 },
  estimatedTime: { type: Number }, // in minutes
  createdAt: { type: Date, default: Date.now },
});

export const Task = models.Task || model("Task", TaskSchema);
