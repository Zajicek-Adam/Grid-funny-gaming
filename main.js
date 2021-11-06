let defaultsize = 150;
let bg = document.getElementById("bg");
let img = document.getElementById("img");
let header = document.getElementById("h");
function handleMediaQuery(x){
    if(x.matches){
        isBigEnough = false;
        bg.style.backgroundSize = defaultsize;
        img.style.right = 0;
        header.style.left = 0;
    }
    else{
        isBigEnough = true
    }
}

document.addEventListener("mousemove", function(e){
    if(isBigEnough){
    let x = defaultsize + e.pageX/100;
    let y = defaultsize + e.pageY/100;
    let move = (x + y)/2;
    bg.style.backgroundSize = move + '%';
    img.style.right =  e.pageX/9 + 'px';
    header.style.left = e.pageX/9 + 'px';
    }
})
var x = window.matchMedia("(max-width: 1100px)")
var isBigEnough = true; 
handleMediaQuery(x);
