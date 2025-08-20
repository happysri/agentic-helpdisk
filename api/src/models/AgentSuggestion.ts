import mongoose, { Schema, Document } from "mongoose";

export interface IAgentSuggestion extends Document {
  ticket: mongoose.Types.ObjectId;
  text: string;
  confidence: number;
}

const AgentSuggestionSchema = new Schema<IAgentSuggestion>({
  ticket: { type: Schema.Types.ObjectId, ref: "Ticket" },
  text: String,
  confidence: Number
});

export const AgentSuggestion = mongoose.model<IAgentSuggestion>(
  "AgentSuggestion",
  AgentSuggestionSchema
);
