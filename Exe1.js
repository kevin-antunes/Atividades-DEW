// Função para exibir os dados do produto
function exibirProduto(produto) {
  const precoNumerico = parseFloat(produto.preco);

  // 2. Validar se o preço é válido
  if (isNaN(precoNumerico)) {
    console.log("Preço inválido!");
    return;
  }

  // 1. Converter o preço para número
  produto.preco = precoNumerico;

  // 3. Exibir os dados do produto
  console.log(`Produto: ${produto.nome}`);
  console.log(`Categoria: ${produto.categoria}`);
  console.log(`Preço: R$ ${produto.preco}`);

  // 4. Informar se o estoque está baixo
  const statusEstoque = produto.estoque < 10
    ? "Estoque baixo"
    : "Estoque adequado";
  console.log(`\n${statusEstoque}`);

  // 5. Exibir todas as propriedades
  console.log(Object.keys(produto));

  // 6. Exibir o tipo de cada informação
  for (const chave of Object.keys(produto)) {
    console.log(`typeof produto.${chave}: ${typeof produto[chave]}`);
  }
}

// Entrada 1
const produto1 = {
  nome: "Monitor",
  categoria: "Informática",
  preco: "899.90",
  estoque: 5
};

// Entrada 2
const produto2 = {
  nome: "Cadeira",
  categoria: "Escritório",
  preco: "450",
  estoque: 30
};

exibirProduto(produto1);
exibirProduto(produto2);
