// const num1= 2;
// const num2 = 4;
// const operacao = "subtração";

// if (operacao ==="soma"){
//     console.log(num1 + num2);
// }else if (operacao === "Multiplicação"){
//     console.log(num1 * num2);
// }else{
//     console.log('operação não identificada ');
    
// }

// const salario = 11000;

// if (salario >= 11000){
//     console.log('3% bonus');   
// }else if(salario < 11000 && salario >= 7000){
//     console.log('5% bonus');
// }else if(salario < 11000 && salario >= 4000){
//     console.log('5% bonus');
// }else{
//     console.log('9% bonus');
    
// }


const ano = 2025;

if ((ano % 4 === 0) && (ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é bissexto`);
}else{
    console.log(`${ano} não é bissexto `);
    
}