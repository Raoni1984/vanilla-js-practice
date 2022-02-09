import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

cliente1.contaCorrente = new ContaCorrente(1001, 0);
cliente2.contaCorrente = new ContaCorrente(1001, 0);

cliente1.contaCorrente.depositar(112);
cliente2.contaCorrente.depositar(987);

cliente1.contaCorrente.sacar(2);
cliente2.contaCorrente.sacar(7);

console.log(cliente1, cliente2);
