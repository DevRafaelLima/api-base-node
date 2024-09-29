import mongoose from "mongoose";
import UserSchema from "../models/userSchema";

export const UserRepository = mongoose.model("users", UserSchema);