import mongoose from "mongoose";

export const Pizza = mongoose.model("Pizza", { name: String });
