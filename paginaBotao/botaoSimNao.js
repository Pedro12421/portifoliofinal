var botaoNao = document.querySelector("#botaoNao");

botaoNao.addEventListener("mouseover", function(){
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    let botaoWidth = botaoNao.offsetWidth;
    let botaoHeight = botaoNao.offsetHeight;
    
    let newLeft = Math.random() * (windowWidth - botaoWidth)
    let newTop = Math.random() * (windowHeight - botaoHeight)


    botaoNao.style.position = "absolute";
    botaoNao.style.left = newLeft + "px";
    botaoNao.style.top = newTop + "px";
})
function botaoSim(){
    window.location = "https://www.youtube.com/shorts/buNoTaHD9iA"
}