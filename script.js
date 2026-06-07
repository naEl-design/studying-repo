let pEl = document.getElementById("head")

let timer = 234
setInterval(function(){
    timer++
    pEl.innerHTML = `${timer}`

},1000)