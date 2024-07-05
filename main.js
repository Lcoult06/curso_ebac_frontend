function Animal (nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.emitirSom = function() {
        console.log(this.nome + ' emite som');
    }
}

function Cachorro (nome, idade, raca) {
    this.raca = raca;
    Animal.call(this, nome, idade);
}

function Passaro (nome, idade, especie) {
    this.especie = especie;
    Animal.call(this, nome, idade);
}

const meuCachorro = new Cachorro('Meg', 12, 'Dachshund');
const meuPassaro =  new Passaro('Bento', 2, 'Calopsita');
const cachorroDoVizinho = new Cachorro('Nina', 6, 'Labrador');

meuCachorro.emitirSom(); 
meuPassaro.emitirSom(); 
cachorroDoVizinho.emitirSom();
