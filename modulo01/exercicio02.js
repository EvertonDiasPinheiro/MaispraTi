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
  