## Backend - Wefit

Seja bem vindo ao teste de backend da Wefit.

### Para iniciar o banco de dados é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -D

o docker-compose vai criar um container de um MySQL e você poderá acessar via localhost:3306 e a senha do usuário **root** é **senha_root_123**

### Para iniciar o servidor express basta executar o seguinte comando:

    npm start
    ou
    yarn start

Depois que concluir seu teste não de enviar o seu código junto a pasta data, nela está salvo o volume do MySQL criado pelo docker.

Boa sorte =)

# wefit

# Documentação da API de Cadastro de vendedor ou comprador

**_Exemplo de JSON de Entrada_**

O formato esperado para o cadastro de um cliente e seu respectivo endereço é o seguinte:

```json
{
  "Customer": {
    "name": "john doe",
    "cnpj": "67227997000198",
    "cpf": "38121249040",
    "typeAccount": "PF",
    "cellPhone": "21925439699",
    "phone": "41999995555",
    "email": "natan_example@gmail.com"
  },
  "Address": {
    "zipCode": "8383833",
    "street": "Rua exemplo",
    "number": "134",
    "neighborhood": "Batel",
    "complement": "perto de um mercado",
    "city": "Curitiba",
    "state": "PR"
  }
}
```

### Campos esperados:

- **Customer**: Objeto que contém os detalhes do cliente.
  - `name`: Nome do cliente (string).
  - `cnpj`: CNPJ do cliente, caso aplicável (string).
  - `cpf`: CPF do cliente, caso aplicável (string).
  - `typeAccount`: Tipo de conta, "PF" para pessoa física ou "PJ" para pessoa jurídica (enum).
  - `cellPhone`: Número de celular (string).
  - `phone`: Número de telefone fixo (string).
  - `email`: E-mail (string).
- **Address**: Objeto com os detalhes do endereço do cliente.
  - `zipCode`: Código postal (string).
  - `street`: Nome da rua (string).
  - `number`: Número da residência (string).
  - `neighborhood`: Bairro (string).
  - `complement`: Complemento do endereço (string, opcional).
  - `city`: Cidade (string).
  - `state`: Estado (ENUM ['PF','PJ']).

##
