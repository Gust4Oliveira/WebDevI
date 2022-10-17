names = []
scores = []

while(names.length<5){
    splited = prompt("Insira o nome e a nota. Usar . (ponto), para separar ambos").split(".")
    names.push(splited[0])
    scores.push(Number(splited[1]))
}

total = 0
message = ""
for (const key in names) {
    message += names[key]+" - "+ scores[key] + "\n"
    total+=scores[key]  
}
message += "Média notas: "+ total/names.length

alert(message)