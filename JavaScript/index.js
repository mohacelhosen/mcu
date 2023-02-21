// 1308-244503

window.addEventListener("scroll", function(){
    const stickyMenu =  this.document.querySelector(".menu-section");
    stickyMenu.classList.toggle("my-Sticky-menu", window.scrollY );
})
