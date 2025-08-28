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

    // Setters Telefone
    this.setNumero = function(novoNumero) {
        this.numero = novoNumero;
    }

    this.setFabricante = function(novoFabricante) {
        this.fabricante = novoFabricante;
    }

    
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

    // Setters endereco
    this.setRua = function(novaRua) {
        this.rua = novaRua;
    }

    this.setBairro = function(novoBairro) {
        this.bairro = novoBairro;
    }

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

    
}


let telefone = new Telefone("11999999999", "Samsung");
let endereco = new Endereco("Rua das Flores", "Centro");
let cliente = new Cliente("Maria Silva", telefone, "maria@email.com", endereco);

console.log(cliente.getInfo());

