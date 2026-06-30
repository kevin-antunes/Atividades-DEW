
function formatarData(data) {
  return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}
 
function contarParticipantes(participantes) {
  return participantes.length;
}
 
function temParticipantes(participantes) {
  return participantes.length > 0;
}
 
function exibirDadosEvento(evento) {
  console.log(`Evento: ${evento.nome}`);
 
  if ("local" in evento) {
    console.log(`Local: ${evento.local}`);
  }
 
  console.log(`\n${formatarData(evento.data)}`); 
 
  const total = contarParticipantes(evento.participantes); 
  console.log(`\nParticipantes: ${total}`);
 
  if (!temParticipantes(evento.participantes)) {
    console.log("Nenhum participante cadastrado");
  }
}
 
function exibirPropriedades(evento) {
  console.log("\n--- Propriedades do objeto ---");
  for (const [chave, valor] of Object.entries(evento)) {
    console.log(`${chave}: ${valor}`);
  }
}
 
function verificarPropriedadeLocal(evento) {
  const existe = "local" in evento;
  console.log(`\nLocal cadastrado: ${existe}`);
}
 
function exibirTipos(evento) {
  console.log("\n--- Tipos de cada propriedade ---");
  for (const [chave, valor] of Object.entries(evento)) {
    console.log(`${chave}: ${typeof valor}`);
  }
}
 
function executarSistema(evento) {
  exibirDadosEvento(evento);     
  verificarPropriedadeLocal(evento); 
  exibirPropriedades(evento);    
  exibirTipos(evento);           
}
 
 
console.log("========== ENTRADA 1 ==========");
const evento1 = {
  nome: "Semana da Tecnologia",
  local: "Auditório",
  data: new Date("2026-08-20"),
  participantes: ["Ana", "Carlos", "Marcos"],
};
executarSistema(evento1);
 
 
console.log("\n========== ENTRADA 2 ==========");
const evento2 = {
  nome: "Workshop Angular",
  local: "Laboratório 5",
  data: new Date("2026-09-10"),
  participantes: [],
};
executarSistema(evento2);
 
 
console.log("\n========== TESTE EXTRA (sem local) ==========");
const evento3 = {
  nome: "Meetup JavaScript",
  data: new Date("2026-10-05"),
  participantes: ["Lucas"],
};
executarSistema(evento3);