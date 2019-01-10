pragma solidity ^0.5.0;

contract Blockchain {
    // Registra quando uma pessoa compra crédito: quem comprou, quantos créditos comprou, e quanto pagou por cada
    event Credito(address indexed usuario, uint value, uint256 preco);
    // Registra um gasto de crédito: quem gastou, quem foi responsável por debitar, quanto foi debitado
    event Debito(address indexed usuario, address indexed recepcao, uint value);

    // O preço de cada unidade de crédito
    uint256 preco;
    
    // Total de fundos recebidos (em Wei)
    uint256 totalRecebido;

    // O criador do contrato
    address dono;

    // Guarda a quantidade de creditos que cada usuario tem
    mapping(address => uint) public saldos;

    // Guarda um registro de se determinado usuario é oficial ou não.
    // Oficiais são aqueles que têm permissão para debitar do saldo de alguém; estes são
    // os servidores que gerenciam o uso do core
    mapping(address => bool) public oficiais;


    /**
     * Construtor
     */
    constructor() public {
        dono = msg.sender;
    }

    /**
     * Fundos
     */
    function () external apenasQuandoPronto payable {
        uint256 quantia = msg.value;
        totalRecebido += quantia;
        saldos[msg.sender] += quantia / preco;

        emit Credito(msg.sender, saldos[msg.sender], preco);
    }

    function consultarTotalRecebido() public view returns (uint256) {
        return totalRecebido;
    }

    /**
     * Modifiers
     */
    modifier apenasDono () {
        require (msg.sender == dono,"Apenas o dono pode executar isso.");
        _;
    }

    modifier apenasOficial () {
        require (oficiais[msg.sender] == true,"Apenas um oficial pode executar isso.");
        _;
    }

    modifier apenasQuandoPronto () {
        require (preco != 0,"O preco nao foi setado ainda.");
        _;
    }

    /**
     * Saldo
     */
    function consultarSaldo(address addr) public view returns (uint) {
        return saldos[addr];
    }

    function setarSaldo(address addr, uint saldo) public apenasDono returns (uint) {
        saldos[addr] = saldo;
        return saldos[addr];
    }

    function debitar(address addr, uint debito) public apenasOficial {
        require (saldos[addr] >= debito, "Saldo insuficiente");
        saldos[addr] -= debito;

        emit Debito(addr, msg.sender, debito);
    }

    /**
     * Preço
     */
    function consultarPreco() public view apenasQuandoPronto returns (uint256) {
        return preco;
    }

    function setarPreco(uint _preco) public apenasDono returns (uint256) {
        preco = _preco;
        return preco;
    }

    /**
     *  Oficial
     */
    function consultarOficial(address addr) public view returns (bool) {
        return oficiais[addr];
    }

    function setarOficial(address addr, bool status) public apenasDono returns (bool) {
        oficiais[addr] = status;
        return oficiais[addr];
    }
}