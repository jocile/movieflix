<div align="center" id="top">

# Movieflix

<!-- Status -->

 🚧  Status Backend ok; 🚀 Frontend em desenvolvimento...  🚧

---

![Github top language](https://img.shields.io/github/languages/top/jocile/movieflix?color=56BEB8)
![Github top language](https://img.shields.io/github/languages/top/jocile/movieflix?color=56BEB8)
![Github language count](https://img.shields.io/github/languages/count/jocile/movieflix?color=56BEB8)
![Repository size](https://img.shields.io/github/repo-size/jocile/movieflix?color=56BEB8)
![License](https://img.shields.io/github/license/jocile/movieflix?color=56BEB8)
![Github issues](https://img.shields.io/github/issues/jocile/movieflix?color=56BEB8)
![Github forks](https://img.shields.io/github/forks/jocile/movieflix?color=56BEB8)
![Github stars](https://img.shields.io/github/stars/jocile/movieflix?color=56BEB8)

---

[Sobre](#dart-sobre) | [Características](#sparkles-caracteristicas) | [Tecnologias](#rocket-tecnologias) | [Requerimentos](#white_check_mark-requerimentos) | [Iniciando](#checkered_flag-iniciando) | [Referências](#books-referências)

</div>

## :dart: Sobre

O sistema movieflix usa spring boot como backend, onde é desenvolvido como desafio do Bootcamp [DevSuperior](https://devsuperior.com.br/).

O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a listagem de filmes, que mostra os filmes de forma paginada, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por gênero.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for MEMBER, ele pode ainda registrar uma avaliação nessa tela.

Um usuário possui nome, email e senha, sendo que o email é seu nome de usuário. Cada filme possui um título, subtítulo, uma imagem, ano de lançamento, sinopse, e um gênero. Os usuários membros podem registrar avaliações para os filmes. Um mesmo usuário membro pode deixar mais de uma avaliação para o mesmo filme.

![Diagrama conceitual](diagrama.png)

## :sparkles: Caracteristicas

- Segurança com validação de dados, autenticação e autorização de acesso:

```text
Caso de uso: Efetuar login
[IN] O usuário anônimo informa seu email e senha
[OUT] O sistema informa um token válido
```

- API de listar filmes;

```text
Caso de uso: Listar filmes
[OUT] O sistema apresenta uma listagem dos nomes de todos gêneros, bem como uma listagem paginada com título, subtítulo, ano e imagem dos filmes, ordenada alfabeticamente por título.
[IN] O usuário visitante ou membro seleciona, opcionalmente, um gênero.
[OUT] O sistema apresenta a listagem atualizada, restringindo somente ao gênero selecionado.
```

- API de detalhes de filmes;

```text
Caso de uso: Visualizar detalhes do filme
[IN] O usuário visitante ou membro seleciona um filme
[OUT] O sistema informa título, subtítulo, ano, imagem e sinopse do filme, e também uma listagem dos textos das avaliações daquele filme juntamente com nome do usuário que fez cada avaliação.
[IN] O usuário membro informa, opcionalmente, um texto para avaliação do filme.
[OUT] O sistema apresenta os dados atualizados, já aparecendo também a avaliação feita pelo usuário.
```

- Validação de dados
  - Exceção - Texto vazio. O sistema apresenta uma mensagem de que não é permitido texto vazio na avaliação

- Testes automatizados;

## :rocket: Tecnologias

As seguintes tecnologias são utilizadas nesse projeto:

- [Java JDK 11](https://docs.oracle.com/en/java/javase/11/);
  - [Maven builder](https://maven.apache.org/);
  - [Spring Boot framework](https://glysns.gitbook.io/springframework/);
    - [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.5.6/reference/htmlsingle/#boot-Caracteristicas-jpa-and-spring-data);
- [H2 in-memory database](https://www.h2database.com/);
  - [PgAdmin database administration platform](https://www.pgadmin.org/);

## :white_check_mark: Requerimentos

Antes de Iniciar :checkered_flag:, é necessário ter o ambiente [Java JDK 11](https://www.oracle.com/java/Tecnologias/downloads/#java11), [Git](https://git-scm.com) e [Maven](https://maven.apache.org/install.html) instalados.

## :checkered_flag: Iniciando

> Clone o projeto

```bash
git clone https://github.com/jocile/movieflix
```

> Acesse a pasta no seu editor

```bash
cd movieflix/backend
```

> Execute

```bash
./mvnw spring-boot:run
```

> A backend API será inicializada no browser\
> <http://localhost:8080/>

> 🚧 O frontend 🚀 será desenvolvido posteriormente ... 🚧

> and in-memory database H2 will be initialized in <http://localhost:8080/h2-console>
-->

## :books: Referências

- :file_folder: [Bootcamp Documentação SDS 5](https://github.com/devsuperior/sds5);

- :file_folder: [Collection do Postman para testar a API](https://www.getpostman.com/collections/72a46c64473b7611a021);

- :art: [Protótipos de tela para o Frontend no Figma](https://www.figma.com/file/6JQVnxKgKtVHLleSBBgRin/MovieFlix-front-listagem);

- :books: [Official Apache Maven documentation](https://maven.apache.org/guides/index.html);
- :link: [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.4.12/maven-plugin/reference/htmlsingle/);
- :link: [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.4.12/maven-plugin/reference/html/#build-image);
- :link: [Spring Web](https://docs.spring.io/spring-boot/docs/2.5.6/reference/htmlsingle/#Caracteristicas.developing-web-applications);
  - :link: [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/);
  - :link: [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/);
- :link: [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.5.6/reference/htmlsingle/#Caracteristicas.sql.jpa-and-spring-data);
  - :link: [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/);
- :link: [Spring Security](https://docs.spring.io/spring-boot/docs/2.7.0/reference/htmlsingle/#web.security);
  - :link: [Securing a Web Application](https://spring.io/guides/gs/securing-web/);
  - :link: [Enabling Cross Origin Requests for a RESTful Web Service](https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter)
  - :link: [Spring Boot and OAuth2](https://spring.io/guides/tutorials/spring-boot-oauth2/);
  - :link: [Authenticating a User with LDAP](https://spring.io/guides/gs/authenticating-ldap/);

[Back to top](#top)
