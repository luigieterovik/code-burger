# Code Burger Master

## Descrição
A **Code Burger Master** é uma API RESTful desenvolvida em Node.js para gerenciar uma hamburgueria. Ela utiliza um banco de dados relacional (PostgreSQL) e um banco de dados não-relacional (MongoDB) com o Sequelize ORM para manipulação de dados.

## Funcionalidades
- Cadastro de usuários.
- Login com autenticação JWT.
- Gerenciamento de pedidos e cardápio.

---

## Instalação e Configuração

### 1. Baixar o código
1. Acesse o repositório no GitHub e baixe o código como arquivo ZIP ou clone o repositório.
2. Extraia o arquivo ZIP em um diretório de sua preferência.

### 2. Abrir o projeto
1. Abra o projeto em uma IDE, como o Visual Studio Code (VS Code).

### 3. Instalar as dependências
1. Certifique-se de que o Yarn está instalado em seu computador.
2. Execute o comando:
   ```
   yarn
   ```

### 4. Configurar containers Docker
1. Abra o Docker Desktop.

2. Crie um container para o PostgreSQL:
   ```
   docker run --name code-burger-master -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
   ```
   
   Certifique-se de que nenhum software está utilizando a porta 5432. Você pode customizar o nome do container e a senha do PostgreSQL conforme sua preferência.

4. Crie um container para o MongoDB:
   ```
   docker run --name code-burger-master-mongo -p 27017:27017 -d mongo
   ```

   Certifique-se de que nenhum software está utilizando a porta 27017.

6. Inicie ambos os containers no Docker Desktop.

### 5. Configurar o banco de dados relacional
1. Execute as migrações para criar as tabelas no PostgreSQL:
   ```
   yarn sequelize db:migrate
   ```

3. Opcional: Utilize o software Postbird para visualizar e manipular o banco de dados PostgreSQL.

### 6. Iniciar o servidor
1. Certifique-se de que a porta 3001 está livre.
2. Inicie o servidor com o comando:
   ```
   yarn dev
   ```

---

## Utilização

Antes de usar qualquer funcionalidade do software, será necessário um token de autorização.

1. Utilize um software para realizar requisições HTTP, como o Postman ou Insomnia.

### Cadastro de usuário
- Realize uma requisição POST para a rota:
  ```
  http://localhost:3001/users
  ```
  
- Corpo da requisição (JSON):
  ```
  {
    "name": "Seu Nome",
    "email": "seu.email@example.com",
    "password": "sua_senha",
    "admin": true
  }
  ```

### Login
- Realize uma requisição POST para a rota:
  ```
  http://localhost:3001/sessions
  ```
  
- Corpo da requisição (JSON):
  ```
  {
    "email": "seu.email@example.com",
    "password": "sua_senha"
  }
  ```

- Copie o token recebido na resposta.

### Acesso a rotas autenticadas
- Adicione o token no cabeçalho das suas requisições:
  - Header: Authorization
  - Valor: Bearer [token recebido]
 
<img src="https://i.imgur.com/4Dqeali.png">

Agora, você pode utilizar as demais funcionalidades do software.

---

## Rotas Disponíveis

### Produtos
- POST ``` /products ``` – Cadastra um produto.
  - Necessário anexar uma imagem no corpo da requisição.
- PUT ``` /products/:id``` – Atualiza um produto existente.
  - Necessário anexar uma imagem no corpo da requisição.
- GET ```/products``` – Lista todos os produtos.

### Categorias
- POST ```/categories``` – Cadastra uma categoria.
  - Necessário anexar uma imagem no corpo da requisição.
- PUT ```/categories/:id``` – Atualiza uma categoria existente.
  - Necessário anexar uma imagem no corpo da requisição.
- GET ```/categories``` – Lista todas as categorias.

### Pedidos
- POST ```/orders``` – Cria um novo pedido.
- PUT ```/orders/:id``` – Atualiza um pedido existente.
- GET ```/orders``` – Lista todos os pedidos.

**Nota:** Certas rotas exigem que uma imagem seja anexada no corpo da requisição. Use ferramentas como Postman ou Insomnia para enviar arquivos corretamente.

---

## Notas importantes
- Certifique-se de que as portas 5432, 27017 e 3001 estejam livres antes de iniciar o projeto.
- Personalize os comandos Docker se necessário, como nomes dos containers e senhas.
- Utilize as ferramentas sugeridas, como Postman, Insomnia e Postbird, para facilitar o uso e visualização do projeto.

---

**Bom uso!**
