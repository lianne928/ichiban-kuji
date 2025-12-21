let carouselImgData = [
  // 帕比順順
  (eventPuppetsunsun = {
    img: "../assets/image/eventPuppet.jpg",
    tittle: "PUPPET SUNSUN 帕比順順",
    desc: "如果你正在找一個「陪你生活」的角色，那首選就是PUPPETSUNSUN!",
    href: "https://yokoku.pass-the-baton.com/",
  }),
  // 七龍珠
  (eventBanpresto = {
    img: "../assets/image/event_BANPRESTO.jpg",
    tittle: "七龍珠 THE CHRONICLE OFGOKU』童年悟空、大猿悟空",
    desc: "明年五月開抽！",
    href: "https://yokoku.pass-the-baton.com/",
  }),
  // MOS
  (eventMos = {
    img: "../assets/image/eventMos.jpg",
    tittle: "《摩斯漢堡》第二彈開抽！",
    desc: "Last 賞 10 抽倒數中！摩斯漢堡造型的可愛時鐘，還能播放「摩斯店內音樂」",
    href: "https://yokoku.pass-the-baton.com/",
  }),
  // Princess Kaguya
  (eventPrincessKaguya = {
    img: "../assets/image/eventPrincessKaguya.jpg",
    tittle: "超時空輝耀姬！（超かぐや姫！/ Cosmic Princess Kaguya!）",
    desc: "將於2026年1月22日於 Netflix 全球獨家播出。",
    href: "https://yokoku.pass-the-baton.com/",
  }),
];

// console.log(carouselImgData.length); //4

let mainImg = document.getElementById("mainImg");
let mainTittle = document.getElementById("mainTittle");
let mainDesc = document.getElementById("mainDesc");
let mainHref = document.getElementById("mainHref");

let i = 0;

setInterval(() => {
  i++;
  if (i > carouselImgData.length - 1) {
    i = 0;
  }
  // console.log(i);
  mainImg.src = carouselImgData[i].img;
  mainTittle.textContent = carouselImgData[i].tittle;
  mainDesc.textContent = carouselImgData[i].desc;
  mainHref.href = carouselImgData[i].href;
}, 3000);
