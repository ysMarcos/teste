import express from "express";
import orcamentoRouter from "./routes/orcamento.js";
import produtoOrcamentoRouter from "./routes/produto-orcamento.js"

const app = express();
app.use(express.json());

app.use('/orcamento', orcamentoRouter);
app.use('/produto', produtoOrcamentoRouter);

app.listen(3000, () => { console.log("Rodando na 3000") })