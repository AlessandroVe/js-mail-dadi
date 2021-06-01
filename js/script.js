var regidit=["mailgiusta@gmail.com","mail@gmail.com","giusta@gmail.com"];
mailInput=prompt("inserisci qui la tua mail");
var output=document.getElementById("output");
var flag = false;
for (var i = 0 ; i < regidit.length; i++){
    if (mailInput===regidit[i]){
        flag = true;
    }
}
if (flag){
    output.innerHTML=" OK";

}else{
    output.innerHTML="NOPE";
}



var userNumber = Math.floor(Math.random() *6 ) +1;
var computerNumber = Math.floor(Math.random() *6 ) +1;
output.innerHTML+="<br> computer "+computerNumber+"<br> user "+userNumber;
if(userNumber > computerNumber){
    output.innerHTML+="<br>   Hai vinto!";
} else if(userNumber < computerNumber) {
    output.innerHTML+="<br>   Hai perso!";
}else{
    output.innerHTML+="<br>  Pari!";
}