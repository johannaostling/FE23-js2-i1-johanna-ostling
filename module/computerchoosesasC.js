
let computersNr = Math.floor(Math.random() * 3)

function computerchoosesAsC(){
  if (computersNr == 0){
    console.log("needle")
    return "needle()";
    }
    else if (computersNr == 1){
        console.log("heatstroke")
        return "heatstroke()";
    }
    else {
        console.log("succulentPowers")
        return "succulentPowers()"
    }

}
export{computerchoosesAsC}
