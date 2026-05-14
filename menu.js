// // اختيار الأزرار وجميع عناصر القائمة
// const filterButtons = document.querySelectorAll('.filter-btn');
// const menuItems = document.querySelectorAll('.menu-item');

// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // 1. إزالة كلاس active من كل الأزرار وإضافته للزرار اللي ضغطنا عليه
//         filterButtons.forEach(btn => btn.classList.remove('active'));
//         button.classList.add('active');

//         // 2. الحصول على قيمة الفلتر من الزرار
//         const filterValue = button.getAttribute('data-filter');

//         // 3. فلترة العناصر
//         menuItems.forEach(item => {
//             const itemCategory = item.getAttribute('data-category');

//             if (filterValue === 'all' || filterValue === itemCategory) {
//                 // إظهار العنصر مع إضافة أنيميشن
//                 item.style.display = 'flex';
//                 item.classList.add('fade-in');
//             } else {
//                 // إخفاء العنصر
//                 item.style.display = 'none';
//                 item.classList.remove('fade-in');
//             }
//         });
//     });
// });











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

function showPrice(element) {
    var price = element.querySelector('.price-tag');
    if (price.style.display === "none" || price.style.display === "") {
        price.style.display = "block";
    } else {
        price.style.display = "none";
    }
}


function addToCart(event, itemName) {
    event.stopPropagation();

    var btn = event.target;


    if (btn.innerHTML === "Add to Cart") {
        btn.innerHTML = "Added! ✓";
        btn.style.backgroundColor = "DarkGreen";
        btn.style.color = "white";
    } else {
        btn.innerText = "Add to Cart";
        btn.style.backgroundColor = "saddlebrown";
        btn.style.color = "white";
    }
}