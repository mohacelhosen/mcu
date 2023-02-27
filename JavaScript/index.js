// 1308-244503

window.addEventListener("scroll", function(){
    const stickyMenu =  this.document.querySelector(".menu-section");
    stickyMenu.classList.toggle("my-Sticky-menu", window.scrollY );
})


// Smooth Internal-Link

const myTitle = [ "Database for MYSQL", "Frontend for React", "Backend for JAVA"];

const title = document.querySelector('.tab-title')


let buttons = document.querySelectorAll('.tab');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active'); 
        if(button.classList.contains('java')){title.innerHTML=myTitle[2]}
        else if(button.classList.contains('mysql')){title.innerHTML=myTitle[0]}
        else if(button.classList.contains('react')){title.innerHTML=myTitle[1]}
    });
});

