const tarefas = ["estudar", "correr", "meditar"];

const tarefa = process.argv[2];

tarefas.push(tarefa);

console.log(`tarefa ${tarefa} adicionada com sucesso!`);
