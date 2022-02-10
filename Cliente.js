import { ContaCorrente } from "./ContaCorrente.js";
export class Cliente {
  nome;
  cpf;
  contaCorrente;

  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
    this.contaCorrente = new ContaCorrente();
  }
}
