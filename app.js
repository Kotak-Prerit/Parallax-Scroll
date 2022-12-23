let parallax = document.getElementById("parallax");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    console.log(offset)
})

var loader = document.getElementById("preloader");
        function load() { preloader.style.display = "none"; }