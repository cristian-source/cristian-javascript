function cambiarColorFondo () {
    document.body.style.backgroundColor= '#fcf79f' 

}
function cambiarColor() {
    var parrafo = document.getElementsByTagName("p");
    parrafo[0].style.color= '#ee4d2f'
    parrafo[1].style.color= '#ee4d2f'
    parrafo[2].style.color= '#ee4d2f'
    parrafo[3].style.color= '#ee4d2f'
    parrafo[4].style.color= '#ee4d2f'
    parrafo[5].style.color= '#ee4d2f'
}

function tamañoFuente() {
    document.getElementById('destacado').style.fontSize= '24px'

}
function cambiarTipografía() {
    document.getElementById('fuente').style.fontFamily= 'calibri'
} 

function mostrarImagen() {
    var imagen= document.getElementById('imagen')
    imagen.style.display= 'block';
} 