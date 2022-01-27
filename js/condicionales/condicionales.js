const saldo =600
const pagar=500
tarjeta = true 


/*
|| Al menos una debe cumplirse
&& todas deben cumplirse 
*/

if (saldo > pagar && tarjeta) {
    console.log ('Si puedes pagar')
}
else {
    console.log ('No puedes pagar')
}