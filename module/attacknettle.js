function chooseAttackN(){
    const btn1= document.getElementById('btn1')
    const btn2= document.getElementById('btn2')
    const btn3= document.getElementById('btn3')
    
    btn1.innerText= "attack one N";
    btn2.innerText= "attack two n";
    btn3.innerText= "heal N";
    
    btn1.addEventListener("click", function(){
        console.log("attack one")
    
    })
    
    btn2.addEventListener("click", function(){
        console.log("attack two")
        
    })
    
    btn3.addEventListener("click", function(){
        console.log("heal")
        
    })
    }
    
    export {chooseAttackN}