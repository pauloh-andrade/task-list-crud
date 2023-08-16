const salarios = [2500, 3200, 1800, 4200, 2900, 3800, 2000, 3500, 2700, 4100];

const aumentos = salarios.map(salario => {
    if(salario <= 2000) {
        return salario + salario * 0.15
    } else {
        return salario + salario * 0.10
    }
})
console.log("AUMENTOS:", aumentos)

const salariosFiltrados = aumentos.filter((salario) => salario > 2500 )
console.log("FILTRADO:", salariosFiltrados)


const somaSalarios = salariosFiltrados.reduce((acumulador, valorAtual) => acumulador + valorAtual)
console.log(somaSalarios)