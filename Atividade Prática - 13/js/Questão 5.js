names = []
age = []

while(1){
    splited = prompt("Insira o nome e a idade. Usar . (ponto), para separar ambos").split(".")
    if (splited=="Fim" || splited=="fim" ) {
        break
    }

    names.push(splited[0])
    age.push(Number(splited[1]))
}


defaultQueue = []
prioQueue = []

for (const key in names) {
    if (age[key]>=60) {
        prioQueue.push(names[key]+" - "+ age[key] + "\n")
    }else{
        defaultQueue.push(names[key]+" - "+ age[key] + "\n")
    }
}


messagePrio = ""
messageDefault = ""
for (const key in prioQueue) {
    messagePrio += prioQueue[key]
}
for (const key in defaultQueue) {
    messageDefault += defaultQueue[key]
}

alert(messagePrio+"\n\n"+messageDefault)
