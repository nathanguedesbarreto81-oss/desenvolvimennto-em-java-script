// let compras = [];
// let executando = true;

// while (executando) {
//     let opcao = prompt(
//         "--- LISTA DE COMPRAS ---\n" +
//         "1. Adicionar Item\n" +
//         "2. Remover Último Item\n" +
//         "3. Listar Itens\n" +
//         "4. Sair\n" +
//         "Escolha uma opção:"
//     );

//     switch (opcao) {
//         case "1":
//             let novoItem = prompt("Digite o nome do produto:");
//             if (novoItem) {
//                 compras.push(novoItem);
//                 alert(`${novoItem} adicionado com sucesso!`);
//             }
//             break;

//         case "2":
//             if (compras.length > 0) {
//                 let removido = compras.pop();
//                 alert(`Item "${removido}" removido.`);
//             } else {
//                 alert("A lista já está vazia!");
//             }
//             break;

//         case "3":
//             if (compras.length === 0) {
//                 alert("Sua lista está vazia.");
//             } else {
//                 let listaTexto = "Itens no carrinho:\n";
//                 // Uso do laço FOR conforme solicitado
//                 for (let i = 0; i < compras.length; i++) {
//                     listaTexto += `${i + 1}. ${compras[i]}\n`;
//                 }
//                 alert(listaTexto);
//             }
//             break;

//         case "4":
//             executando = false;
//             alert("Saindo do programa. Boas compras!");
//             break;

//         default:
//             alert("Opção inválida. Tente novamente.");
//     }
// }