const prompt = require('prompt-sync')(); // vou usar para todos, ele importa o módulo prompt-sync para capturar entrada do usuário

//01 Acessando Propriedades de Objetos

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


//=========================================================================================================

// 3. Filtrando Propriedades de Objetos

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
  
//========================================================================================================

//4. Iterando Sobre Arrays de Objetos

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
  