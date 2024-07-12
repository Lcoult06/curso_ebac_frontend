const alunos = [
    {nome: 'Pedro', nota:6},
    {nome: 'Bruno', nota:4},
    {nome: 'João', nota:5},
    {nome: 'Maria', nota:9},
    {nome: 'Paula', nota:7}
];

// const AlunosAprovados = alunos => alunos.nota >= 6;

// const filtraAlunos = alunos.filter(AlunosAprovados)

// console.log(filtraAlunos)

const alunosAprovados2 = alunos.filter(function(alunos){
    return alunos.nota >= 6;
}) 


console.log(alunosAprovados2)