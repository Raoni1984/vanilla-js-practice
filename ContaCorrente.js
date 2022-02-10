export class ContaCorrente {
  agencia;
  saldo;

  constructor(agencia, saldo) {
    this.agencia = agencia;
    this.saldo = saldo;
  }

  abrir(agencia, saldo) {
    this.agencia = agencia;
    this.saldo = saldo;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  transferir(valor, conta) {
    if (this.sacar(valor)) {
      conta.depositar(valor);
      console.log(`Valor transferido: ${valor}`);
      return true;
    }
    return false;
  }
}
