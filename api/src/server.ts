import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth";
import ticketRoutes from "./routes/tickets";
import kbRoutes from "./routes/kb";
import auditRoutes from "./routes/audit";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/healthz", (_, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/kb", kbRoutes);
app.use("/api/audit", auditRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});

