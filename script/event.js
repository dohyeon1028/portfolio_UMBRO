const btns = document.querySelectorAll(".btns>li");
const articles = document.querySelectorAll("section article");

btns.forEach((el, index) => {
   el.addEventListener("click", ()=>{
      for (let i = 0; i < btns.length; i++) {
         btns[i].classList.remove("on");
         articles[i].classList.remove("on");
      }
      el.classList.add("on");
      articles[index].classList.add("on");
   })
   
});

