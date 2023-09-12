const articles = document.querySelectorAll("section article");
const articles_len = articles.length;
console.log(articles_len)

articles.forEach((el, index) => {
   el.innerHTML += `<div class= "rank">${index+1}</div>`
   el.style.opacity = "1";
});



if(window.innerWidth > 1179){
   for (const el of articles) {
      el.style.top = "300px";
      el.style.opacity = "0";
   }

   setTimeout(() => {
      for(let i = 0; i < 4 ; i++){
         articles[i].style.top = "0px";
         console.log(parseInt(articles[1].style.top));
         articles[i].style.opacity = "1";
         articles[i].style.transitionDelay = `${i * 0.1}s`
      }
   }, 0);
   window.addEventListener("scroll", ()=>{
      const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      console.log(scroll);
      if(scroll >= 300 && scroll < 900){
         for(let i = 4; i < 8 ; i++){
            articles[i].style.top = "0px";
            articles[i].style.opacity = "1";
            articles[i].style.transitionDelay = `${(i % 4) * 0.1}s`
            for(let i = 8; i < 12 ; i++){
               articles[i].style.opacity = "0";
               articles[i].style.top = "300px";
               articles[i].style.transitionDelay = `${(4 - (i % 4)) * 0.1}s`
            }
         }
      }
      else if(scroll >= 900 && scroll < 1560){
         for(let i = 8; i < 12 ; i++){
            articles[i].style.top = "0px";
            articles[i].style.opacity = "1";
            articles[i].style.transitionDelay = `${(i % 4) * 0.1}s`
            for(let i = 12; i < 16 ; i++){
               articles[i].style.opacity = "0";
               articles[i].style.top = "300px";
               articles[i].style.transitionDelay = `${(4 - (i % 4)) * 0.1}s`
            }
         }
      }
      else if(scroll >= 1560 && scroll < 2220){
         for(let i = 12; i < 16 ; i++){
            articles[i].style.top = "0px";
            articles[i].style.opacity = "1";
            articles[i].style.transitionDelay = `${(i % 4) * 0.1}s`
            for(let i = 16; i < 20 ; i++){
               articles[i].style.opacity = "0";
               articles[i].style.top = "300px";
               articles[i].style.transitionDelay = `${(4 - (i % 4)) * 0.1}s`
            }
         }
      }
      else if(scroll >= 2220 && scroll < 2880){
         for(let i = 16; i < 20 ; i++){
            articles[i].style.top = "0px";
            articles[i].style.opacity = "1";
            articles[i].style.transitionDelay = `${(i % 4) * 0.1}s`
         }
         for(let i = 20; i < 24 ; i++){
            articles[i].style.opacity = "0";
            articles[i].style.top = "300px";
            articles[i].style.transitionDelay = `${(4 - (i % 4)) * 0.1}s`
         }
      }
      else if(scroll >= 2880 && scroll < 3540){
         for(let i = 20; i < 24 ; i++){
            articles[i].style.top = "0px";
            articles[i].style.opacity = "1";
            articles[i].style.transitionDelay = `${(i % 4) * 0.1}s`
         }
      }
   
   
      
   })
}

