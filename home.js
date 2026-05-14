// const textElement = document.getElementById("moving-text");
// let position = window.innerWidth; // نقطة البداية (عرض الشاشة)

// function animateTicker() {
//     position--; // تقليل الموقع بمقدار 1 ليكون أبطأ وأنعم

//     // إذا اختفى النص بالكامل جهة اليسار
//     if (position < -textElement.offsetWidth) {
//         position = window.innerWidth; // ابدأ من اليمين مرة أخرى
//     }

//     textElement.style.left = position + "px";

//     // استخدام requestAnimationFrame بدلاً من setInterval لحركة أنعم جداً
//     requestAnimationFrame(animateTicker);
// }

// // بدء التشغيل
// animateTicker();
// const mainHeader = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         mainHeader.classList.add('nav-scrolled');
//     } else {
//         mainHeader.classList.remove('nav-scrolled');
//     }
// });

// function showPrice(element) {
//     var price = element.querySelector('.price-tag');
//     if (price.style.display === "none" || price.style.display === "") {
//         price.style.display = "block";
//     } else {
//         price.style.display = "none";
//     }
// }


// function addToCart(event, itemName) {
//     event.stopPropagation();

//     var btn = event.target;


//     if (btn.innerHTML === "Add to Cart") {
//         btn.innerHTML = "Added! ✓";
//         btn.style.backgroundColor = "DarkGreen";
//         btn.style.color = "white";
//     } else {
//         btn.innerText = "Add to Cart";
//         btn.style.backgroundColor = "saddlebrown";
//         btn.style.color = "white";
//     }
// }
// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     grabCursor: true,
//     centeredSlides: true,

//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//     },

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         }
//     }
// });




const textElement = document.getElementById("moving-text");
let position = window.innerWidth; // نقطة البداية (عرض الشاشة)

function animateTicker() {
    position--; // تقليل الموقع بمقدار 1 ليكون أبطأ وأنعم

    // إذا اختفى النص بالكامل جهة اليسار
    if (position < -textElement.offsetWidth) {
        position = window.innerWidth; // ابدأ من اليمين مرة أخرى
    }

    textElement.style.left = position + "px";

    // استخدام requestAnimationFrame بدلاً من setInterval لحركة أنعم جداً
    requestAnimationFrame(animateTicker);
}

// بدء التشغيل
animateTicker();
const mainHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('nav-scrolled');
    } else {
        mainHeader.classList.remove('nav-scrolled');
    }
});