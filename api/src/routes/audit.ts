import { Router } from "express";
import { AuditLog } from "../models/AuditLog";

const router = Router();

router.get("/:ticketId", async (req, res) => {
  const logs = await AuditLog.find({ ticket: req.params.ticketId });
  res.json(logs);
});

export default router;
