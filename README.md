# Front-End Projeto Be Growth

Este reposítório se trata da parte Front-End da aplicação desenvolvida para o processo seletivo da Be Growth. Está aplicação é uma complementação da aplicação [Back-End](https://github.com/AdoniroSalles/projectBeGrowth)

## Front-End
O Front-End da aplicação foi desenvolvido em Angular 9.

Abaixo segue a estrutura do projeto
```tree
├───app
│   ├───components
│   │   ├───alterar-produto
│   │   ├───empresa
│   │   ├───entregador
│   │   ├───form-cadastro
│   │   └───message
│   ├───core
│   │   ├───auth
│   │   └───interceptor
│   ├───interfaces
│   ├───services
│   └───views
│       ├───home-page
│       └───login-page
├───assets
└───environments
```
Conforme foi pedido, exitem dois tipos de usuários diferentes, a empresa alimentícia e o entregador. Para tanto na aplicação front-end, há uma pagina de login para poder identificar o tipo de usuário. 
Após feito o login o usuário será encaminhado para a página na qual o usuário tem acesso.
Na página da empresa alimentícia, ela poderá cadastrar novos produtos e terá uma listagem de produtos. Já na página do entregador, terá uma tabela com os produtos que podem ser recolhidos, e os produtos que já foram recolhidos.

Para poder rodar a aplicação, baixe ou clone o repositório no seu computador.

1. Rode o comando, para poder instalar as dependências:
```
npm install 
```

2. É necessário que se tenha o Angular CLI instalado. Rode o comando, para poder inicializar o servidor
```
ng serve -o
```

Se tudo der certo o projeto estará rodando na porta `http://localhost:4200`
Não se esqueça de rodar a aplicação back-end para que tudo funcione corretamente. 

### Algumas Observações
Faltou ser implementado a tela para cadastro de usuários, no entando pode-se mandar os dados via curl ou por algum outro programa que faça o envio de dados via post, como Insomnia ou Postman.
Para poder mandar seleciona o envio via post e mande os dados da maneira a baixo para a rota `http://localhost:3000/create`. Não esqueça que a aplicação back-end deve estar rodando pra que funcione corretamente. 
```
{
	"username" : "User",
	"email": "user@user.com",
	"password": "user",
	"password2": "user",
	"isEmpregador": false ou true
	"isEmpresa" : false ou true
}
```