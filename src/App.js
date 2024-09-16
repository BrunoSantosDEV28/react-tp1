function calcularPrecoTotal(preco, quantidade) {
  return preco * quantidade;
}
//Exercicio 2

function filtrarDisponiveis(produtos) {
  return produtos.filter(produto => produto.disponivel);
}


const produtos1 = [
  { nome: "Laptop", disponivel: true },
  { nome: "Tablet", disponivel: false },
  { nome: "Smartphone", disponivel: true }
];

console.log(filtrarDisponiveis(produtos1));

// Exercicio 3
function calcularMediaAvaliacoes(avaliacoes) {
  const soma = avaliacoes.reduce((total, avaliacao) => total + avaliacao, 0);
  return soma / avaliacoes.length;
}


const avaliacoes = [4, 5, 3, 4];
console.log(calcularMediaAvaliacoes(avaliacoes));

// Exercicio 4
function filtrarAcimaPreco(produtos, precoMinimo) {
  return produtos.filter(produto => produto.preco > precoMinimo);
}

const produtos2 = [
  { nome: "Laptop", preco: 1000 },
  { nome: "Tablet", preco: 400 },
  { nome: "Smartphone", preco: 1500 }
];

console.log(filtrarAcimaPreco(produtos2, 600));

// Exercicio 5
function encontrarProdutoPorNome(produtos, nome) {
  return produtos.find(produto => produto.nome === nome);
}

// Exemplo de uso:
const produtos3 = [
  { nome: "Laptop", preco: 1000 },
  { nome: "Tablet", preco: 400 },
  { nome: "Smartphone", preco: 1500 }
];

console.log(encontrarProdutoPorNome(produtos3, "Laptop"));

// Exercicio 6
function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(produto => produto.categoria === categoria);
}


const produtos4 = [
  { nome: "Laptop", categoria: "Eletrônicos" },
  { nome: "Camisa", categoria: "Roupas" },
  { nome: "Smartphone", categoria: "Eletrônicos" }
];

console.log(filtrarPorCategoria(produtos4, "Eletrônicos"));

// Exercicio 7
function verificarEstoque(produtos) {
  return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
}


const produtos7 = [
  { nome: "Laptop", quantidadeEmEstoque: 5 },
  { nome: "Tablet", quantidadeEmEstoque: 0 },
  { nome: "Smartphone", quantidadeEmEstoque: 3 }
];

console.log(verificarEstoque(produtos7));


// Exercicio 8
function calcularTotalItens(itens) {
  return itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0);
}


const itens = [
  { nome: "Laptop", quantidade: 1, precoUnitario: 1000 },
  { nome: "Tablet", quantidade: 2, precoUnitario: 400 },
  { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 }
];

console.log(calcularTotalItens(itens));

// Exercicio 9
function agruparPorCategoria(produtos) {
  return produtos.reduce((acc, produto) => {
      if (!acc[produto.categoria]) {
          acc[produto.categoria] = [];
      }
      acc[produto.categoria].push(produto.nome);
      return acc;
  }, {});
}


const produtos9 = [
  { nome: "Laptop", categoria: "Eletrônicos" },
  { nome: "Camisa", categoria: "Roupas" },
  { nome: "Smartphone", categoria: "Eletrônicos" },
  { nome: "Calça", categoria: "Roupas" },
  { nome: "Fone de Ouvido", categoria: "Eletrônicos" }
];

console.log(agruparPorCategoria(produtos9));














