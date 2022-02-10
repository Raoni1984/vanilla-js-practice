import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

cliente1.contaCorrente.abrir(1001, 0);
cliente2.contaCorrente.abrir(1002, 0);

cliente1.contaCorrente.depositar(100);
cliente2.contaCorrente.depositar(900);

// cliente1.contaCorrente.sacar(2);
// cliente2.contaCorrente.sacar(7);

cliente2.contaCorrente.transferir(400, cliente1.contaCorrente);

console.log(cliente1, cliente2);
