let flag = false;
$(function(){
	$('[data-toggle="tooltip"]').tooltip()
})


console.log(document.getElementsByTagName("marquee")[0])
document.getElementsByTagName("marquee")[0].addEventListener("mouseover", function(){
    document.getElementsByTagName("marquee")[0].innerHTML = "HAZ CLICK AQUI Y RECIBELAS EN TU DOMICILIO"
    setTimeout(function(){
    document.getElementsByTagName("marquee")[0].innerHTML = "¡OFERTA: Media docena de chinchonadas a 1,99€!"
    }, 3000)

})

/* document.addEventListener("mouseover", function(){
    if( flag === true){
    document.getElementsByTagName("marquee")[0].innerHTML = "¡OFERTA: Media docena de chinchonadas a 1,99€!"
    }
}) */

