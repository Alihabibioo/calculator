let objmonth, objresult;
objmonth = document.getElementById("obj");
objresult = document.getElementById("result");

function ytom() {
    let mothValue=objmonth.value;
    if (mothValue === "فروردین" || mothValue=== "اردیبهشت" || mothValue === "خرداد") {
        return "فصل شما بهار است"
    }

}