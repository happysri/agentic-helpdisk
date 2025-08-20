import mongoose, { Schema, Document } from "mongoose";

export interface IAuditLog extends Document {
  ticket: mongoose.Types.ObjectId;
  action: string;
  by: mongoose.Types.ObjectId;
}

const AuditLogSchema = new Schema<IAuditLog>(
  {
    ticket: { type: Schema.Types.ObjectId, ref: "Ticket" },
    action: String,
    by: { type: Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export const AuditLog = mongoose.model<IAuditLog>("AuditLog", AuditLogSchema);
