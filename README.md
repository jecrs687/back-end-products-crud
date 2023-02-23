# Repositório com crud para vendas de produtos

Mini projeto de vendas de produtos utilizando clean code, arquitetura hexagonal, schemas de validação, query builder construído diretamente para o projeto e outras features.

### Requisitos

- Nodejs:  > 16.x

O projeto se divide em

``` scss
 .api {
        .middlewares
        .routes
        .use-cases
 }
 .domain{
        .adapters
        .entities
        .schemas 
        .services
        .utils{
                .Observability
        }
 }
 .infra{
       .configs{
                .Observability
       } 
       .entities
       .repositories
       .utils
 }
 ```

 Dessa forma o projeto segue o seguinte padrão cebola:

 ___

- Api: responsável pelas rotas, middlewares de rotas e use-cases para interagir com a camada de domínio.
- Domain: responsável pelas entidades, tipagem, adaptadores e conexão entre as camadas exteriores e interiores.
- infra: Recebe a maior parte hardcode do projeto, em que as configurações, bancos de dados e outras funções que não se referenciam a negócio estão salvar.

 ___
