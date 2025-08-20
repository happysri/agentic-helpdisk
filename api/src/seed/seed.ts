import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { Article } from "../models/Article";
import { Ticket } from "../models/Ticket";

const MONGO = process.env.MONGO_URL || "mongodb://localhost:27017/helpdesk";

async function seed() {
  await mongoose.connect(MONGO);
  console.log("Connected to MongoDB");

  await User.deleteMany({});
  await Article.deleteMany({});
  await Ticket.deleteMany({});

  const hash = await bcrypt.hash("pass123", 10);

  await User.create([
    { email: "admin@test.com", password: hash, role: "admin" },
    { email: "agent@test.com", password: hash, role: "agent" },
    { email: "user@test.com", password: hash, role: "user" }
  ]);

  await Article.create([
    { title: "Resetting password", body: "Go to settings and click reset password." },
    { title: "Troubleshooting errors", body: "Try restarting the app or clearing cache." }
  ]);

  await Ticket.create([
    { title: "Login issue", description: "I cannot log in", createdBy: null },
    { title: "Bug in dashboard", description: "Error when clicking button", createdBy: null }
  ]);

  console.log("✅ Seed complete");
  process.exit();
}

seed().catch(console.error);
