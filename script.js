let bar = document.querySelector(".bar");
let val = document.querySelector("#percentage");

bar.style.width = '';

function scroll() {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


    var scrolled = (Math.floor(winScroll) / Math.floor(height)) * 100;


    bar.style.width = `${scrolled}%`;
    val.innerHTML = `${Math.floor(scrolled)}%`;
    console.log(height);
    console.log(Math.ceil(scrolled) + "%");
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() { scroll() };
console.log(bar);