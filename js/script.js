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



