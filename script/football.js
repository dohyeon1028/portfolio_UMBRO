//자동 슬라이드
const frame = document.querySelector("#frame");
const panel = frame.querySelector(".panel");
const panel_lis = panel.querySelectorAll("li");
const interval = 3000;
let len = panel_lis.length;
init();

setInterval(() => {
    nextSlide();
    // youtube_slide();
}, interval);


function nextSlide(){

    const duration = 500;
    const initialValue = parseInt(panel.style.left);

    const targetValue = -200;
    const unit = "%";

    const startTime = performance.now();

    function animate(time){
        const timeReal = time - startTime;
        const progress = timeReal / duration;
        const currentValue = initialValue + (targetValue - initialValue) * progress;
        panel.style.left = `${currentValue}${unit}`;

        if(progress < 1){
            requestAnimationFrame(animate);
        }else if(progress >= 1){
            panel.style.left = "-100%";
            panel.append(panel.firstElementChild);
        }

    }
    requestAnimationFrame(animate);
}

function init(){
    panel.style.left = "-100%";
    panel.prepend(panel.lastElementChild);    
}

//ball rotate

window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const ball =  document.querySelector(".wrap .ball");
    const ball_img = document.querySelector("img");
    if(scroll > 400){
        ball.classList.add("on");
    }else{
        ball.classList.remove("on");
    }
    
})

//youtube

const vidList = document.querySelector(".vidList");
const video_frame = vidList.querySelector(".video_frame");
let key = "AIzaSyDo3ukttxmit7HO2U0lP8ekZyRlZeUAVZ0";
let playlistId = "PLbpunYhud0VvdFsrmh_G73_-dGUcDPO67";
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}`;


fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        let items = json.items;
        let result = '';
        items.map((el, index) => {

            let title = el.snippet.title;
            if(title.length > 20){
                title = title.substr(0, 20) + "...";
            }

            let des = el.snippet.description
            if(des.length > 100){
                des = des.substr(0, 100) + "...";
            }

            let date = el.snippet.publishedAt
            date = date.split("T")[0];

            result += `
                <article style="left: ${25 * (index - 1)}%;">
                    <img src="../img/football/youtube/pc_ucustom_contents_zone.png" class="bg" alt="">
                    <a href="${el.snippet.resourceId.videoId}" class="pic">
                        <img src="${el.snippet.thumbnails.medium.url}">
                    </a>

                    <div class="con">
                        <h2>CONTENTS ZONE</h2>
                        <p>2023 UMBRO x GOALE</p>
                        <a href="${el.snippet.resourceId.videoId}">View more</a>
                    </div>
                </article>
            `;
        })
        video_frame.innerHTML = result;
    })


vidList.addEventListener("click", (e) => {

    e.preventDefault();

    const vidId = e.target.closest("article").querySelector("a").getAttribute("href");

    const header = document.querySelector("header");
    header.style.display = "none";

    let pop = document.createElement("figure");
    pop.classList.add("pop");

    pop.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${vidId}" frameborder = "0" width="100%" height="100%" allowfullscreen></iframe>
        <span class="btnClose">close</span>
    `;
    vidList.append(pop);
});

vidList.addEventListener("click",(e)=>{
    const pop = vidList.querySelector(".pop");
    const header = document.querySelector("header");
    
    if(pop){
        const close = pop.querySelector("span");
        if(e.target == close){
            pop.remove();
            header.style.display = "block";
        } 
    }
})

const articles = document.querySelectorAll("article");
