const carrent = document.querySelector('#carrent');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach((img)=>{
    img.addEventListener("mouseover", function(e){
     
        carrent.src = e.target.src;

    });
});