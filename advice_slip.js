function limparFormulario(conselho){
    document.getElementById("conselho").value = ""; 

}


function preencherFormulario(conselho){
    document.getElementById("conselho").value = conselho.conselho; 

}


function verConselho(){
    /*limparFormulario(conselho); */

    const conselho = document.getElementById("conselho").value
    console.log(conselho); 
    const url = `https://api.adviceslip.com/advice/json`; 

}

document.getElementById("conselho")
    .addEventListener("focusout", verConselho); 