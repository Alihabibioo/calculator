let numberone, numbertwo, javab , result;
numberone = document.getElementById("number1");
numbertwo = document.getElementById("number2");
javab = document.getElementById("result");

function plus() {
    result =Number(numberone.value)  +  Number(numbertwo.value) ;
    javab.innerText=result;
};
