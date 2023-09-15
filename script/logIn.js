const form = document.querySelector("#formLogin");
const btnSubmit = form.querySelector("button[type=submit]");

btnSubmit.addEventListener("click", (e)=>{
   if(!isTxt("loginId", 5)) e.preventDefault();
   if(!isTxt("loginPwd", 8)) e.preventDefault();
})

function isTxt(el, len){
   let input = form.querySelector(`#${el}`); 
   let txt = input.value;

   if(txt.length >= len){
      return true;
   }
   else{
      return false
   }
}