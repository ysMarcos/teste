CREATE TABLE `orcamento` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(50),
	`data` date,
	CONSTRAINT `orcamento_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `produtoOrcamento` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nome` varchar(50),
	`valor` float,
	`orcamentoId` int,
	CONSTRAINT `produtoOrcamento_id` PRIMARY KEY(`id`)
);
