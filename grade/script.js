let score,answer;
score=document.getElementById("score1");

answer=document.getElementById("answ");
function grade() {
    if (score.value<100 && score.value>90){
        answer.innerText="your grade is A"
    } else if (score.value<90 && score.value>80){
        answer.innerText="your grade is B"
    } else if (score.value<80  && score.value>50){
        answer.innerText="your grade is C"
    } else if (score.value<50 ){
        answer.innerText="your grade is F"
    }
        
}