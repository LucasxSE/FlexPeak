class Mamifero {
    constructor(nome, anoNascimento, peso){
      this.nome = nome;
      this.anoNascimento = anoNascimento;
      this.peso = peso;
    }
    
    andar(){
      console.log("andando")
    }
  } 
  
  // extends: A classe atual herda todos os métodos e atributos da classe
  class Cachorro extends Mamifero {
    constructor(nome, anoNascimento, peso, corPelo, raca, porte){
      super(nome, anoNascimento, peso)
      this.corPelo = corPelo;
      this.raca = raca;
      this.porte = porte;
    }
    
    latir(){
      console.log("auuuuuuuuuu")
    }
  }
  
  let cachorro1 = new Cachorro(
    'Luke',
    '2016',
    26,
    'Branco',
    'SRD',
    'Gigante'
  )
  
  cachorro1.latir()