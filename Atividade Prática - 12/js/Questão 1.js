values = []

while(values.length<10){
    value = Number(prompt("Insira um valor"))
    values.push(value)
}

result = []
for (const key in values) {
    if (values[key]>=20 && values[key]<=30) {
        result.push(values[key])
    }
}

alert(`Foram detectados ${result.length} valores fora do intervalo`)