import express from "express";
import { CreateProdutoOrcamentoController } from "../controllers/produto-orcamento-controller.ts";


const router = express.Router();
const controller = new CreateProdutoOrcamentoController;

router.post("/", controller.create);
//router.get("/", controller.list);

export default router;