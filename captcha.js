function refresh(){
    let char="abcdefghijklmnopqrstuvwxyz1234567890";
    let s="";
    for(let i=0;i<6;i++){
        s=s+char[Math.floor(Math.random()*36)];
    }
    document.getElementById("cap").value=s;
}
refresh();

function sub(){
    let val1=document.getElementById("cap").value;
    let val2=document.getElementById("inp").value;

    if(val1==val2){
        document.getElementById("result").innerHTML="Correct👍";
    }
    else{
        document.getElementById("result").innerHTML="Check the Captcha‼";
    }
}
