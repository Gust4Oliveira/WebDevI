names = []
scores = []

while(1){
    splited = prompt("Insira o nome e a nota. Usar . (ponto), para separar ambos").split(".")
    if (splited=="Fim" || splited=="fim" ) {
        break
    }

    names.push(splited[0])
    scores.push(Number(splited[1]))
}


highlights = []
for (const key in names) {
    if (scores[key]>=7) {
        highlights.push(names[key]+" - "+ scores[key] + "\n")
    }
}

if (highlights.length!=0) {
    message = ""
    for (const key in highlights) {
        message += highlights[key]
    }
    message += "\nMaior nota: "+ Math.max(...scores)
    alert(message)
}else{
    alert("Não há alunos em destaque na turma")
}
