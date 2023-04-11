var nav = document.getElementById("nav")

window.onscroll = function(){
    if(window.scrollY>50){
        nav.classList.add("nav2")
    }else{
        nav.classList.remove("nav2")
    }


    
}