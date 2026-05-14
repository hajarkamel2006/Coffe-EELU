

















  // 1. تغيير شكل الهيدر عند التمرير (Scroll Effect)
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
                header.style.padding = '10px 8%'; // يصغر حجم الهيدر شوية وشكله يبقى أشيك
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                header.style.padding = '15px 8%';
            }
        });

        // 2. تنبيه عند الضغط على أزرار السوشيال ميديا (مثال تفاعلي)
        const socialIcons = document.querySelectorAll('.social-links a');
        socialIcons.forEach(icon => {
            icon.addEventListener('click', function (e) {
                // حالياً هيمنع الصفحة تحمل لحد ما تحطي لينكاتك الحقيقية
                console.log("Redirecting to our social media...");
            });
        });

        // 3. تأثير ظهور العناصر عند النزول (Scroll Reveal Simple)
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // تطبيق التأثير على كروت المميزات وقسم القصة
        document.querySelectorAll('.feature-item, .story-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease-out';
            observer.observe(el);
        });

        // 4. رسالة ترحيب في الـ Console (شغل مبرمجين بقا يا هاجر 😉)
        console.log("%cWelcome to My Resto! ☕", "color: #4a342e; font-size: 20px; font-weight: bold;");
   