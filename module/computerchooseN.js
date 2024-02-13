
let computersNr = Math.floor(Math.random() * 3)

function computerchoosesAsC(){
  if (computersNr == 0){
    console.log("poison")
    return "poison()";
    }
    else if (computersNr == 1){
        console.log("flood")
        return " flood()";
    }
    else {
        console.log("heavyRain")
        return "heavyRain()"
    }

}
export{computerchoosesAsC}
