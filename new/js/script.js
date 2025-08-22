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
    publicationsTitle: "Публикации — глубокий взгляд на мир бизнес-авиации",
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
    publicationsTitle: "Publications — deep insights into business aviation",
    publicationsIntro: "Expert articles and analytics from a professional with 18 years of aviation experience",
    readArticle: "Read article",
    readTime: "min read"
  }
};

// Функция для переключения языка
function switchLanguage(lang) {
  // Сохраняем выбранный язык
  localStorage.setItem('siteLanguage', lang);
  
  // Применяем переводы
  applyTranslations(lang);
  
  // Обновляем URL без перезагрузки страницы
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.pushState({}, '', url);
}

// Функции для бургер-меню
function initBurgerMenu() {
    const burgerIcon = document.getElementById('burgerIcon');
    const burgerNav = document.getElementById('burgerNav');
    const burgerOverlay = document.getElementById('burgerOverlay');
    
    if (burgerIcon && burgerNav && burgerOverlay) {
        // Открытие/закрытие меню
        burgerIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Закрытие меню при клике на оверлей
        burgerOverlay.addEventListener('click', function() {
            closeMenu();
        });
        
        // Закрытие меню при клике на ссылку (кроме внешних)
        const navLinks = burgerNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Для внутренних ссылок (без onclick или с определенными обработчиками)
                if (this.hasAttribute('onclick')) {
                    const onclickAttr = this.getAttribute('onclick');
                    // Если это вызов функции для Telegram, WhatsApp или Email
                    if (onclickAttr.includes('openEncodedLink') || 
                        onclickAttr.includes('openWA') || 
                        onclickAttr.includes('sendEmail')) {
                        e.preventDefault();
                        closeMenuWithDelay();
                        // Выполняем действие из onclick
                        eval(onclickAttr);
                    }
                    // Для других случаев с onclick позволяем стандартное поведение
                } else {
                    // Для обычных внутренних ссылок закрываем меню с задержкой
                    closeMenuWithDelay();
                }
            });
        });
        
        // Закрытие меню при клике вне его области
        document.addEventListener('click', function(event) {
            if (!burgerNav.contains(event.target) && !burgerIcon.contains(event.target) && burgerNav.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Предотвращаем закрытие при клике внутри меню
        burgerNav.addEventListener('click', function(event) {
            event.stopPropagation();
        });
        
        // Функции для управления меню
        function toggleMenu() {
            burgerIcon.classList.toggle('active');
            burgerNav.classList.toggle('active');
            burgerOverlay.classList.toggle('active');
        }
        
        function closeMenu() {
            burgerIcon.classList.remove('active');
            burgerNav.classList.remove('active');
            burgerOverlay.classList.remove('active');
        }
        
        function closeMenuWithDelay() {
            setTimeout(() => {
                closeMenu();
            }, 300);
        }
    }
}

// Функция для применения переводов
function applyTranslations(lang) {
  const langData = translations[lang] || translations['en'];
  
  // Обновляем тексты
  if (document.querySelector('.header-text')) {
    document.querySelector('.header-text').textContent = langData.header;
  }
  
  if (document.querySelector('.description')) {
    document.querySelector('.description').innerHTML = langData.description;
  }
  
  if (document.querySelector('.sign')) {
    document.querySelector('.sign').textContent = langData.signature;
  }
  
  if (document.querySelector('.aircraft-section h2')) {
    document.querySelector('.aircraft-section h2').textContent = langData.projects;
  }
  
  const aircraftTitles = document.querySelectorAll('.aircraft-column h3');
  if (aircraftTitles.length > 0) {
    aircraftTitles[0].textContent = langData.sale;
    if (aircraftTitles[1]) {
      aircraftTitles[1].textContent = langData.purchase;
    }
  }

   const publicationTitle = document.querySelector('.header-text');
  if (publicationTitle && publicationTitle.getAttribute('data-lang')) {
    publicationTitle.textContent = langData.publicationsTitle;
  }

  // Обновляем навигацию в бургер-меню
    const navLinks = document.querySelectorAll('.burger-nav a[data-lang]');
    navLinks.forEach(link => {
        if (link.getAttribute('data-lang') === lang) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });

    const menuTexts = document.querySelectorAll('.menu-list span[data-lang]');
    menuTexts.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'inline';
        } else {
            element.style.display = 'none';
        }
    });
  
  // Обновляем title атрибуты
  const icons = document.querySelectorAll('.contact-icons a');
  if (icons.length > 0) {
    icons[0].setAttribute('title', langData.telegramTitle);
    icons[1].setAttribute('title', langData.whatsappTitle);
    icons[2].setAttribute('title', langData.emailTitle);
  }

  // Обновляем публикации
  const pubTitles = document.querySelectorAll('.articles-section h2');
  if (pubTitles.length > 0) {
    pubTitles.forEach(title => {
      if (title.getAttribute('data-lang') === lang) {
        title.style.display = 'block';
      } else {
        title.style.display = 'none';
      }
    });
  }

  // Обновляем активное состояние кнопок
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  // Скрываем/показываем элементы с data-lang
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.tagName !== 'H2') { // Исключаем заголовки, которые обрабатываются отдельно
      el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    }
  });

  // Обновляем ссылки "Читать далее"
  document.querySelectorAll('.read-more').forEach(link => {
    if (link.getAttribute('data-lang') === lang) {
      link.style.display = 'inline-block';
    } else {
      link.style.display = 'none';
    }
  });

  // Устанавливаем язык документа
  document.documentElement.lang = lang;
}

// Обновим инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    switchLanguage(lang);
    initBurgerMenu(); // Инициализируем бургер-меню
});

// Функция для определения языка
function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const savedLang = localStorage.getItem('siteLanguage');
  const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
  
  return langParam || savedLang || browserLang;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  switchLanguage(lang);
});

// Функции для контактов
function openEncodedLink() {
  const encoded = 'aHR0cHM6Ly90Lm1lL2l2amV0';
  const url = atob(encoded);
  window.open(url, '_blank');
}

function openWA() {
  const encoded = 'NzkwMzY2NjE1MTM=';
  const phone = atob(encoded);
  window.open(`https://wa.me/${phone}`, '_blank');
}

function sendEmail() {
  window.location.href = "mailto:ivan@upcast.pro";
}