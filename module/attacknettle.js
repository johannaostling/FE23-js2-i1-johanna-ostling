function chooseAttackN(){

    btn1.innerText= "poison";
    btn2.innerText= "flood";
    btn3.innerText= "heavyRain";
    
    btn1.addEventListener("click", function(){
        console.log("poison")
    
    })
    
    btn2.addEventListener("click", function(){
        console.log("flood")
        
    })
    
    btn3.addEventListener("click", function(){
        console.log("heavyRain")
        
    })
    }
    
    export {chooseAttackN}