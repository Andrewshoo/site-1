// Общие данные и переводы
const translations = {
    ru: {
        header: "Вдумчивый, индивидуальный, эффективный подход к покупке и продаже самолётов.",
        description: `<p>В мире нейросетей, автоматизации, воронок продаж даже такое сокровенное и редкое событие, как покупку самолёта, многие пытаются поставить на шаблонные рельсы, поручить алгоритмам и максимально подогнать под какой-то общий стандарт – потому что «так положено». Но самолёт покупают незаурядные люди, и у каждого из них есть свои мечты, свой характер, свои правила и принципы.</p>
        <p class="descr-p-ru">И вы, те редкие и уникальные люди, которые задумываются о покупке самолёта или уже стали владельцем, точно добились этого не потому, что слушали «как положено» – а потому что прокладывали свой путь.</p>
        <p class="descr-p-ru">Поэтому, получив разносторонний опыт в отрасли, полетав на множестве разных джетов и успешно закрыв достаточное количество изощрённых сделок, я решил отбросить все шаблоны и подойти к делу так, как оно и замышлялось изначально: лично и внимательно разбираясь в нюансах каждого покупателя, а затем приступая к поиску индивидуального, максимально подходящего решения.</p>`,
        signature: "Иван Веретенников",
        projects: "Текущие проекты",
        sale: "Продажа",
        purchase: "Покупка",
        copyright: "UPCAST By Ivan Veretennikov",
        telegramTitle: "Telegram",
        whatsappTitle: "WhatsApp",
        emailTitle: "Написать email",
        carouselTitle: "Избранные статьи",
        viewAll: "Все статьи",
        articlesHeader: "Статьи и аналитика"
    },
    en: {
        header: "Thoughtful, individual, human approach to buying and selling business aircraft.",
        description: `<p>In my first career as a journalist, I became something like the Nabokov of business aviation – that is, the only Russian I'm aware of to be published in leading international publications and well-known to the English-speaking world. I interviewed top businessmen and celebrities, spoke at conferences, and even published JetBook, the first-of-a-kind app for mobiles and tablets.</p>
        <p class="descr-p-en">With that experience, I went on to join what became a very successful aircraft sales company and learnt all aspects of the trade: intricacies of cross-border transactions, key things to look for in a business jet, the emotions that really guide buyers and sellers. I also got a pilot licence for the Robinson R44 and R66 – I strongly recommend learning to fly to anyone who gets the opportunity, much like buying an aircraft. There's not a single disadvantage to doing it!</p>
        <p class="descr-p-en">Now I'm out to start my own aircraft brokerage. In a world seeking to automate and outsource to AI, I think buying and selling business jets remains a very individual, human, and personal experience. And anyone who reaches this point in their life deserves special treatment. That's why I approach every conversation with an open mind and take the time to really understand each situation and request, rather than using mass-market generalisations to push a client into some "standard solution". You're not standard if you're buying or selling an airplane!</p>`,
        signature: "Ivan Veretennikov",
        projects: "Currently working on",
        sale: "Offering for Sale",
        purchase: "Looking to Buy",
        copyright: "UPCAST By Ivan Veretennikov",
        telegramTitle: "Telegram",
        whatsappTitle: "WhatsApp",
        emailTitle: "Email us",
        carouselTitle: "Featured Articles",
        viewAll: "View All Articles",
        articlesHeader: "Articles and Insights"
    }
};

// Функции для работы с языком
function applyTranslations(lang) {
    const langData = translations[lang] || translations['en'];
    const elements = {
        '.header-text': el => el.textContent = langData.header,
        '.description p': el => el.innerHTML = langData.description.replace(/\n/g, '<br>'),
        '.sign': el => el.textContent = langData.signature,
        '.aircraft-section h2': el => el.textContent = langData.projects,
        '.aircraft-column h3:first-child': el => el.textContent = langData.sale,
        '.aircraft-column h3:last-child': el => el.textContent = langData.purchase,
        '#carousel-title': el => el.textContent = langData.carouselTitle,
        '#view-all-link': el => el.textContent = langData.viewAll,
        '#articles-header': el => el.textContent = langData.articlesHeader
    };

    Object.entries(elements).forEach(([selector, action]) => {
        const element = document.querySelector(selector);
        if (element) action(element);
    });

    // Обновляем title атрибуты
    const icons = document.querySelectorAll('.contact-icons a');
    if (icons[0]) icons[0].setAttribute('title', langData.telegramTitle);
    if (icons[1]) icons[1].setAttribute('title', langData.whatsappTitle);
    if (icons[2]) icons[2].setAttribute('title', langData.emailTitle);
}

function switchLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('siteLanguage', lang);
    applyTranslations(lang);
    updateHreflangTags(lang);
    
    // Если есть карусель, перезагружаем ее
    if (document.getElementById('carousel-track')) {
        initCarousel();
    }
    
    // Если это страница статей, перезагружаем статьи
    if (document.getElementById('articles-container')) {
        loadArticles(lang);
    }
}

function updateHreflangTags(lang) {
    const ruLink = document.querySelector('link[hreflang="ru"]');
    const enLink = document.querySelector('link[hreflang="en"]');
    
    if (ruLink && enLink) {
        const baseUrl = window.location.href.split('?')[0];
        ruLink.href = baseUrl + (lang === 'ru' ? '' : '?lang=ru');
        enLink.href = baseUrl + (lang === 'en' ? '' : '?lang=en');
    }
}

// Функции для карусели
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track || !dotsContainer) return;

    const lang = document.documentElement.lang || 'en';
    const articles = window.articlesData?.[lang] || [];
    
    track.innerHTML = '';
    dotsContainer.innerHTML = '';

    articles.forEach((article, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <a href="${article.link}">
                <div class="carousel-image">
                    <img src="${article.image}" alt="${article.title}">
                </div>
                <h3 class="carousel-title">${article.title}</h3>
                <p class="carousel-excerpt">${article.excerpt}</p>
            </a>
        `;
        track.appendChild(item);

        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        if (items.length === 0) return;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        resetTimer();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    let timer;
    function startTimer() {
        if (items.length > 1) timer = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    if (items.length > 0) {
        updateCarousel();
        startTimer();
        track.addEventListener('mouseenter', () => clearInterval(timer));
        track.addEventListener('mouseleave', startTimer);
    }
}

// Функция для загрузки статей
function loadArticles(lang) {
    const container = document.getElementById('articles-container');
    if (!container) return;

    const articles = window.articlesData?.[lang] || [];
    container.innerHTML = '';

    articles.forEach(article => {
        const articleEl = document.createElement('div');
        articleEl.className = 'article-card';
        articleEl.innerHTML = `
            <a href="${article.link}">
                <div class="article-image">
                    <img src="${article.image}" alt="${article.title}">
                </div>
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <span class="read-more">${lang === 'ru' ? 'Читать далее →' : 'Read more →'}</span>
                </div>
            </a>
        `;
        container.appendChild(articleEl);
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const savedLang = localStorage.getItem('siteLanguage');
    const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
    
    const activeLang = langParam || savedLang || browserLang;
    switchLanguage(activeLang);
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