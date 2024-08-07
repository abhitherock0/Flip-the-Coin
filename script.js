let arr=["https://i.pinimg.com/564x/a9/96/b0/a996b04232899d377f6583960bdf69a3.jpg","https://i.pinimg.com/474x/c7/ff/39/c7ff39e004492cdb03d1bb2ab1062990.jpg"];

let x = document.getElementById("coin");
let y = document.getElementById("btn")

x.addEventListener("click",function(){
    let r = Math.floor(Math.random()*2);
    x.innerHTML = `<img src = "${arr[r]}">`
    if(r==0){
        y.style.backgroundColor= "green"
        y.innerHTML="Heads!!";
    }
    else{
        y.style.backgroundColor= "green"
        y.innerHTML="Tails!!";
    }
}); 