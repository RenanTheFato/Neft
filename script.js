var menu = document.querySelector('.menu')
let nav = document.querySelector('.nav-menu')

menu.addEventListener('click', clicar)

function clicar(){
    menu.classList.toggle('Active')
    nav.classList.toggle('Active')
    console.log('Menu Ativo')
}
var checkOpacity = true
var btn1 = document.querySelector('.start')
var btn2 = document.querySelector('.planos')
var img = document.querySelector('.computer')

menu.addEventListener('click', function(){
    if (checkOpacity) {
        btn1.style.opacity = '0'
        btn2.style.opacity = '0'
        img.style.opacity = '0'
        checkOpacity = false
    } else {
        btn1.style.opacity = '1'
        btn2.style.opacity = '1'
        img.style.opacity = '1'
        checkOpacity = true
    }

})

function imageChange() {
    var picture = document.querySelector('.simbol')
    var mobile = window.matchMedia("(max-width: 785px)").matches

if (mobile) {
    picture.src = "Img/PhoneElement.png"
    picture.alt = "Mobile Picture"
    console.log('Mobile')
} else{
    picture.src = "Img/ComputerElement.png"
    picture.alt = "Desktop Picture"
}

}


imageChange()

window.addEventListener('resize', function () {
    imageChange()
    console.log('Redimensionou')
})
