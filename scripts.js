document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        this.innerHTML = navMenu.classList.contains('open') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Плавная прокрутка
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if(navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Управление видимостью навигации при скролле
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Показываем/скрываем навигацию
        if (currentScroll > 100) {
            mainNav.classList.add('visible');
            
            // Изменение прозрачности навигации
            if (currentScroll > lastScroll) {
                // Скролл вниз
                mainNav.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                // Скролл вверх
                mainNav.style.background = 'rgba(255, 255, 255, 0.95)';
            }
            mainNav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            mainNav.classList.remove('visible');
            mainNav.style.background = 'rgba(255, 255, 255, 0.9)';
            mainNav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
        lastScroll = currentScroll;
        
        // Подсветка текущего раздела
        document.querySelectorAll('section, footer').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                document.querySelectorAll('.nav-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                const correspondingNavItem = document.querySelector(`.nav-item a[href="#${sectionId}"]`);
                if (correspondingNavItem) {
                    correspondingNavItem.parentElement.classList.add('active');
                }
            }
        });
    });
    
    // Анимация при прокрутке
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.content-section, .wall-photo, .market-column, .inventory-section').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(item);
    });
    
    // Прокрутка вниз при клике на стрелку
    document.querySelector('.scroll-down').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: document.querySelector('#about').offsetTop - 70,
            behavior: 'smooth'
        });
    });
});