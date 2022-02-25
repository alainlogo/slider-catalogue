var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el:'.swiper-pagination',
        type: 'progressbar',
    }
}) 

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    
     innerCursor.style.left = `${x}px`;
     innerCursor.style.top = `${y}px`;
     outerCursor.style.left = `${x}px`;
     outerCursor.style.top = `${y}px`;
}


// CERCLE SOURIS

const cercle_text = document.querySelector('.cercle_text');
                cercle_text.innerHTML = cercle_text.textContent.replace(/\S/g,
                    "<span>$&</span>");

const element = document.querySelectorAll('span');
    for(let i = 0; i<element.length; i++){
    element[i].style.transform = "rotate("+i*15+"deg)"
}

document.addEventListener("mousemove", function(e){
    cercle_text.style.left = e.pageX + 'px';
    cercle_text.style.top = e.pageY + 'px';
})