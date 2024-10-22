## Backend - Wefit

### Para iniciar a aplicação é necessario ter o docker-compose instalado em sua máquina e rodar o seguinte comando:

    docker-compose up -D

o docker-compose vai criar um container de um banco de dados MySQL e iniciar o backend em Node. Você poderá acessar via localhost:5000.

O banco de dados vai estar disponivel somente dentro do compose

## Endpoints

### 1. Para ver todos os clientes registrados e seus endereços (GET)

- **URL**: `http://localhost:5000/customer`
- **Método**: `GET`

### 2. Criar um novo cliente (POST)

- **URL**: `http://localhost:5000/customer`
- **Método**: `POST`
- **Body**:
  ```json
  {
    "Customer": {
      "name": "john doe",
      "cnpj": "57227997060198",
      "cpf": "38141249044",
      "typeAccount": "PF",
      "cellPhone": "21925479699",
      "phone": "41999995553",
      "email": "natan_exmple@gmail.com"
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

## Curl para inserção de vendedor ou comprador

curl -X POST \
 'http://localhost:5000/customer' \
 --header 'Accept: _/_' \
 --header 'Content-Type: application/json' \
 --data-raw '{
"Customer":{
"name": "john doe",
"cnpj": "57227997060198",
"cpf": "38141249044",
"typeAccount": "PF",
"cellPhone": "21925479699",
"phone": "41999995553",
"email": "natan_exmple@gmail.com"
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
'
