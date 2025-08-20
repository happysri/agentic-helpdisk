import { Router } from "express";
import { Ticket } from "../models/Ticket";

const router = Router();

router.get("/", async (_, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

router.post("/", async (req, res) => {
  const ticket = await Ticket.create(req.body);
  res.json(ticket);
});

export default router;
