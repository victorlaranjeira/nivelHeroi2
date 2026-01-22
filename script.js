class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        if (this.tipo == "mago") {
            ataque = "magia";
        }
        if (this.tipo == "guerreiro") {
            ataque = "espada";
        }
        if (this.tipo == "monge") {
            ataque = "artes marciais";
        }
        if (this.tipo == "ninja") {
            ataque = "shuriken";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi = new Heroi("Victor", 26, "guerreiro");
heroi.atacar();