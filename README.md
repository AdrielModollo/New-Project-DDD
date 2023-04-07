# New-Project-DDD

# Estrutura DDD

A aplicação em questão é uma aplicação em Node.js que utiliza a arquitetura DDD (Domain-Driven Design) para estruturar o código. O DDD é uma abordagem de desenvolvimento de software que enfatiza a modelagem do domínio da aplicação e o uso de linguagem ubíqua para criar um modelo de negócios efetivo.

A aplicação utiliza o framework Express.js para lidar com requisições HTTP e rotas, e o ORM TypeORM para lidar com a camada de acesso a dados e persistência. O TypeORM é uma biblioteca ORM que permite definir entidades do banco de dados como classes em linguagem de programação, que podem ser mapeadas para tabelas do banco de dados.

A aplicação possui uma arquitetura bem definida, com pastas específicas para cada camada do sistema (como a camada de domínio, camada de infraestrutura e camada de apresentação), o que permite uma melhor organização do código e uma separação clara de responsabilidades. Além disso, a aplicação faz uso de testes unitários para garantir que as partes individuais da aplicação funcionem corretamente e que as mudanças de código não introduzam regressões na aplicação.

Em resumo, a aplicação é uma aplicação em Node.js que utiliza a arquitetura DDD, o framework Express.js e o ORM TypeORM. Ela possui uma arquitetura bem definida, com pastas específicas para cada camada do sistema e faz uso de testes unitários para garantir a qualidade do código.

## tests

A pasta __tests__/unit contém os arquivos de teste unitários da aplicação. Testes unitários são testes que visam verificar o comportamento correto de partes isoladas do código, como funções e métodos, sem depender de outras partes da aplicação.

Os testes unitários na aplicação são escritos utilizando a biblioteca Jest, uma biblioteca de testes JavaScript com suporte para testes assíncronos, mocking e cobertura de código. A biblioteca Jest é configurada no arquivo jest.config.js na raiz do projeto.

Cada arquivo de teste unitário é nomeado com o mesmo nome do arquivo que está sendo testado e possui a extensão .spec.ts. Por exemplo, o arquivo user.service.ts tem seu teste unitário no arquivo user.service.spec.ts.

Dentro de cada arquivo de teste, são definidos um ou mais blocos de testes (descritos pela função describe) e para cada bloco de testes são criados vários testes individuais (descritos pela função it). Cada teste unitário define um cenário específico que testa uma funcionalidade da aplicação, usando um conjunto de dados de entrada e verificando se o resultado esperado é produzido.

Para testar corretamente a aplicação, os testes unitários devem ser escritos de maneira independente e devem ser executados em um ambiente isolado para garantir que os testes não interfiram uns nos outros. Para isso, a biblioteca Jest cria um ambiente de teste isolado para cada arquivo de teste, o que garante que os testes sejam executados de maneira independente e confiável.

Em resumo, a pasta __tests__/unit contém arquivos de teste unitário da aplicação, que são escritos usando a biblioteca Jest e testam partes isoladas do código da aplicação. Esses testes são importantes para garantir que as partes individuais da aplicação funcionem corretamente e que as mudanças de código não introduzam regressões na aplicação.

## database

A pasta migrations e o arquivo index.ts fazem parte do sistema de gerenciamento de banco de dados da aplicação.

A pasta migrations contém arquivos de migração que são usados para gerenciar o esquema do banco de dados, como a criação e remoção de tabelas, a adição ou remoção de colunas, e outras alterações de esquema. Esses arquivos são escritos em uma linguagem específica de migração e são executados em ordem cronológica para garantir que o esquema do banco de dados esteja sempre atualizado.

O arquivo index.ts é responsável por criar a conexão com o banco de dados e configurar o sistema de migração. Ele usa a biblioteca TypeORM para definir a configuração de conexão e a execução de migrações.

O TypeORM é uma biblioteca ORM (Object-Relational Mapping) que permite definir entidades do banco de dados como classes em linguagem de programação, que podem ser mapeadas para tabelas do banco de dados. O arquivo index.ts usa essa biblioteca para criar uma conexão com o banco de dados, definir as entidades da aplicação e executar as migrações.

Em resumo, a pasta migrations contém arquivos de migração que gerenciam o esquema do banco de dados e o arquivo index.ts é responsável por criar a conexão com o banco de dados e executar as migrações. Esses arquivos fazem parte do sistema de gerenciamento de banco de dados da aplicação e são importantes para garantir que o esquema do banco de dados esteja sempre atualizado e coerente com a aplicação.

## modules/api

- dtos: pasta que contém as classes DTO (Data Transfer Object) do projeto. Essas classes são usadas para transferir dados entre as camadas do projeto ou entre o projeto e outras aplicações.

- infra: pasta que contém as classes responsáveis pela implementação da camada de infraestrutura. Aqui estão as classes que lidam com banco de dados, comunicação com serviços externos, configurações e outras funcionalidades técnicas do sistema.

- repositories: pasta que contém as classes responsáveis pela implementação dos repositórios do projeto. Os repositórios são responsáveis pela persistência de dados e acesso ao banco de dados.

- services: pasta que contém as classes responsáveis pela implementação dos serviços do projeto. Os serviços implementam a lógica de negócio do sistema e são usados pelos controladores da aplicação.

## shared

A pasta shared contém código compartilhado entre vários módulos da aplicação. Essa abordagem permite que o código seja reutilizado em diferentes partes da aplicação, evitando a duplicação de código e reduzindo a complexidade do sistema.

Dentro da pasta shared, temos as seguintes subpastas:

- container: contém o arquivo container.ts, que é responsável por gerenciar a injeção de dependências em toda a aplicação. A injeção de dependências é uma técnica utilizada para desacoplar o código e facilitar a manutenção e testabilidade. O arquivo container.ts define como as dependências devem ser resolvidas em cada parte da aplicação.

- exceptions: contém as classes de exceção personalizadas da aplicação. As exceções são utilizadas para sinalizar que algo deu errado em alguma parte do sistema e podem ser capturadas em outras partes do código para tratamento adequado. As exceções personalizadas podem ser mais descritivas e específicas, facilitando a identificação e correção de problemas.

- routes: contém o arquivo index.ts que define as rotas da aplicação. As rotas são responsáveis por receber as requisições HTTP e encaminhá-las para as funções correspondentes que irão processá-las. O arquivo index.ts define as rotas e os middlewares que devem ser executados em cada uma delas.

Em resumo, a pasta shared contém código compartilhado entre vários módulos da aplicação, incluindo gerenciamento de dependências, classes de exceção personalizadas, middlewares, classes de provedores de serviços e definição de rotas. Essa abordagem permite que o código seja reutilizado em diferentes partes da aplicação, evitando a duplicação de código e reduzindo a complexidade do sistema.

# Inicilização com docker

Para inicializar a aplicação usando Docker, basta seguir os seguintes passos:

1° Certifique-se de que você possui o Docker e o yarn instalados na sua máquina. E Instale as dependências do projeto usando o comando "yarn".

2° Clone o repositório da aplicação para a sua máquina local:

git clone https://github.com/AdrielModollo/New-Project-DDD.git

3° Acesse a pasta do projeto:

cd New-Project-DDD

4° Copie o arquivo .env.example para um arquivo .env:

cp .env.example .env

Configure as variáveis de ambiente da aplicação no arquivo .env criado.

5° Execute as migrações do banco de dados para criar as tabelas necessárias:

docker-compose exec app npm run typeorm migration:run

Este comando irá executar as migrações do banco de dados dentro do container Docker da aplicação.

6° Execute o comando abaixo para criar e iniciar o container Docker da aplicação:

"yarn docker"

Este comando irá criar e iniciar o container Docker da aplicação e expor a porta 3000 para acesso externo.

Acesse http://localhost:3000 em um navegador para acessar a aplicação.
# TypeOrm

-yarn typeorm migration:create -n NameModel

-yarn typeorm migration:run

-yarn typeorm migration:revert