// Тексты для разных языков
const translations = {
    ru: {
        header: "Вдумчивый, индивидуальный, эффективный подход к покупке и продаже самолётов.",
        description: "В мире нейросетей, автоматизации, воронок продаж даже такое сокровенное и редкое событие, как покупку самолёта, многие пытаются поставить на шаблонные рельсы, поручить алгоритмам и максимально подогнать под какой-то общий стандарт – потому что «так положено». Но самолёт покупают незаурядные люди, и у каждого из них есть свои мечты, свой характер, свои правила и принципы. И вы, те редкие и уникальные люди, которые задумываются о покупке самолёта или уже стали владельцем, точно добились этого не потому, что слушали «как положено» – а потому что прокладывали свой путь. Поэтому, получив разносторонний опыт в отрасли, полетав на множестве разных джетов и успешно закрыв достаточное количество изощрённых сделок, я решил отбросить все шаблоны и подойти к делу так, как оно и замышлялось изначально: лично и внимательно разбираясь в нюансах каждого покупателя, а затем приступая к поиску индивидуального, максимально подходящего решения.",
        signature: "Иван Веретенников",
        projects: "Текущие проекты",
        sale: "Продажа",
        purchase: "Покупка",
        copyright: "UPCAST By Ivan Veretennikov",
        telegramTitle: "Telegram",
        whatsappTitle: "WhatsApp",
        emailTitle: "Написать email",
        blog: "Блог",
        page: "Страница",
        of: "из",
        loadingPdf: "Загрузка PDF...",
        downloadOriginal: "Скачать оригинал",
        pdfError: "Ошибка загрузки PDF",
        downloadFile: "Скачать файл"
    },
    en: {
        header: "Thoughtful, individual, human approach to buying and selling business aircraft.",
        description: "<p>In my first career as a journalist, I became something like the Nabokov of business aviation – that is, the only Russian I'm aware of to be published in leading international publications and well-known to the English-speaking world. I interviewed top businessmen and celebrities, spoke at conferences, and even published JetBook, the first-of-a-kind app for mobiles and tablets. With that experience, I went on to join what became a very successful aircraft sales company and learnt all aspects of the trade: intricacies of cross-border transactions, key things to look for in a business jet, the emotions that really guide buyers and sellers. I also got a pilot licence for the Robinson R44 and R66 – I strongly recommend learning to fly to anyone who gets the opportunity, much like buying an aircraft. There's not a single disadvantage to doing it!</p>Now I'm out to start my own aircraft brokerage. In a world seeking to automate and outsource to AI, I think buying and selling business jets remains a very individual, human, and personal experience. And anyone who reaches this point in their life deserves special treatment. That's why I approach every conversation with an open mind and take the time to really understand each situation and request, rather than using mass-market generalisations to push a client into some 'standard solution'. You're not standard if you're buying or selling an airplane! <p></P>",
        signature: "Ivan Veretennikov",
        projects: "Currently working on",
        sale: "Offering for Sale",
        purchase: "Looking to Buy",
        copyright: "UPCAST By Ivan Veretennikov",
        telegramTitle: "Telegram",
        whatsappTitle: "WhatsApp",
        emailTitle: "Email us",
        blog: "Blog",
        page: "Page",
        of: "of",
        loadingPdf: "Loading PDF...",
        downloadOriginal: "Download original",
        pdfError: "PDF loading error",
        downloadFile: "Download file"
    }
};

// Данные статей
const articlesData = {
    ru: [
        {
            id: 1,
            title: "Как выбрать бизнес-джет",
            image: "images/blog1.jpg",
            excerpt: "В этой статье мы рассмотрим ключевые факторы, которые следует учитывать при выборе бизнес-джета для ваших нужд.",
            content: "<h2>Как выбрать бизнес-джет</h2><p>Выбор бизнес-джета - это сложный процесс, который требует учета множества факторов. В этой статье мы рассмотрим основные аспекты, на которые стоит обратить внимание.</p><p>Первое, что нужно определить - это ваши типичные маршруты. Дальность полета, количество пассажиров и необходимый комфорт - все это влияет на выбор модели.</p><p>Не менее важным является бюджет, как на покупку, так и на эксплуатацию. Некоторые модели могут быть дешевле в приобретении, но дороже в обслуживании.</p>",
            author: "Иван Веретенников",
            date: "15 мая 2023"
        },
        {
            id: 2,
            title: "Тенденции рынка бизнес-авиации",
            image: "images/blog2.jpg",
            excerpt: "Анализ текущих тенденций на рынке бизнес-авиации и прогноз на ближайшие годы.",
            content: "<h2>Тенденции рынка бизнес-авиации</h2><p>Рынок бизнес-авиации постоянно меняется, и в 2023 году мы наблюдаем несколько ключевых тенденций.</p><p>Во-первых, растет спрос на более экологичные решения. Производители активно работают над снижением выбросов и повышением эффективности.</p><p>Во-вторых, увеличивается популярность сервисов фракционного владения, что делает бизнес-авиацию доступнее для более широкого круга клиентов.</p>",
            author: "Иван Веретенников",
            date: "3 июня 2023"
        },
        {
            id: 3,
            title: "Руководство по покупке самолета (PDF)",
            image: "images/pdf-icon.jpg",
            excerpt: "Полное руководство по покупке бизнес-джета в формате PDF.",
            isPDF: true,
            file: "docs/Buyers-pay-brokers-pres.pdf",
            author: "Иван Веретенников",
            date: "10 июля 2023"
        },
        {
            id: 4,
            title: "Техническое обслуживание самолетов",
            image: "images/blog3.jpg",
            excerpt: "Все о регулярном техническом обслуживании бизнес-джетов.",
            content: "<h2>Техническое обслуживание самолетов</h2><p>Регулярное техническое обслуживание - залог безопасной эксплуатации вашего бизнес-джета.</p><p>В статье рассмотрены основные виды обслуживания, рекомендуемые интервалы и ключевые аспекты, на которые стоит обратить внимание.</p>",
            author: "Иван Веретенников",
            date: "25 августа 2023"
        }
    ],
    en: [
        {
            id: 1,
            title: "How to Choose a Business Jet",
            image: "images/blog1.jpg",
            excerpt: "This article covers the key factors to consider when selecting a business jet for your needs.",
            content: "<h2>How to Choose a Business Jet</h2><p>Choosing a business jet is a complex process that requires considering many factors. In this article, we'll look at the main aspects to pay attention to.</p><p>The first thing to determine is your typical routes. Flight range, number of passengers, and required comfort all influence the choice of model.</p><p>Equally important is the budget, both for purchase and operation. Some models may be cheaper to buy but more expensive to maintain.</p>",
            author: "Ivan Veretennikov",
            date: "May 15, 2023"
        },
        {
            id: 2,
            title: "Business Aviation Market Trends",
            image: "images/blog2.jpg",
            excerpt: "Analysis of current trends in the business aviation market and forecast for the coming years.",
            content: "<h2>Business Aviation Market Trends</h2><p>The business aviation market is constantly changing, and in 2023 we are seeing several key trends.</p><p>First, there is growing demand for more environmentally friendly solutions. Manufacturers are actively working to reduce emissions and increase efficiency.</p><p>Second, fractional ownership services are becoming increasingly popular, making business aviation more accessible to a wider range of clients.</p>",
            author: "Ivan Veretennikov",
            date: "June 3, 2023"
        },
        {
            id: 3,
            title: "Aircraft Buying Guide (PDF)",
            image: "images/pdf-icon.jpg",
            excerpt: "Complete business jet buying guide in PDF format.",
            isPDF: true,
            file: "docs/Buyers-pay-brokers-pres.pdf",
            author: "Ivan Veretennikov",
            date: "July 10, 2023"
        },
        {
            id: 4,
            title: "Aircraft Maintenance",
            image: "images/blog3.jpg",
            excerpt: "Everything about regular business jet maintenance.",
            content: "<h2>Aircraft Maintenance</h2><p>Regular maintenance is the key to safe operation of your business jet.</p><p>The article covers main maintenance types, recommended intervals and key aspects to pay attention to.</p>",
            author: "Ivan Veretennikov",
            date: "August 25, 2023"
        }
    ]
};

// Глобальные переменные для пагинации
let currentBlogPage = 1;
const articlesPerPage = 2;
let pdfDocument = null;
let currentPdfPage = 1;

// Функция для переключения языка
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('siteLanguage', lang);
    applyTranslations(lang);
    updateHreflangTags(lang);
}

function updateHreflangTags(lang) {
    const baseUrl = 'https://andrewshoo.github.io/site-1/';
    document.querySelector('link[hreflang="ru"]').href = baseUrl + (lang === 'ru' ? '' : '?lang=ru');
    document.querySelector('link[hreflang="en"]').href = baseUrl + (lang === 'en' ? '' : '?lang=en');
}

// Применение переводов
function applyTranslations(lang) {
    const langData = translations[lang] || translations['en'];
    
    document.querySelector('.header-text').textContent = langData.header;
    document.querySelector('.description p').innerHTML = langData.description.replace(/\n/g, '<br>');
    document.querySelector('.sign').textContent = langData.signature;
    document.querySelector('.aircraft-section h2').textContent = langData.projects;
    document.querySelectorAll('.aircraft-column h3')[0].textContent = langData.sale;
    document.querySelectorAll('.aircraft-column h3')[1].textContent = langData.purchase;
    document.querySelector('.blog-section h2').textContent = langData.blog;
    
    // Обновляем title атрибуты
    const icons = document.querySelectorAll('.contact-icons a');
    icons[0].setAttribute('title', langData.telegramTitle);
    icons[1].setAttribute('title', langData.whatsappTitle);
    icons[2].setAttribute('title', langData.emailTitle);
    
    // Рендерим статьи
    renderArticles(lang);
}

// Функция для отображения статей с пагинацией
function renderArticles(lang) {
    const articlesContainer = document.getElementById('articles-container');
    const articles = articlesData[lang] || articlesData['en'];
    const startIndex = (currentBlogPage - 1) * articlesPerPage;
    const paginatedArticles = articles.slice(startIndex, startIndex + articlesPerPage);
    
    articlesContainer.innerHTML = '';
    
    paginatedArticles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article-card';
        
        if (article.isPDF) {
            articleElement.innerHTML = `
                <div class="pdf-thumbnail">
                    <i class="fas fa-file-pdf"></i>
                    <span>PDF</span>
                </div>
                <div class="article-info">
                    <h3 class="article-title">${article.title}</h3>
                    <div class="article-meta">
                        <span>${article.author}</span>
                        <span>${article.date}</span>
                    </div>
                    <p class="article-excerpt">${article.excerpt}</p>
                </div>
            `;
        } else {
            articleElement.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-info">
                    <h3 class="article-title">${article.title}</h3>
                    <div class="article-meta">
                        <span>${article.author}</span>
                        <span>${article.date}</span>
                    </div>
                    <p class="article-excerpt">${article.excerpt}</p>
                </div>
            `;
        }
        
        articleElement.addEventListener('click', () => openArticleModal(article));
        articlesContainer.appendChild(articleElement);
    });
    
    // Обновление пагинации
    updatePagination(articles.length, lang);
}

// Обновление пагинации блога
function updatePagination(totalArticles, lang) {
    const totalPages = Math.ceil(totalArticles / articlesPerPage);
    const langData = translations[lang] || translations['en'];
    
    document.getElementById('page-info').textContent = 
        `${langData.page} ${currentBlogPage} ${langData.of} ${totalPages}`;
    
    document.getElementById('prev-page').disabled = currentBlogPage === 1;
    document.getElementById('next-page').disabled = currentBlogPage === totalPages;
}

// Функция для открытия модального окна с статьей
async function openArticleModal(article) {
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    const langData = translations[document.documentElement.lang] || translations['en'];
    
    modalBody.innerHTML = `
        <div class="modal-loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>${langData.loadingPdf}</p>
        </div>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (article.isPDF) {
        try {
            // Инициализация PDF.js
            const loadingTask = pdfjsLib.getDocument(article.file);
            pdfDocument = await loadingTask.promise;
            currentPdfPage = 1;
            
            // Создаем контейнер для просмотра
            modalBody.innerHTML = `
                <div class="pdf-viewer-container">
                    <div class="pdf-controls">
                        <button id="prev-pdf-page" disabled><i class="fas fa-chevron-left"></i></button>
                        <span>${langData.page} <span id="pdf-page-num">1</span> ${langData.of} ${pdfDocument.numPages}</span>
                        <button id="next-pdf-page" ${pdfDocument.numPages <= 1 ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <canvas id="pdf-canvas"></canvas>
                    <div class="pdf-actions">
                        <a href="${article.file}" download class="download-pdf">
                            <i class="fas fa-download"></i> ${langData.downloadOriginal}
                        </a>
                    </div>
                </div>
            `;

            // Настройка рендеринга
            const canvas = document.getElementById('pdf-canvas');
            const ctx = canvas.getContext('2d');

            // Функция рендеринга страницы
            async function renderPdfPage(pageNum) {
                const page = await pdfDocument.getPage(pageNum);
                const viewport = page.getViewport({ scale: 1.5 });
                
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                
                await page.render({
                    canvasContext: ctx,
                    viewport: viewport
                }).promise;
                
                document.getElementById('pdf-page-num').textContent = pageNum;
                document.getElementById('prev-pdf-page').disabled = pageNum <= 1;
                document.getElementById('next-pdf-page').disabled = pageNum >= pdfDocument.numPages;
            }

            // Первый рендер
            await renderPdfPage(currentPdfPage);

            // Навигация по страницам PDF
            document.getElementById('prev-pdf-page').addEventListener('click', async () => {
                if (currentPdfPage > 1) {
                    currentPdfPage--;
                    await renderPdfPage(currentPdfPage);
                }
            });

            document.getElementById('next-pdf-page').addEventListener('click', async () => {
                if (currentPdfPage < pdfDocument.numPages) {
                    currentPdfPage++;
                    await renderPdfPage(currentPdfPage);
                }
            });

        } catch (error) {
            console.error("PDF loading error:", error);
            modalBody.innerHTML = `
                <div class="modal-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>${langData.pdfError}</p>
                    <a href="${article.file}" download>${langData.downloadFile}</a>
                </div>
            `;
        }
    } else {
        // Обычная статья
        modalBody.innerHTML = `
            <div class="modal-meta">
                <span>${article.author}</span>
                <span>${article.date}</span>
            </div>
            <h2>${article.title}</h2>
            ${article.content}
        `;
    }
}

// Функция для закрытия модального окна
function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    pdfDocument = null;
}

// Обработчики событий
document.querySelector('.close-modal').addEventListener('click', closeArticleModal);
document.getElementById('article-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('article-modal')) {
        closeArticleModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticleModal();
    }
});

// Навигация по страницам блога
document.getElementById('prev-page').addEventListener('click', () => {
    currentBlogPage--;
    renderArticles(document.documentElement.lang);
});

document.getElementById('next-page').addEventListener('click', () => {
    currentBlogPage++;
    renderArticles(document.documentElement.lang);
});

// Контактные функции
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

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const savedLang = localStorage.getItem('siteLanguage');
    const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
    
    const activeLang = langParam || savedLang || browserLang;
    switchLanguage(activeLang);
});