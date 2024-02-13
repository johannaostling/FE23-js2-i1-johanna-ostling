
let computersNr = Math.floor(Math.random() * 3)

function computerchoosesAsC(){
  if (computersNr == 0){
    console.log("computer chooses attack 0")
    }
    else if (computersNr == 1){
        console.log("computer chooses attack 1")
    }
    else {
        console.log("computer heals")
    }

}
export{computerchoosesAsC}
