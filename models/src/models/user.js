import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema({
  email: { type: String, require: true, },
  password: { type: String, require: true },
  username: { type: String, require: true },
  age: { type: Number, require: true },
});
export const User = mongoose.model("User", userSchema);
