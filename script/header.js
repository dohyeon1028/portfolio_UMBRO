const header = document.querySelector("header");
const headerBox = document.querySelector(".headerBox");
const a = document.querySelector("#gnb li a");

if(window.innerWidth > 767){
    window.addEventListener("scroll", ()=>{
        const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
        if(scroll < 10){
            header.classList.remove("on"); 
            headerBox.style.height = `${150 - scroll * 7.5}px`;
    
            header.style.height = "150px";
        } 
        else if(scroll > 10){
            header.classList.add("on");
            headerBox.style.height = "75px";
    
            header.style.height = "75px";
        }
    })
}

const bars = header.querySelector(".fa-bars");
const mobile_aside = document.querySelector(".mobile_aside");
const mobile_aside_closeBtn = mobile_aside.querySelector(".close");
const body = document.querySelector("body")
bars.addEventListener("click", ()=>{
    mobile_aside.style.right = "0%";
    body.style.overflowY = "hidden";
})
mobile_aside_closeBtn.addEventListener("click", ()=>{
    mobile_aside.style.right = "-200%";
    body.style.overflowY = "scroll";
})