let inpValue = document.getElementById("inputNumber");
let pushButton = document.getElementById("pushToArray");
let arrMult = document.getElementById("arrayMult");
let arrBody = document.getElementById("arrayBody");
let numbArray = [];
let mult = 1;
pushButton.addEventListener("click", function () {
    numbArray = inpValue.value.split("");
    document.getElementById("conclus").innerHTML = "massive[] = "+numbArray;
});
arrMult.addEventListener("click", function () {
    if (numbArray.length===0) {
        mult=0;
    } else
    for (let i=0; i<numbArray.length; i++) {
        mult *= numbArray[i];
    }
    document.getElementById("conclus").innerHTML = "multiply = "+mult/numbArray.length;
});
arrBody.addEventListener("click", function () {
    document.getElementById("conclus").innerHTML = "array body = ["+ numbArray + "]" ;
});



