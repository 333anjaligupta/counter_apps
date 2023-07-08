const minusBtn=document.getElementById("minusBtn");
const plusBtn=document.getElementById("plusBtn");
const resetBtn=document.getElementById("resetBtn");
const displayBtn=document.getElementById("displayBtn");

// for minus btn
minusBtn.addEventListener("click",()=> {
    const value=Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert
           ("negative value not allowed");
    }
});

// for plus btn
minusBtn.addEventListener("click",()=> {
    const value=Number(displayValue.innerText);
    if(value>=10){
        alert
           ("10+negative value not allowed");
    }
    else{
        displayValue.innerText=value+1;
    }
});

// for reset value
resetBtn.addEventListener("click",()=>{
    displayValue.innerText=0;
});