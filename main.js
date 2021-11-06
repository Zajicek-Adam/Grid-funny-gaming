document.addEventListener("mousemove", function(e){
    let bg = document.getElementById("bg");
    let img = document.getElementById("img");
    let header = document.getElementById("h");

    let x = 100 + e.pageX/200;
    let y = 100 + e.pageY/200;
    let move = (x + y)/2;
    bg.style.backgroundSize = move + '%';
    img.style.right =  e.pageX/3 + 'px';
    header.style.left = e.pageX/3 + 'px';
})