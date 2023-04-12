var nav = document.getElementById("nav")

window.onscroll = function(){
    if(window.scrollY>50){
        nav.classList.add("nav2")
    }else{
        nav.classList.remove("nav2")
    }


    
}

var img = document.getElementById("img")

var ajax = new XMLHttpRequest;

ajax.open("GET","https://api.themoviedb.org/3/movie/550?api_key=848a58c1ebc5d309cf08289753720cf9")

ajax.send()

ajax.onreadystatechange = function(){
    if(ajax.readyState == 4){
      var aa =  JSON.parse(ajax.response)
       img.onclick =function(){console.log(aa)} 
    }
}