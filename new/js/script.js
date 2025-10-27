// Тексты для разных языков
const translations = {
  ru: {
    header: "Вдумчивый, индивидуальный, эффективный подход к покупке и продаже самолётов.",
    description: `<p>В мире нейросетей, автоматизации, воронок продаж даже такое сокровенное и редкое событие, как покупку самолёта, многие пытаются поставить на шаблонные рельсы, поручить алгоритмам и максимально подогнать под какой-то общий стандарт – потому что «так положено». Но самолёт покупают незаурядные люди, и у каждого из них есть свои мечты, свой характер, свои правила и принципы.</p>
      <p class="descr-p-ru">И вы, те редкие и уникальные люди, которые задумываются о покупке самолёта или уже стали владельцем, точно добились этого не потому, что слушали «как положено» – а потому что прокладывали свой путь.</p>
      <p class="descr-p-ru">Поэтому, получив разносторонний опыт в отрасли, полетав на множестве разных джетов и успешно закрыв достаточное количество изощрённых сделок, я решил отбросить все шаблоны и подойти к делу так, как оно и замышлялось изначально: лично и внимательно разбираясь в нюансах каждого покупателя, а затем приступая к поиску индивидуального, максимально подходящего решения.</p> <p class="sign"> Иван Веретенников </p>`,
    signature: "Иван Веретенников",
    projects: "Текущие проекты",
    sale: "Продажа",
    purchase: "Покупка",
    copyright: "UPCAST By Ivan Veretennikov",
    telegramTitle: "Telegram",
    whatsappTitle: "WhatsApp",
    emailTitle: "Написать email",
    publications: "Публикации",
    readMore: "Читать →",
    backToHome: "← Вернуться на главную",
    publicationsTitle: "Глубокий взгляд на мир бизнес-авиации",
    publicationsIntro: "Экспертные статьи и аналитика от профессионала с 18-летним опытом в авиации",
    readArticle: "Читать статью",
    readTime: "мин чтения"
  },
  en: {
    header: "Thoughtful, individual, human approach to buying and selling business aircraft.",
    description: `<p>In my first career as a journalist, I became something like the Nabokov of business aviation – that is, the only Russian I'm aware of to be published in leading international publications and well-known to the English-speaking world. I interviewed top businessmen and celebrities, spoke at conferences, and even published JetBook, the first-of-a-kind app for mobiles and tablets.</p>
      <p class="descr-p-en">With that experience, I went on to join what became a very successful aircraft sales company and learnt all aspects of the trade: intricacies of cross-border transactions, key things to look for in a business jet, the emotions that really guide buyers and sellers. I also got a pilot licence for the Robinson R44 and R66 – I strongly recommend learning to fly to anyone who gets the opportunity, much like buying an aircraft. There's not a single disadvantage to doing it!</p>
      <p class="descr-p-en">Now I'm out to start my own aircraft brokerage. In a world seeking to automate and outsource to AI, I think buying and selling business jets remains a very individual, human, and personal experience. And anyone who reaches this point in their life deserves special treatment. That's why I approach every conversation with an open mind and take the time to really understand each situation and request, rather than using mass-market generalisations to push a client into some "standard solution". You're not standard if you're buying or selling an airplane!</p> <p class="sign"> Ivan Veretennikov </p>`,
    signature: "Ivan Veretennikov",
    projects: "Currently working on",
    sale: "Offering for Sale",
    purchase: "Looking to Buy",
    copyright: "UPCAST By Ivan Veretennikov",
    telegramTitle: "Telegram",
    whatsappTitle: "WhatsApp",
    emailTitle: "Email us",
    publications: "Publications",
    readMore: "Read →",
    backToHome: "← Back to Home",
    publicationsTitle: "Deep insights into business aviation",
    publicationsIntro: "Expert articles and analytics from a professional with 18 years of aviation experience",
    readArticle: "Read article",
    readTime: "min read"
  }
};

function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}



function getLocalizedUrl(path, lang = null) {
    const currentLang = lang || localStorage.getItem('siteLanguage') || 'en';
    const url = new URL(path, window.location.origin);
    url.searchParams.set('lang', currentLang);
    return url.pathname + url.search;
}

// Функция для определения языка с правильным приоритетом
function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  // Высший приоритет: параметр из URL
  if (langParam && (langParam === 'ru' || langParam === 'en')) {
    localStorage.setItem('siteLanguage', langParam);
    return langParam;
  }
  
  // Второй приоритет: сохраненный язык
  const savedLang = localStorage.getItem('siteLanguage');
  if (savedLang) {
    return savedLang;
  }
  
  // Третий приоритет: язык браузера
  const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
  localStorage.setItem('siteLanguage', browserLang);
  return browserLang;
}

// Функция для переключения языка
function switchLanguage(lang) {
  if (!['ru', 'en'].includes(lang)) return;
  
  // Сохраняем выбранный язык
  localStorage.setItem('siteLanguage', lang);
  
  // Обновляем URL с параметром языка
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
  
  // Применяем переводы
  applyTranslations(lang);
}

// Функция для применения переводов
function applyTranslations(lang) {
  const langData = translations[lang] || translations['en'];
  
  // Обновляем основные тексты
  document.querySelectorAll('.header-text').forEach(el => {
    if (!el.hasAttribute('data-lang')) {
      el.textContent = langData.header;
    }
  });
  
  if (document.querySelector('.description')) {
    document.querySelector('.description').innerHTML = langData.description;
  }
  
  // Обновляем элементы с data-lang
  document.querySelectorAll('[data-lang]').forEach(el => {
    const elementLang = el.getAttribute('data-lang');
    el.style.display = elementLang === lang ? 'block' : 'none';
    
    // Для элементов с текстовым содержимым
    if (['P', 'SPAN', 'H1', 'H2', 'H3', 'A'].includes(el.tagName)) {
      const translationKey = el.getAttribute('data-translation');
      if (translationKey && langData[translationKey]) {
        el.textContent = langData[translationKey];
      }
    }
  });
  
  // Обновляем активное состояние кнопок языка
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  // Обновляем текст кнопки sharing
  document.querySelectorAll('.share-text').forEach(el => {
    const elementLang = el.getAttribute('data-lang');
    el.style.display = elementLang === lang ? 'inline' : 'none';
  });
  
  // Обновляем элементы в меню sharing
  document.querySelectorAll('.share-item [data-lang]').forEach(el => {
    const elementLang = el.getAttribute('data-lang');
    el.style.display = elementLang === lang ? 'inline' : 'none';
  });
  
  // Устанавливаем язык документа
  document.documentElement.lang = lang;
}

// Функции для бургер-меню
function initBurgerMenu() {
  const burgerIcon = document.getElementById('burgerIcon');
  const burgerNav = document.getElementById('burgerNav');
  const burgerOverlay = document.getElementById('burgerOverlay');
  
  if (!burgerIcon || !burgerNav || !burgerOverlay) return;
  
  const toggleMenu = () => {
    burgerIcon.classList.toggle('active');
    burgerNav.classList.toggle('active');
    burgerOverlay.classList.toggle('active');
  };
  
  const closeMenu = () => {
    burgerIcon.classList.remove('active');
    burgerNav.classList.remove('active');
    burgerOverlay.classList.remove('active');
  };
  
  burgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  
  burgerOverlay.addEventListener('click', closeMenu);
  
  // Обработка кликов по ссылкам меню
  document.querySelectorAll('.burger-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.hasAttribute('onclick')) {
        // Для ссылок с обработчиками (Telegram, WhatsApp, Email)
        e.preventDefault();
        closeMenu();
        const onclickAttr = link.getAttribute('onclick');
        if (onclickAttr) eval(onclickAttr);
      } else {
        // Для обычных ссылок просто закрываем меню
        setTimeout(closeMenu, 300);
      }
    });
  });
  
  // Закрытие меню при клике вне его области
  document.addEventListener('click', (e) => {
    if (!burgerNav.contains(e.target) && !burgerIcon.contains(e.target) && burgerNav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  burgerNav.addEventListener('click', (e) => e.stopPropagation());
}

// Функции для контактов
function openEncodedLink() {
  const encoded = 'aHR0cHM6Ly90Lm1lL2l2amV0';
  window.open(atob(encoded), '_blank');
}

function openWA() {
  const encoded = 'NzkwMzY2NjE1MTM=';
  window.open(`https://wa.me/${atob(encoded)}`, '_blank');
}

function sendEmail() {
  window.location.href = "mailto:ivan@upcast.pro";
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  switchLanguage(lang);
  initBurgerMenu();

    // Инициализируем чистый слайдер
    if (document.querySelector('.cases-slider')) {
      CleanCaseSlider.init();
  }
});

// Функция для toggle меню sharing
function toggleShareMenu() {
    const shareMenu = document.getElementById('shareMenu');
    if (shareMenu) {
        shareMenu.classList.toggle('active');
        
        // Закрываем другие открытые меню если есть
        const allMenus = document.querySelectorAll('.share-menu.active');
        allMenus.forEach(menu => {
            if (menu !== shareMenu) {
                menu.classList.remove('active');
            }
        });
    }
}

// Закрытие меню при клике вне его
document.addEventListener('click', function(e) {
    const shareMenu = document.getElementById('shareMenu');
    const shareToggle = document.querySelector('.share-toggle');
    
    if (shareMenu && shareToggle && 
        !shareMenu.contains(e.target) && 
        !shareToggle.contains(e.target)) {
        shareMenu.classList.remove('active');
    }
});

// Функция для toggle меню sharing
function toggleShareMenu() {
    const shareMenu = document.getElementById('shareMenu');
    if (shareMenu) {
        shareMenu.classList.toggle('active');
        
        // Закрываем другие открытые меню если есть
        const allMenus = document.querySelectorAll('.share-menu.active');
        allMenus.forEach(menu => {
            if (menu !== shareMenu) {
                menu.classList.remove('active');
            }
        });
    }
}

// Закрытие меню при клике вне его
document.addEventListener('click', function(e) {
    const shareMenu = document.getElementById('shareMenu');
    const shareToggle = document.querySelector('.share-toggle');
    
    if (shareMenu && shareToggle && 
        !shareMenu.contains(e.target) && 
        !shareToggle.contains(e.target)) {
        shareMenu.classList.remove('active');
    }
});

// Функции sharing (оставляем без изменений)
function shareTelegram() {
    const text = encodeURIComponent(document.title);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    closeShareMenu();
}

function shareWhatsApp() {
    const text = encodeURIComponent(document.title + ' - ' + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    closeShareMenu();
}

function shareEmail() {
    const subject = encodeURIComponent(document.title);
    const body = encodeURIComponent('Посмотрите эту статью: ' + window.location.href);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    closeShareMenu();
}

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showNotification('Ссылка скопирована!', 'Link copied!');
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
    });
    closeShareMenu();
}

function closeShareMenu() {
    const shareMenu = document.getElementById('shareMenu');
    if (shareMenu) {
        shareMenu.classList.remove('active');
    }
}

function showNotification(ruText, enText) {
    const lang = localStorage.getItem('siteLanguage') || 'en';
    const text = lang === 'ru' ? ruText : enText;
    
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = text;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #000;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 10000;
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Чистый авто-слайдер с плавными переходами
const CleanCaseSlider = {
  currentSlide: 0,
  slides: [],
  autoPlayInterval: null,
  isPaused: false,
  isAnimating: false,

  init() {
      console.log('Инициализация слайдера...');
      this.slides = document.querySelectorAll('.case-slide');
      
      console.log('Найдено слайдов:', this.slides.length);
      
      if (this.slides.length === 0) {
          console.log('Слайдер не найден - проверьте HTML структуру');
          return;
      }
      
      // Показываем первый слайд
      this.slides[0].classList.add('active');
      
      this.setupEventListeners();
      this.startAutoPlay();
      this.updateIndicator();
  },

  setupEventListeners() {
      // Пауза при наведении
      const slider = document.querySelector('.cases-slider');
      if (slider) {
          slider.addEventListener('mouseenter', () => this.pauseAutoPlay());
          slider.addEventListener('mouseleave', () => this.resumeAutoPlay());
          
          // Обработчик кликов на карточку
          slider.addEventListener('click', (e) => {
              // Игнорируем клики по индикатору
              if (!e.target.closest('.slider-indicator') && !this.isAnimating) {
                  this.nextSlide();
              }
          });
      }
      
      // Поддержка клавиатуры
      document.addEventListener('keydown', (e) => {
          if (this.isAnimating) return;
          if (e.key === 'ArrowLeft') this.prevSlide();
          if (e.key === 'ArrowRight' || e.key === ' ') this.nextSlide();
      });
      
      // Swipe для мобильных
      this.setupSwipe();
  },

  setupSwipe() {
      let startX = 0;
      let endX = 0;
      
      const slider = document.querySelector('.cases-slider');
      if (!slider) return;
      
      slider.addEventListener('touchstart', (e) => {
          if (this.isAnimating) return;
          startX = e.touches[0].clientX;
          this.pauseAutoPlay();
      });
      
      slider.addEventListener('touchend', (e) => {
          if (this.isAnimating) return;
          endX = e.changedTouches[0].clientX;
          this.handleSwipe(startX, endX);
          setTimeout(() => this.resumeAutoPlay(), 3000);
      });
  },

  handleSwipe(startX, endX) {
      const diff = startX - endX;
      const swipeThreshold = 50;
      
      if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
              this.nextSlide();
          } else {
              this.prevSlide();
          }
      }
  },

  nextSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      
      const currentSlide = this.slides[this.currentSlide];
      currentSlide.classList.remove('active');
      
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      
      setTimeout(() => {
          const nextSlide = this.slides[this.currentSlide];
          nextSlide.classList.add('active');
          this.updateIndicator();
          this.isAnimating = false;
      }, 300);
  },

  prevSlide() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      
      const currentSlide = this.slides[this.currentSlide];
      currentSlide.classList.remove('active');
      
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      
      setTimeout(() => {
          const prevSlide = this.slides[this.currentSlide];
          prevSlide.classList.add('active');
          this.updateIndicator();
          this.isAnimating = false;
      }, 300);
  },

  goToSlide(index) {
      if (this.isAnimating || index === this.currentSlide) return;
      this.isAnimating = true;
      
      const currentSlide = this.slides[this.currentSlide];
      currentSlide.classList.remove('active');
      
      this.currentSlide = index;
      
      setTimeout(() => {
          const targetSlide = this.slides[this.currentSlide];
          targetSlide.classList.add('active');
          this.updateIndicator();
          this.isAnimating = false;
      }, 300);
  },

  updateIndicator() {
      const dots = document.querySelectorAll('.indicator-dot');
      const currentNumber = document.querySelector('.current-number');
      
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === this.currentSlide);
      });
      
      if (currentNumber) {
          currentNumber.textContent = this.currentSlide + 1;
      }
  },

  startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
          if (!this.isPaused && !this.isAnimating) {
              this.nextSlide();
          }
      }, 6000);
  },

  pauseAutoPlay() {
      this.isPaused = true;
  },

  resumeAutoPlay() {
      this.isPaused = false;
  },

  resetAutoPlay() {
      if (this.autoPlayInterval) {
          clearInterval(this.autoPlayInterval);
      }
      this.startAutoPlay();
  }
};
