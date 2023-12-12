import express from "express";
import { CreateOrcamentoController } from "../controllers/orcamento-controller.ts";

const router = express.Router();
const controller = new CreateOrcamentoController;

router.post("/", controller.create);

export default router;