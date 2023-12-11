import express from "express";
import { OrcamentoController } from "../controllers/orcamento-controller.js";

const router = express.Router();
const controller = new OrcamentoController;

router.post("/", controller.create);
router.get("/", controller.list);

export default router;