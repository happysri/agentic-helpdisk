import mongoose, { Schema, Document } from "mongoose";

export interface ITicket extends Document {
  title: string;
  description: string;
  status: "open" | "in_progress" | "closed";
  createdBy: mongoose.Types.ObjectId;
}

const TicketSchema = new Schema<ITicket>(
  {
    title: String,
    description: String,
    status: { type: String, enum: ["open", "in_progress", "closed"], default: "open" },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export const Ticket = mongoose.model<ITicket>("Ticket", TicketSchema);
