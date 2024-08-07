const sidebar = document.querySelector(".sidebar");
const bars_navbar = document.querySelector(".bars_navbar");
const navbar_upper = document.querySelector(".navbar_upper");
const navbar = document.querySelector(".navbar");
const carousel = document.querySelector(".carousel");
console.log(carousel);

bars_navbar.addEventListener("click",() => {
    
    sidebar.classList.add("show-sideBar");
    // document.body.classList.add("leftfloat")
    navbar_upper.classList.add("leftfloat");
    navbar.classList.add("leftfloat");
    carousel.classList.add("leftfloat");

});
const icon_close = document.querySelector(".icon_close");
icon_close.addEventListener("click", () =>{
    sidebar.classList.remove("show-sideBar");
    navbar_upper.classList.remove("leftfloat");
    navbar.classList.remove("leftfloat");
    carousel.classList.remove("leftfloat");
    
})

