function chooseAttackC(){

btn1.innerText= "needle";
btn2.innerText= "heatstroke";
btn3.innerText= "succulentPowers";

btn1.addEventListener("click", function(){
    console.log("needle")

})

btn2.addEventListener("click", function(){
    console.log("heatstroke")
    
})

btn3.addEventListener("click", function(){
    console.log("succulentPowers")
    
})
}

export {chooseAttackC}