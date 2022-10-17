temperatures = []

dayweeks = [
    '',
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
]

while(temperatures.length<7){
    temperatures.push(Number(prompt("Insira a temperatura de "+dayweeks[temperatures.length+1])))
}

max = Number.MIN_VALUE
min = Number.MAX_VALUE
for (const key in temperatures) {
    max = temperatures[key]> max ? temperatures[key] : max
    min = temperatures[key]< min ? temperatures[key] : min 
}

alert("Máxima da semana: "+max+'\n'+"Mínima da semana: "+min)