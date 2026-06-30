
const LIMITE = 2000;
 
function calcularTotal(gastos) {
  const valoresValidos = gastos
    .map((item) => parseFloat(item))       
    .filter((valor) => !isNaN(valor));     
 
  const total = valoresValidos.reduce((soma, valor) => soma + valor, 0); 
 
  return total;
}
 
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
 
function exibirResultado(gastos) {
  const total = calcularTotal(gastos); 
 
  console.log(`Total: R$ ${formatarMoeda(total)}`);          
  console.log(total > LIMITE ? "Limite ultrapassado" : "Gastos dentro do limite"); 
}
 
 
console.log("===== ENTRADA 1 =====");
const gastos1 = ["500", "350.50", "1000"];
exibirResultado(gastos1);
 
 
console.log("\n===== ENTRADA 2 =====");
const gastos2 = ["800", "900", "700"];
exibirResultado(gastos2);
 
 
console.log("\n===== ENTRADA 3 (com inválidos) =====");
const gastos3 = ["200", "abc", "", "150.75", "NaN", "400"];
exibirResultado(gastos3);