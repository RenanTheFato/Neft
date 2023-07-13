document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu')
    let nav = document.querySelector('.nav-menu')

    menu.addEventListener('click', function () {
        menu.classList.toggle('Active')
        nav.classList.toggle('Active')
        console.log('Menu Ativo')  
    })
    
    var items = document.getElementsByTagName("a")
    for(var it = 0; it < items.length; it++){
        items[it].addEventListener('click', function(){
            menu.classList.remove('Active')
            nav.classList.remove('Active')
            console.log('Menu Desativado') 
        })
    }
    var checkOpacity = true
    var btn1 = document.querySelector('.start')
    var btn2 = document.querySelector('.planos')
    var img = document.querySelector('.computer')

    menu.addEventListener('click', function(){
    if (checkOpacity) {
        btn1.style.visibility = 'hidden'
        btn2.style.visibility = 'hidden'
        img.style.visibility = 'hidden'
        checkOpacity = false
    } else {
        btn1.style.visibility = 'visible'
        btn2.style.visibility = 'visible'
        img.style.visibility = 'visible'
        checkOpacity = true
    }

    })
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


