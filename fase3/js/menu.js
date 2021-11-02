const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i = 0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function(){
        
        if(window.innerWidth < 728){
            const subMenu = this.nextElementSibling;
            const alto = subMenu.scrollHeight;
            //alert("clic submenu: "+ alto)
            if (subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.height= alto + "px";
            }
        }
    });
    
}