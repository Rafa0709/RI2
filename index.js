function Telefone(numero, fabricante){
    this.numero = numero
    this.fabricante = fabricante

    this.getInfo = function() {
        return this.numero + " (" + this.fabricante + ")";
    };

    // Getters Telefone
    this.getNumero = function() {
        return this.numero;
    }

    this.getFabricante = function() {
        return this.fabricante;
    }

    //Getters Maiusculo e Minusculo
    this.getNumeroMaiusculo = function(){
        return this.numero.toUpperCase
    }

    this.getNumeroMinusculo = function(){
        return this.numero.toLowerCase
    }

    this.getBairroMaiusculo = function(){
        return this.bairro.toUpperCase
    }

    this.getBairroMinusculo = function(){
        return this.bairro.toLowerCase
    }

    // Setters Telefone
    this.setNumero = function(novoNumero) {
        this.numero = novoNumero;
    }

    this.setFabricante = function(novoFabricante) {
        this.fabricante = novoFabricante;
    }

}

function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    this.getInfo = function() {
        return (
            "Nome: " + this.nome + "\n" +
            "Email: " + this.email + "\n" +
            "Telefone: " + this.telefoneCelular.getInfo() + "\n" +
            "Endereço: " + this.endereco.getInfo()
        )
    }

    // Getters nome
    this.getNome = function() {
        return this.nome;
    }

    this.getTelefoneCelular = function() {
        return this.telefoneCelular;
    }

    this.getEmail = function() {
        return this.email;
    }

    this.getEndereco = function() {
        return this.endereco;
    }

    //getters maiusculo e minusculo
    this.getNomeMaiusculo = function() {
        return this.nome.toUpperCase();
    }

    this.getNomeMinusculo = function() {
        return this.nome.toLowerCase();
    }

    this.getEmailMaiusculo = function() {
        return this.email.toUpperCase();
    }

    this.getEmailMinusculo = function() {
        return this.email.toLowerCase();
    }

    this.getTelefoneCelularMaiusculo = function(){
        return this.telefoneCelular.toUpperCase
    }

    this.getTelefoneCelularMinusculo = function(){
        return this.telefoneCelular.toLowerCase
    }

    this.getEnderecoMaiusculo = function(){
        return this.endereco.toUpperCase
    }

    this.getEnderecoMinusculo = function(){
        return this.endereco.toLowerCase
    }

    // Setters nome
    this.setNome = function(novoNome) {
        this.nome = novoNome;
    }

    this.setTelefoneCelular = function(novoTelefone) {
        this.telefoneCelular = novoTelefone;
    }

    this.setEmail = function(novoEmail) {
        this.email = novoEmail;
    }

    this.setEndereco = function(novoEndereco) {
        this.endereco = novoEndereco;
    }

    }

function Endereco(rua, bairro) {
    this.rua = rua;
    this.bairro = bairro;

    this.getInfo = function() {
        return this.rua + ", " + this.bairro;
    };

    // Getters endereco
    this.getRua = function() {
        return this.rua;
    }

    this.getBairro = function() {
        return this.bairro;
    }

    //getters maiusculo e minusculo
    this.getRuaMaiusculo = function(){
        return this.rua.toUpperCase
    }

    
    this.getRuaMinusculo = function(){
        return this.rua.toLowerCase
    }

    
    this.getBairroMaiusculo = function(){
        return this.rua.toUpperCase
    }

    
    this.getRuaMinusculo = function(){
        return this.rua.toLowerCase
    }

    // Setters endereco
    this.setRua = function(novaRua) {
        this.rua = novaRua;
    }

    this.setBairro = function(novoBairro) {
        this.bairro = novoBairro;
    }

}

let tel = new Telefone("111111111", "Motorola");
let end = new Endereco("Rua da FATEC", "Zona leste");
let tel1 = new Telefone("11222222222", "Samsung");
let end1 = new Endereco("Rua número zero", "Bairrinho");
let tel2 = new Telefone("1133333333", "Poco");
let end2 = new Endereco("Rua Célia Regina", "Urba Nova");
let tel3 = new Telefone("1144444444", "Toshiba");
let end3 = new Endereco("Rua epitáfio", "Majestique");

let cliente1 = new Cliente("Maria", tel, "maria@email.com", end);
let cliente2 = new Cliente("Hannibal", tel1, "hannibal@email.com", end1);
let cliente3 = new Cliente("Pedrinho", tel2, "pedro@email.com", end2);
let cliente4 = new Cliente("Konoha", tel3, "knoha@email.com", end3);


// Criando o array de clientes
let listaClientes = [cliente1, cliente2, cliente3, cliente4];

function ordenarClientesPorNome(clientes) {
    let copia = clientes.slice(); //método slice para copiar o array original
    copia.sort(function(a, b) {
        return a.nome.localeCompare(b.nome);
    });
    return copia;
}

// Aqui estou ordenando, chamando a função ordenarClientes
let clientesOrdenados = ordenarClientesPorNome(listaClientes);

// Mostrando os nomes ordenados
console.log("Clientes ordenados por nome: \n");
    for (let cliente of clientesOrdenados) {
        console.log(cliente.getInfo());
        console.log("\n")
}