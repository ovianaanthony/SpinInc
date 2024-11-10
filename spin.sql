-- Criação da tabela Cliente
CREATE TABLE Cliente (
    CPF VARCHAR(14) PRIMARY KEY,          -- CPF como chave primária
    usuario VARCHAR(255) UNIQUE,          -- Nome de usuário único
    email VARCHAR(255) UNIQUE,            -- E-mail único
    endereço VARCHAR(255) UNIQUE,         -- Endereço único
    telefone VARCHAR(15) UNIQUE,          -- Telefone único
    avaliação FLOAT                       -- Avaliação do cliente (pode ser média de avaliações)
);

-- Criação da tabela Produto
CREATE TABLE Produto (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, -- ID do produto como chave primária e auto incremento
    CPFLocatário VARCHAR(14),             -- CPF do locatário (referência à tabela Cliente)
    preço FLOAT,                          -- Preço do produto
    prazo VARCHAR(255),                   -- Prazo de entrega ou similar
    descrição TEXT,                       -- Descrição do produto
    foto BLOB,                            -- Foto do produto (tipo BLOB para armazenar imagens)
    avaliação FLOAT,                      -- Avaliação do produto (pode ser média das avaliações dos clientes)
    FOREIGN KEY (CPFLocatário) REFERENCES Cliente(CPF) -- Relacionamento com Cliente
);

-- Criação da tabela Pedido
CREATE TABLE Pedido (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID do pedido como chave primária e auto incremento
    CPFLocador VARCHAR(14),                -- CPF do locador (referência à tabela Cliente)
    produtoID INTEGER,                     -- ID do produto (referência à tabela Produto)
    formaDePagamento VARCHAR(50),          -- Forma de pagamento (cartão, boleto, etc.)
    dataDeRetirada DATE,                   -- Data de retirada do produto
    dataDeDevolução DATE,                  -- Data de devolução do produto
    FOREIGN KEY (CPFLocador) REFERENCES Cliente(CPF), -- Relacionamento com Cliente (locador)
    FOREIGN KEY (produtoID) REFERENCES Produto(ID)    -- Relacionamento com Produto
);
