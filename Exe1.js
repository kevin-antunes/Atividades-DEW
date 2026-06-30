function exibirProduto(produto) {
  const precoNumerico = parseFloat(produto.preco);

  if (isNaN(precoNumerico)) {
    console.log("Preço inválido!");
    return;
  }

  produto.preco = precoNumerico;

  console.log(`Produto: ${produto.nome}`);
  console.log(`Categoria: ${produto.categoria}`);
  console.log(`Preço: R$ ${produto.preco}`);

  const statusEstoque = produto.estoque < 10
    ? "Estoque baixo"
    : "Estoque adequado";
  console.log(`\n${statusEstoque}`);

  console.log(Object.keys(produto));

  for (const chave of Object.keys(produto)) {
    console.log(`typeof produto.${chave}: ${typeof produto[chave]}`);
  }
}

const produto1 = {
  nome: "Monitor",
  categoria: "Informática",
  preco: "899.90",
  estoque: 5
};

const produto2 = {
  nome: "Cadeira",
  categoria: "Escritório",
  preco: "450",
  estoque: 30
};

exibirProduto(produto1);
exibirProduto(produto2);
