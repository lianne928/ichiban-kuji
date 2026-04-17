import "./assets/scss/all.scss";

// （01) 先建立資料 （02）拉 DOM  (03) 事件 / 行為 拆分 （03-1）結果製作 （03-2）事件執行製作
let carouselImgData = [
  // 帕比順順
  (eventPuppetsunsun = {
    img: "./assets/image/eventPuppet.jpg",
    title: "PUPPET SUNSUN 帕比順順",
    desc: "如果你正在找一個「陪你生活」的角色，那首選就是PUPPETSUNSUN!",
    href: "./event_detail_sunsun.html",
  }),
  // 七龍珠
  (eventBanpresto = {
    img: "./assets/image/event_BANPRESTO.jpg",
    title: "七龍珠 THE CHRONICLE OFGOKU』童年悟空、大猿悟空",
    desc: "明年五月開抽！",
    href: "./event_detail_sunsun.html",
  }),
  // MOS
  (eventMos = {
    img: "./assets/image/eventMos.jpg",
    title: "《摩斯漢堡》第二彈開抽！",
    desc: "Last 賞 10 抽倒數中！摩斯漢堡造型的可愛時鐘，還能播放「摩斯店內音樂」",
    href: "./event_detail_sunsun.html",
  }),
  // Princess Kaguya
  (eventPrincessKaguya = {
    img: "./assets/image/eventPrincessKaguya.jpg",
    title: "超時空輝耀姬！（超かぐや姫！/ Cosmic Princess Kaguya!）",
    desc: "將於2026年1月22日於 Netflix 全球獨家播出。",
    href: "./event_detail_sunsun.html",
  }),
];

// 測試 // console.log(carouselImgData.length); //4

// （02）拉 DOM
let mainImg = document.getElementById("mainImg");
let mainTitle = document.getElementById("mainTittle");
let mainDesc = document.getElementById("mainDesc");
let mainHref = document.getElementById("mainHref");

// console.log("DOM check:", { mainImg, mainTittle, mainDesc, mainHref });

// (03) 事件 / 行為 拆分 （03-1）結果製作
/* i 要等 事件被呼叫的時候才會拿到值，目前先給他一個空位 
   -> updateCarousel(carouselImgData[i]); -> 這個函式執行時去找 carouselImgData 第 i 個
*/
function updateCarousel(i) {
  mainImg.src = carouselImgData[i].img;
  mainTitle.textContent = carouselImgData[i].title;
  mainDesc.textContent = carouselImgData[i].desc;
  mainHref.href = carouselImgData[i].href;
}

// (03) 事件 / 行為 拆分 （03-2）事件執行製作
function startCarousel() {
  let i = 0;
  setInterval(() => {
    i++;
    if (i > carouselImgData.length) {
      i = 0;
    }
    updateCarousel(i);
  }, 3000);
}

startCarousel();
