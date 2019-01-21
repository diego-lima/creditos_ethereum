var abi = [{"constant":true,"inputs":[],"name":"consultarTotalRecebido","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"oficiais","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"consultarSaldo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"consultarOficial","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"status","type":"bool"}],"name":"setarOficial","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"saldo","type":"uint256"}],"name":"setarSaldo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_preco","type":"uint256"}],"name":"setarPreco","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"consultarPreco","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"saldos","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"debito","type":"uint256"}],"name":"debitar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"usuario","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"preco","type":"uint256"}],"name":"Credito","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"usuario","type":"address"},{"indexed":true,"name":"recepcao","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Debito","type":"event"}]
var bin = "0x608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ce7806100616000396000f3fe6080604052600436106100ae576000357c010000000000000000000000000000000000000000000000000000000090048063a96279f311610076578063a96279f314610408578063b9b5cfc814610477578063ba134f08146104c6578063c68c0612146104f1578063f33f715b14610556576100ae565b80630648384c1461023157806314280bfc1461025c578063218895e3146102c55780636c0e8e071461032a578063a60ebdfa14610393575b6000805414151515610128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4f20707265636f206e616f20666f692073657461646f2061696e64612e00000081525060200191505060405180910390fd5b6000349050806001600082825401925050819055506000548181151561014a57fe5b04600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167f82c5bea3026badfd974d3fda2d23fecf6793e6288b47fc8ac738af6fda84d256600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600054604051808381526020018281526020019250505060405180910390a250005b34801561023d57600080fd5b506102466105b1565b6040518082815260200191505060405180910390f35b34801561026857600080fd5b506102ab6004803603602081101561027f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105bb565b604051808215151515815260200191505060405180910390f35b3480156102d157600080fd5b50610314600480360360208110156102e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105db565b6040518082815260200191505060405180910390f35b34801561033657600080fd5b506103796004803603602081101561034d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610624565b604051808215151515815260200191505060405180910390f35b34801561039f57600080fd5b506103ee600480360360408110156103b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061067a565b604051808215151515815260200191505060405180910390f35b34801561041457600080fd5b506104616004803603604081101561042b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107d0565b6040518082815260200191505060405180910390f35b34801561048357600080fd5b506104b06004803603602081101561049a57600080fd5b8101908080359060200190929190505050610906565b6040518082815260200191505060405180910390f35b3480156104d257600080fd5b506104db6109c1565b6040518082815260200191505060405180910390f35b3480156104fd57600080fd5b506105406004803603602081101561051457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a45565b6040518082815260200191505060405180910390f35b34801561056257600080fd5b506105af6004803603604081101561057957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a5d565b005b6000600154905090565b60046020528060005260406000206000915054906101000a900460ff1681565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610724576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c9b6021913960400191505060405180910390fd5b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561087a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c9b6021913960400191505060405180910390fd5b81600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109b0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c9b6021913960400191505060405180910390fd5b816000819055506000549050919050565b60008060005414151515610a3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4f20707265636f206e616f20666f692073657461646f2061696e64612e00000081525060200191505060405180910390fd5b600054905090565b60036020528060005260406000206000915090505481565b60011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610b08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610c766025913960400191505060405180910390fd5b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610bbf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f53616c646f20696e737566696369656e7465000000000000000000000000000081525060200191505060405180910390fd5b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f488e3cb4f72c5b2b4555b13ce1c0950acd50d4a915f8281332baa172b2cdb384836040518082815260200191505060405180910390a3505056fe4170656e617320756d206f66696369616c20706f6465206578656375746172206973736f2e4170656e6173206f20646f6e6f20706f6465206578656375746172206973736f2ea165627a7a72305820fd679ad7737b16a0a637c3f293db1ebd5529b22d9acd00b6a935a3a09a434c870029"

var config = {from:web3.eth.accounts[0],
            data: bin,
            gas: '4700000'
}

var callback = function(e,contract){
	console.log(e,contract);
	if (typeof contract.address !== 'undefined') {
		console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }

}

var contract_factory = web3.eth.contract(abi)
var contract = contract_factory.new(config, callback)