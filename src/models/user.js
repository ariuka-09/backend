import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema({
  username: { type: String, require: true, },
  name: { type: String, require: true },
  phone: { type: String, require: true },
  age: { type: Number, require: true },
});
export const User = mongoose.model("User", userSchema);
