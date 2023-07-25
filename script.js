var number1=document.getElementById('btn1');
var number2=document.getElementById('btn2');
var number3=document.getElementById('btn3');
var number4=document.getElementById('btn4');
var number5=document.getElementById('btn5');
var submitbtn=document.getElementById('submit-btn');
var clicked1=false;
var clicked2=false;
var clicked3=false;
var clicked4=false;
var clicked5=false;
var change=document.getElementById('change');
var div1=document.getElementById('div1');
var div2=document.getElementById('div2');
var fleche=document.getElementById('fleche');
var alert =document.getElementById('alert');

number1.addEventListener('click',function(event1){

    number1.style.backgroundColor='#fb7715';
    number2.style.backgroundColor='#262f38'
    number3.style.backgroundColor='#262f38'
    number4.style.backgroundColor='#262f38'
    number5.style.backgroundColor='#262f38'
    clicked1=true;
     clicked2=false;
     clicked3=false;
     clicked4=false;
     clicked5=false;
});

number2.addEventListener('click',function(event1){
    number2.style.backgroundColor='#fb7715';
    number1.style.backgroundColor='#262f38';
    number3.style.backgroundColor='#262f38';
    number4.style.backgroundColor='#262f38';
    number5.style.backgroundColor='#262f38';
    clicked1=false;
    clicked2=true;
    clicked3=false;
    clicked4=false;
    clicked5=false;
});

number3.addEventListener('click',function(event1){
    number3.style.backgroundColor='#fb7715';
    number1.style.backgroundColor='#262f38';
    number2.style.backgroundColor='#262f38';
    number4.style.backgroundColor='#262f38';
    number5.style.backgroundColor='#262f38';
    clicked3=true;
    clicked1=false;
    clicked2=false;
    clicked4=false;
    clicked5=false;
});
number4.addEventListener('click',function(event1){
    number4.style.backgroundColor='#fb7715';
    number1.style.backgroundColor='#262f38';
    number2.style.backgroundColor='#262f38';
    number3.style.backgroundColor='#262f38';
    number5.style.backgroundColor='#262f38';
    clicked4=true;
    clicked2=false;
    clicked3=false;
    clicked1=false;
    clicked5=false;
});

number5.addEventListener('click',function(event1){
    number5.style.backgroundColor='#fb7715';
    number1.style.backgroundColor='#262f38';
    number2.style.backgroundColor='#262f38';
    number3.style.backgroundColor='#262f38';
    number4.style.backgroundColor='#262f38';
    clicked5=true;
    clicked2=false;
    clicked3=false;
    clicked4=false;
    clicked1=false;
});

fleche.addEventListener('click',function(rtrn){

    div1.style.visibility="visible";
    div2.style.visibility="hidden";
    number5.style.backgroundColor='#262f38';
    number1.style.backgroundColor='#262f38';
    number2.style.backgroundColor='#262f38';
    number3.style.backgroundColor='#262f38';
    number4.style.backgroundColor='#262f38';
    clicked5=false;
    clicked2=false;
    clicked3=false;
    clicked4=false;
    clicked1=false;


});

submitbtn.addEventListener('click',function(){
    div2.style.visibility="visible";
    div1.style.visibility="hidden";
    if((clicked1==false)&&(clicked2==false)&&(clicked3==false)&&(clicked4==false)&&(clicked5==false)){

        alert.style.visibility="visible";
        div1.style.visibility="visible";
        div2.style.visibility="hidden";
            }
   
    
    else if((clicked1==true)){
change.textContent=1;
alert.style.visibility="hidden";
} 
else if((clicked2==true)){
    change.textContent=2;
    alert.style.visibility="hidden";
}
else if((clicked3==true)){
    change.textContent=3;
    alert.style.visibility="hidden";
}
else if((clicked4==true)){
    change.textContent=4;
    alert.style.visibility="hidden";
}
else{
    change.textContent=5;
    alert.style.visibility="hidden";

}
}
);

