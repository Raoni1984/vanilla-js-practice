export class ContaCorrente {
  agencia;
  saldo;

  constructor(agencia, saldo) {
    this.agencia = agencia;
    this.saldo = saldo;
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}
