CREATE TABLE `produtoOrcamento` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(50),
	`data` float,
	`orcamentoId` int,
	CONSTRAINT `produtoOrcamento_id` PRIMARY KEY(`id`)
);
