// 1- Crie um objeto chamado user com as seguintes propriedades:

// - username
// - email
// - age

// E com os seguintes métodos (ações):

// - login: com o console.log("Efetuou o login");
// - logout: com o console.log("Efetuou o logout");

var user = {
    username: 'GadiegoNogueira',
    email: 'ngadiego@gmail.com',
    age: 25,
    login: function() {
        console.log("Efetuou o login");
    },
    logout: function() {
        console.log("Efetuou o logout");
    } 
}

// 2- Mostre uma propriedade! Agora dê um console.log apenas da propriedade age

console.log("Idade: " + user.age);

// 3-  Adicione uma nova propriedade! Adicione uma nova propriedade chamada phone e depois dê um console.log(user); para ver se a propriedade realmente foi adicionada.

user.phone = "(34) 98408-1905"
console.log(user)

// 4- Faça um update de um valor! Troque o valor do username para outro valor e depois dê um console.log(user); para ver se a propriedade realmente foi substituída.

user.username = "GadiegoN";
console.log(user)

// 5- Remova um valor! Remova o valor age e depois dê um *console.log(user);* para ver se a propriedade realmente foi deletada.

delete user.age;
console.log(user);