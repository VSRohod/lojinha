// document.querySelector("#trocaTema").addEventListener("click", () => {})
$("#trocaTema").on("click", function(){
    var body = document.querySelector("body")
    
    if(body.classList.contains("temaClaro")){
        body.classList.replace("temaClaro","temaEscuro")
        $("#trocaTema").text("🌑")
    }else{
        body.classList.replace("temaEscuro","temaClaro")
        $("#trocaTema").text("🌞")
    }

})

$("#secaoProdutos").hide(0)
$("#secaoProdutos").show(1000)