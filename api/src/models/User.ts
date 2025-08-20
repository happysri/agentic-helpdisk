import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: "admin" | "agent" | "user";
}

const UserSchema = new Schema<IUser>({
  email: { type: String, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "agent", "user"], default: "user" }
});

export const User = mongoose.model<IUser>("User", UserSchema);
