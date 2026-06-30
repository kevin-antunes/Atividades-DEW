function sistemaMatricula(disciplinas) {
    console.log("Disciplinas:");

    for (let i = 0; i < disciplinas.length; i++) {

        if (disciplinas[i] === "") {
            continue;
        }

        console.log(disciplinas[i]);

        if (disciplinas[i] === "TCC") {
            console.log("\nLaço interrompido");
            break;
        }
    }

    console.log("\nTotal:", disciplinas.length);

    if (disciplinas.includes("JavaScript")) {
        console.log("Aluno cursa JavaScript");
    } else {
        console.log("Aluno não cursa JavaScript");
    }

    disciplinas.push("Algoritmos");

    console.log("\nApós adicionar uma nova disciplina:");
    console.log(disciplinas);
}

let disciplinas1 = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log("=== Entrada 1 ===");
sistemaMatricula(disciplinas1);

let disciplinas2 = [
    "Banco de Dados",
    "",
    "TCC",
    "Redes"
];

console.log("\n=== Entrada 2 ===");
sistemaMatricula(disciplinas2);