import express from "express";
import orcamentoRouter from "./routes/orcamento.ts";
import produtoOrcamentoRouter from "./routes/produto-orcamento.ts"

const app = express();
app.use(express.json());

app.use('/orcamento', orcamentoRouter);
app.use('/produto', produtoOrcamentoRouter);

app.listen(3000, () => { console.log("Rodando na 3000") })