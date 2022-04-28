// $(document).ready(function(){
//     $('.gnb .depth2_1').hide();
//         $('.openAll1').mouseover(function(){
//             $('.submenu_list').slideDown();
//     });
//         $('.openAll').mouseleave(function(){
//             $('.submenu_list').hide();
//         });
// });


let gnb1 = document.querySelector(".gnb_depth2_1");
let gnb2 = document.querySelector(".gnb_depth2_2");
let gnb3 = document.querySelector(".gnb_depth2_3");
let gnb4 = document.querySelector(".gnb_depth2_4");
let writer = document.querySelector(".openAll1");
let works = document.querySelector(".openAll2");
let goods = document.querySelector(".openAll3");
let space = document.querySelector(".openAll4");
let submenu = document.querySelector("#container");

writer.addEventListener("mouseover",function(){
    gnb1.style.display = "block";
    gnb2.style.display = "none";
    gnb3.style.display = "none";
    gnb4.style.display = "none";
});
works.addEventListener("mouseover",function(){
    gnb2.style.display = "block";
    gnb1.style.display = "none";
    gnb3.style.display = "none";
    gnb4.style.display = "none";
});
goods.addEventListener("mouseover",function(){
    gnb3.style.display = "block";
    gnb1.style.display = "none";
    gnb2.style.display = "none";
    gnb4.style.display = "none";
});
space.addEventListener("mouseover",function(){
    gnb4.style.display = "block";
    gnb1.style.display = "none";
    gnb2.style.display = "none";
    gnb3.style.display = "none";
});
submenu.addEventListener("mouseover",function(){
    gnb1.style.display = "none";
    gnb2.style.display = "none";
    gnb3.style.display = "none";
    gnb4.style.display = "none";
})






// index.html 스크롤링 시작
// var slideIndex = 0;
// showSlides();

// function showSlides(){
//     var i;

//     var slides = document.getElementsByClassName("viewImgList");
//     var dots = document.getElementsByClassName("rollingbtn");
//         for(i = 0; i <slides.length; i++){
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if(slideIndex > slides.length){
//             slideIndex = 1
//         }
//         for(i = 0; i < dots.length; i++){
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//         setTimeout(showSlides, 2000);
// }


let imagess = document.getElementsByClassName("imagess");
console.log(imagess.length);

let btn1 = document.querySelector(".butt0");
// index.html 스크롤링 끝