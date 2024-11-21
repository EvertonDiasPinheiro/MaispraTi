const prompt = require('prompt-sync')(); // vou usar para todos, ele importa o módulo prompt-sync para capturar entrada do usuário

//01 Acessando Propriedades de Objetos
console.log("====  01: Acessando Propriedades de Objetos ===========================================");
const carro = {    // Criação do objeto carro
    marca: "Nissan",
    modelo: "Skyline r34",
    ano: 1998,
    cor: "Modificado"
  };
  
  
  for (let propriedade in carro) {               // Iterando pelas propriedades do objeto com for e in
    console.log(`${propriedade}: ${carro[propriedade]}`);
  }
//============================================================================================================================

//2. Verificando Propriedades
console.log("====  02: Verificando Propriedades =====================================================");
const livro = {                    // Criação do objeto livro
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
  };
  
  
  let temEditora = false;         // Verificando se a propriedade 'editora' existe
  for (let propriedade in livro) {
    if (propriedade === "editora") {
      temEditora = true;
      break;                      // Se encontrada, saímos do loop
    }
  }
  
  
  if (!temEditora) {              // Adicionando a propriedade 'editora' caso não exista
    livro.editora = "HarperCollins";
  }
  
  console.log(livro);
  console.log("Conclusão: Propriedade 'editora' adicionada ao objeto, caso não existisse.\n");


//=========================================================================================================

// 3. Filtrando Propriedades de Objetos
console.log("====  03: Filtrando Propriedades de Objetos ======================================================");
const produto = {                                      // Criação do objeto produto
    preco: 150,
    estoque: 10,
    peso: 5,
    largura: 2,
    altura: 3
  };
  
  
  function filtrarPropriedades(obj, limite) {          // Função para filtrar propriedades
    const novoObjeto = {};
  
    
    for (let propriedade in obj) {                    // Iterando pelas propriedades do objeto
      if (obj[propriedade] > limite) {
        novoObjeto[propriedade] = obj[propriedade];
      }
    }
  
    return novoObjeto;
  }
  
  
  const resultado = filtrarPropriedades(produto, 5);  // Chamando a função com um limite de 5
  
  console.log(resultado);
  console.log("Conclusão: Propriedades com valores maiores que 5 foram filtradas.\n");
//========================================================================================================

//4. Iterando Sobre Arrays de Objetos
console.log("====  04: Iterando Sobre Arrays de Objetos =================================================");
const pessoas = [                                                // Array de objetos pessoas
    { nome: "Everton", idade: 30, cidade: "Belem" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 28, cidade: "Belo Horizonte" }
  ];
  
  
  for (const pessoa of pessoas) {                                 // Iterando com for e of
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    
  }

//===========================================================================================================

//5. Calculando Valores em Arrays de Objetos
  
console.log("====  05: Calculando Valores em Arrays de Objetos ===============================================");
const alunos = [                                 // Array de objetos alunos
    { nome: "Ana", nota1: 8, nota2: 7 },
    { nome: "Everton", nota1: 6, nota2: 5 },
    { nome: "Carla", nota1: 9, nota2: 10 }
  ];
  
  
  for (const aluno of alunos) {                                      // Iterando com for...of
    const media = (aluno.nota1 + aluno.nota2) / 2;                      // Calculando a média
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`); // Exibindo com 2 casas decimais
  }

//==============================================================================================================

//6. Filtrando Arrays de Objetos
console.log("====  06: Filtrando Arrays de Objetos ==================================================");
const funcionarios = [                                           // Array de objetos funcionarios
    { nome: "Alice", cargo: "Gerente", salario: 7000 },
    { nome: "Pedro", cargo: "Analista", salario: 4000 },
    { nome: "Joana", cargo: "Desenvolvedora", salario: 9000 }
  ];
  
  const valorMinimo = 5000;                                   // Salário mínimo para filtro
  
   
  for (const funcionario of funcionarios) {                  // iterar com for...of
    if (funcionario.salario > valorMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
  }

  //==============================================================================================================

  //7. Modificando Objetos em um Array
  console.log("====  7. Modificando Objetos em um Array ============================================");
const produtos = [                                          // Array de objetos produtos
    { nome: "Notebook", preco: 3000, desconto: 0.1 },
    { nome: "Celular", preco: 2000, desconto: 0.1 },
    { nome: "Tablet", preco: 1500, desconto: 0.1 }
  ];
  
       
  produtos.forEach((produto) => {                            // Aplicando desconto com forEach
    produto.preco -= produto.preco * produto.desconto;      // Aplicando o desconto
    console.log(`Produto: ${produto.nome}, Novo Preço: ${produto.preco.toFixed(2)}`);
  });
  
//==================================================================================================

//8. Criando Novos Arrays a Partir de Objetos
console.log("====  8. Criando Novos Arrays a Partir de Objetos ==================================");
const filmes = [                                  // Array de objetos filmes
    { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { titulo: "Gladiador 2", diretor: "Ridley Scott", anoLancamento: 2024 }
  ];
  
  const titulos = []; // Novo array para armazenar os títulos
  
  
  filmes.forEach((filme) => {                      // Extraindo os títulos com forEach
    titulos.push(filme.titulo);                  // Adicionando o título ao novo array
  });
  
  console.log(titulos);
  
//=================================================================================================

//9. Contabilizando Elementos com uma Condição

console.log("====  9. Contabilizando Elementos com uma Condição ====================================");
const clientes = [                           // Array de objetos clientes
    { nome: "Everton", idade: 31, cidade: "Belem" },
    { nome: "Angela", idade: 35, cidade: "Belem" },
    { nome: "Yasmin", idade: 40, cidade: "Belem" },
    { nome: "Ana", idade: 28, cidade: "Belem" }
  ];
  
  let contador = 0;                     // Contador de clientes com mais de 30 anos
  
                                      
  clientes.forEach((cliente) => {         // Contando com forEach
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${contador}`);
  
//=====================================================================================================

//10. Criando Relatórios com Objetos e Arrays

console.log("====  10. Criando Relatórios com Objetos e Arrays ====================================");
const vendas = [                                             // Array de vendas
    { produto: "Notebook", quantidade: 2, valor: 3000 },
    { produto: "Celular", quantidade: 3, valor: 2000 },
    { produto: "Tablet", quantidade: 1, valor: 1500 }
  ];
  
 
  let totalVendas = 0;                                         // Inicializando a variável para armazenar o valor total
  
  
  vendas.forEach((venda) => {                                   // Iterando sobre cada venda
    totalVendas += venda.quantidade * venda.valor;                // Calculando o total para cada item e somando ao total geral
  });
  
  // Exibindo o total de vendas
  console.log(`Valor total de vendas: R$ ${totalVendas}`);

//===========================================================================================================

//11. Agrupando Elementos com forEach

console.log("====  11. Agrupando Elementos com forEach ===============================================");
const pedidos = [                                            // Array de pedidos
    { cliente: "João", produto: "Notebook", quantidade: 1 },
    { cliente: "Maria", produto: "Celular", quantidade: 2 },
    { cliente: "João", produto: "Tablet", quantidade: 3 },
    { cliente: "Maria", produto: "Notebook", quantidade: 1 }
  ];
  
  
  const totalPorCliente = {};                                 // Objeto para armazenar o total por cliente
  
  
  pedidos.forEach((pedido) => {                               // Iterando sobre os pedidos
    if (!totalPorCliente[pedido.cliente]) {                   // Se o cliente não existir no objeto, inicializa com 0
      totalPorCliente[pedido.cliente] = 0;
    }
    totalPorCliente[pedido.cliente] += pedido.quantidade;     // Adiciona a quantidade do pedido ao total do cliente
  });
  
  
  console.log(totalPorCliente);                               // Exibindo o total agrupado por cliente

//==================================================================================================================

//12. Atualizando um Array de Objetos

console.log("====  12. Atualizando um Array de Objetos ===========================================");
const estoque = [                                          // Array de produtos em estoque
    { produto: "Notebook", quantidade: 2, minimo: 5 },
    { produto: "Celular", quantidade: 10, minimo: 7 },
    { produto: "Tablet", quantidade: 3, minimo: 4 }
  ];
  
  
  estoque.forEach((item) => {                              // Iterando sobre cada item no estoque
    if (item.quantidade < item.minimo) {                   // Verificando se a quantidade está abaixo do mínimo
      item.quantidade *= 2;                               // Duplicando a quantidade do item
    }
  });
  
  console.log(estoque);                                   // Exibindo o estoque atualizado

//============================================================================================================================

//13. Implementando um Carrinho de Compras
  
console.log("====  13. Implementando um Carrinho de Compras =====================================");
const carrinho = {                                                      // Objeto do carrinho com itens
    itens: [
      { nome: "Notebook", quantidade: 1, precoUnitario: 3000 },
      { nome: "Celular", quantidade: 2, precoUnitario: 2000 },
      { nome: "Tablet", quantidade: 3, precoUnitario: 1500 }
    ]
  };
  
  let totalCarrinho = 0;                                               // Inicializando o total do carrinho 
  carrinho.itens.forEach((item) => {                                   // Iterando pelos itens do carrinho
    totalCarrinho += item.quantidade * item.precoUnitario;             // Calculando o total do item e somando ao total do carrinho
  });
  
  
  console.log(`Valor total do carrinho: R$ ${totalCarrinho}`);            // Exibindo o valor total do carrinho

//=============================================================================================================================

//14. Manipulando Objetos Complexos
  
console.log("====  14. Manipulando Objetos Complexos ===========================================");
const empresa = {                                       // Objeto da empresa
    departamentos: [
      {
        nome: "TI",
        funcionarios: ["Everton", "Maria"]
      },
      {
        nome: "RH",
        funcionarios: ["Ana", "Carlos"]
      }
    ]
  };
  
  
  for (const departamento of empresa.departamentos) {              // Iterando pelos departamentos
    console.log(`Departamento: ${departamento.nome}`);            // Iterando pelos funcionários do departamento
    for (const funcionario of departamento.funcionarios) {
      console.log(`- Funcionário: ${funcionario}`);
    }
  }
  
//========================================================================================================

//15. Filtrando e Somando Valores
console.log("====  15. Filtrando e Somando Valores ==============================================");
const transacoes = [                      // Array de transações
    { tipo: "entrada", valor: 1000 },
    { tipo: "saída", valor: 500 },
    { tipo: "entrada", valor: 700 },
    { tipo: "saída", valor: 300 }
  ];
  
  let saldoFinal = 0;                     // Inicializando o saldo final
  
  transacoes.forEach((transacao) => {      // Iterando pelas transações
    if (transacao.tipo === "entrada") {    // Verificando o tipo de transação e atualizando o saldo
      saldoFinal += transacao.valor;
    } else if (transacao.tipo === "saída") {
      saldoFinal -= transacao.valor;
    }
  });
  
  console.log(`Saldo final: R$ ${saldoFinal}`);// Exibindo o saldo final
  