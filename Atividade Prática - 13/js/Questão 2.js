var A = []

while (A.length < 10) {

    B = prompt("digite o número " + (A.length + 1) + " do vetor:")
    A.push(B)

}

const X = Number(prompt("Digite o valor multiplicador:"))

var M = []

for (let i = 0; i < 10; i++) {
    M.push(A[i] * X)
}

msg = `Vetor M :`


for (let j = 0; j < 10; j++) {
    msg += M[j] + ", "
}

alert(msg)