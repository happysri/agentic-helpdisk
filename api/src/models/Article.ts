import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  body: string;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: String,
    body: String
  },
  { timestamps: true }
);

export const Article = mongoose.model<IArticle>("Article", ArticleSchema);
