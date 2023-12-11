import express from "express";
import { ProdutoOrcamentoController } from "../controllers/produto-orcamento-controller.ts";


const router = express.Router();
const controller = new ProdutoOrcamentoController;

router.post("/", controller.create);
//router.get("/", controller.list);

export default router;