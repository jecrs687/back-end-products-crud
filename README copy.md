# Seedz: Teste prático para desenvolvedor Backend

## Objetivo
Imagine que você está criando uma API que irá atender a um e-commerce. Neste momento o frontend já está pronto e temos que finalizar os endpoints que serão utilizados para fazer o checkout e gerenciamento das vendas.

## Para isto temos algumas atividades:
1. Implementar o middleware de autorização > para garantir que o usuário que está fazendo a requisição esteja autenticado
2. Implementar o CRUD de Venda Produtos
- Criar uma nova venda
- Listar uma venda
- Listar todas as vendas
- Atualizar uma venda
- Cancelar uma venda(vendas não podem ser deletadas, estoque e saldo devem retornar)
3. As Vendas para serem aceitas devem seguir as seguintes regras:
- Os produtos devem possuir estoque suficiente
- O Usuário deve possuir saldo suficiente para realizar a compra

*Lembrando que é importante garantir a integridade dos dados em caso de falhas.

** Aqui, até a construção da lógica/criatividade que você usará para esta implementação conta, por isto deixamos o mais aberto possível 😉

### O que nós esperamos do seu teste:
- Ver na solução a utilização de conhecimentos em API, Typescript e manipulação de dados
- Sinta-se livre para adicionar novos pacotes/dependencias ou até mesmo refatorar algum trecho de código da aplicação, melhorias são bem-vindas, mas cuidado com tempo
- Código limpo e legível
- Testes são essenciais
- Documentação técnica
- Git, versione e documente sua evolução em um repositório

### Diferencial:
- Código rodando live (Bucket estático S3, Heroku, Firebase Hosting, etc)
- Código seguro
- Conteinerização
- Criação de uma pipeline de CI/CD

### O que nós não gostaríamos:
- Descobrir que não foi você quem fez o teste

### Disclaimer
- Aqui, não existe teste certo ou errado
- Explore e capriche na sua criatividade, decisões e organização
- O normal seria você mensurar o tempo do seu desenvolvimento e nos avisar. Porém como temos um prazo já definido, pedimos que leve isso em consideração e foque no objetivo de aplicar o máximo possível de conhecimentos que possui de olho no tempo

No mais, aproveite a oportunidade e se divirta!

Iremos fazer o feedback e compartilhar com você, mesmo que não seja aprovado.

----

| Tabela      | Campo     | Tipo    |
| ----------- | --------- | ------- |
| inventories | id        | INTEGER |
| inventories | productId | INTEGER |
| inventories | value     | INTEGER |
| products    | id        | INTEGER |
| products    | name      | INTEGER |
| products    | value     | INTEGER |
| sales       | id        | INTEGER |
| sales       | userId    | INTEGER |
| sales       | productId | INTEGER |
| sales       | quantity  | INTEGER |
| sales       | value     | INTEGER |
| users       | id        | INTEGER |
| users       | name      | STRING  |
| users       | balance   | INTEGER |