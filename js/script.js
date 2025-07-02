// Инициализация PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

// Состояние приложения
const appState = {
    currentBlogPage: 1,
    articlesPerPage: 2,
    pdf: {
        doc: null,
        currentPage: 1,
        pages: [],
        isFullscreen: false
    }
};

// Переводы
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
        downloadFile: "Скачать файл",
        prevPage: "Предыдущая",
        nextPage: "Следующая",
        fullscreen: "На весь экран",
        exitFullscreen: "Выйти из полноэкранного режима"
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
        downloadFile: "Download file",
        prevPage: "Previous",
        nextPage: "Next",
        fullscreen: "Fullscreen",
        exitFullscreen: "Exit fullscreen"
    }
};

// Данные статей
const articlesData = {
    ru: [
            {
            "id": 1,
            "title": "Продажа самолетов: премиальный выбор для требовательных покупателей",
            "image": "images/background.jpg",
            "excerpt": "Авиационная индустрия предоставляет уникальные возможности для бизнеса и частных лиц, желающих приобрести высокопроизводительные воздушные суда.",
            "content": "<h2>Почему стоит купить самолет?</h2><p>Владение воздушным судном дает неоспоримые преимущества:</p><ul><li><strong>Экономия времени</strong> - Избегайте расписания коммерческих рейсов и значительно сокращайте время в пути</li><li><strong>Конфиденциальность и комфорт</strong> - Персонализированные салоны, премиальные удобства и эксклюзивные условия перелетов</li><li><strong>Гибкость для бизнеса</strong> - Посещайте несколько городов в один день, повышая продуктивность и расширяя деловые возможности</li><li><strong>Контроль расходов</strong> - Для частых перелетов владение может быть экономичнее чартера в долгосрочной перспективе</li></ul><h2>Доступные категории самолетов</h2><ul><li><strong>Бизнес-джеты</strong> - Идеальны для корпоративных и частных перелетов. Модели <em>Gulfstream G650</em>, <em>Bombardier Global 7500</em> и <em>Dassault Falcon 8X</em> предлагают межконтинентальную дальность, передовую авионику и роскошные салоны</li><li><strong>Турбовинтовые</strong> - Экономичные и универсальные, идеальны для региональных перелетов. <em>Pilatus PC-12</em> и <em>King Air 350i</em> сочетают производительность с низкими эксплуатационными расходами</li><li><strong>Коммерческие авиалайнеры</strong> - Для авиакомпаний и лизинговых компаний доступны <em>Boeing 737 MAX</em> и <em>Airbus A320neo</em>, известные топливной эффективностью</li><li><strong>Б/у самолеты</strong> - Поддержанные самолеты в отличном состоянии предлагают отличное соотношение цены и качества</li></ul><h2>Кастомизация и поддержка</h2><p>Покупатели могут адаптировать самолет под свои нужды, включая планировку салона, развлекательные системы и брендирование. Кроме того, мы предоставляем:</p><ul><li><strong>Техническое обслуживание и инспекции</strong> - Гарантия исправности и соответствия авиационным нормам</li><li><strong>Финансирование и лизинг</strong> - Гибкие условия покупки и аренды для любого бюджета</li><li><strong>Логистическая поддержка</strong> - Помощь в регистрации, страховании и обучении экипажа</li></ul><h2>Рыночные тренды</h2><p>Рынок продажи самолетов остается динамичным с растущим спросом на топливоэффективные и экологичные модели. Б/у самолеты особенно привлекательны благодаря медленной амортизации. Развивающиеся рынки Азии и Ближнего Востока стимулируют рост частной авиации.</p><h2>Процесс покупки</h2><p>Приобретение самолета включает несколько этапов:</p><ol><li><strong>Определение требований</strong> - Выбор типа самолета, бюджета и условий эксплуатации</li><li><strong>Консультация экспертов</strong> - Работа с брокерами и юристами</li><li><strong>Осмотр и тестовый полет</strong> - Проверка состояния и летных характеристик</li><li><strong>Оформление документов</strong> - Соблюдение международных авиационных норм и получение финансирования</li></ol><h2>Рекомендуемые модели</h2><ul><li><strong>Gulfstream G550</strong> - Бизнес-джет сверхдальнего радиуса, малый налет, отличное состояние. Цена: $14.5 млн</li><li><strong>Cessna Citation XLS+</strong> - Средний реактивный самолет, высокая топливная эффективность, вместимость 8 пассажиров. Цена: $4.2 млн</li><li><strong>Embraer Phenom 300E</strong> - Легкий джет с современной авионикой, идеален для коротких маршрутов. Цена: $9.8 млн</li><li><strong>Boeing BBJ 737-700</strong> - VIP-версия авиалайнера, просторный салон, межконтинентальная дальность. Цена: $32 млн</li></ul><h2>Дополнительные услуги</h2><ul><li><strong>Управление воздушным судном</strong> - Полный сервис по обслуживанию и эксплуатации</li><li><strong>Чартерные решения</strong> - Возможность сдачи в аренду в периоды простоя</li><li><strong>Модернизация</strong> - Обновление авионики и интерьеров</li></ul><h2>Заключение</h2><p>Правильно подобранный самолет меняет представление о путешествиях, предлагая скорость, комфорт и надежность. Наши специалисты обеспечат плавный процесс приобретения от выбора до поставки.</p><p>Свяжитесь с нами для консультации или осмотра самолетов.</p>",
            "author": "Команда Aviation Sales",
            "date": "15 ноября 2023"
        },
        {
            id: 2,
            title: "Тенденции рынка бизнес-авиации",
            image: "images/background.jpg",
            excerpt: "Анализ текущих тенденций на рынке бизнес-авиации и прогноз на ближайшие годы.",
            content: "<h2>Тенденции рынка бизнес-авиации</h2><p>Рынок бизнес-авиации постоянно меняется, и в 2023 году мы наблюдаем несколько ключевых тенденций.</p><p>Во-первых, растет спрос на более экологичные решения. Производители активно работают над снижением выбросов и повышением эффективности.</p><p>Во-вторых, увеличивается популярность сервисов фракционного владения, что делает бизнес-авиацию доступнее для более широкого круга клиентов.</p>",
            author: "Иван Веретенников",
            date: "3 июня 2023"
        }
    ],
    en: [
        {
            "id": 1,
            "title": "Aircraft for Sale: Premium Selection for Discerning Buyers",
            "image": "images/background.jpg",
            "excerpt": "The aviation industry offers unparalleled opportunities for businesses and private individuals seeking to own high-performance aircraft.",
            "content": "<h2>Why Buy an Aircraft?</h2><p>Owning an aircraft provides unmatched advantages:</p><ul><li><strong>Time Efficiency</strong> - Avoid commercial flight schedules and reduce travel time significantly</li><li><strong>Privacy & Comfort</strong> - Enjoy personalized interiors, premium amenities, and exclusive travel experiences</li><li><strong>Business Flexibility</strong> - Reach multiple destinations in a single day, improving productivity and expanding business opportunities</li><li><strong>Cost Control</strong> - For frequent flyers, ownership can be more economical than chartering in the long term</li></ul><h2>Available Aircraft Categories</h2><ul><li><strong>Business Jets</strong> - Ideal for corporate travel and private use. Models like the <em>Gulfstream G650</em>, <em>Bombardier Global 7500</em>, and <em>Dassault Falcon 8X</em> offer transcontinental range, cutting-edge avionics, and luxurious cabins</li><li><strong>Turboprops</strong> - Efficient and versatile, perfect for regional travel. The <em>Pilatus PC-12</em> and <em>King Air 350i</em> combine performance with lower operating costs</li><li><strong>Commercial Airliners</strong> - For airlines and leasing companies, options include the <em>Boeing 737 MAX</em> and <em>Airbus A320neo</em>, known for fuel efficiency and passenger capacity</li><li><strong>Pre-Owned Aircraft</strong> - Well-maintained used jets and turboprops offer excellent value with lower acquisition costs</li></ul><h2>Customization & Support</h2><p>Buyers can tailor their aircraft to specific preferences, including cabin layouts, entertainment systems, and branding. Additionally, reputable sellers provide:</p><ul><li><strong>Maintenance & Inspection Services</strong> - Ensuring airworthiness and compliance with aviation regulations</li><li><strong>Financing & Leasing Solutions</strong> - Flexible payment plans and leasing options to suit different budgets</li><li><strong>Global Logistics Support</strong> - Assistance with registration, insurance, and crew training</li></ul><h2>Market Trends & Investment Potential</h2><p>The aircraft sales market remains dynamic, with increasing demand for fuel-efficient and environmentally friendly models. Pre-owned aircraft are particularly attractive due to their lower depreciation rates. Furthermore, emerging markets in Asia and the Middle East are driving growth in private aviation.</p><h2>How to Purchase</h2><p>Purchasing an aircraft involves several key steps:</p><ol><li><strong>Define Requirements</strong> - Determine the aircraft type, budget, and operational needs</li><li><strong>Consult Experts</strong> - Work with brokers, dealers, and legal advisors to navigate transactions</li><li><strong>Inspect & Test Fly</strong> - Evaluate the aircraft's condition and performance firsthand</li><li><strong>Finalize Documentation</strong> - Ensure compliance with international aviation laws and secure financing</li></ol><h2>Featured Aircraft for Sale</h2><ul><li><strong>Gulfstream G550</strong> - Ultra-long-range business jet, low flight hours, pristine condition. Price: $14.5M</li><li><strong>Cessna Citation XLS+</strong> - Mid-size jet, excellent fuel efficiency, 8-passenger capacity. Price: $4.2M</li><li><strong>Embraer Phenom 300E</strong> - Light jet, advanced avionics, ideal for short-haul trips. Price: $9.8M</li><li><strong>Boeing BBJ 737-700</strong> - VIP-configured airliner, spacious cabin, global range. Price: $32M</li></ul><h2>Additional Services</h2><ul><li><strong>Aircraft Management</strong> - Full-service programs for maintenance, crew hiring, and operational support</li><li><strong>Charter Solutions</strong> - Monetize your aircraft through charter services when not in use</li><li><strong>Upgrades & Refurbishment</strong> - Modernize avionics, interiors, and engines to enhance performance</li></ul><h2>Conclusion</h2><p>Investing in an aircraft is a transformative decision that offers freedom, efficiency, and prestige. With a diverse selection of new and pre-owned models available, buyers can find the perfect aircraft to meet their demands. Partnering with experienced aviation professionals ensures a smooth acquisition process, from selection to delivery.</p><p>Contact us today to schedule a viewing or discuss your aviation needs with our specialists.</p>",
            "author": "Aviation Sales Team",
            "date": "November 15, 2023"
        },
        {
            id: 2,
            title: "Business Aviation Market Trends",
            image: "images/background.jpg",
            excerpt: "Analysis of current trends in the business aviation market and forecast for the coming years.",
            content: "<h2>Business Aviation Market Trends</h2><p>The business aviation market is constantly changing, and in 2023 we are seeing several key trends.</p><p>First, there is growing demand for more environmentally friendly solutions. Manufacturers are actively working to reduce emissions and increase efficiency.</p><p>Second, fractional ownership services are becoming increasingly popular, making business aviation more accessible to a wider range of clients.</p>",
            author: "Ivan Veretennikov",
            date: "June 3, 2023"
        }
    ]
};

// Функция для переключения языка
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('siteLanguage', lang);
    applyTranslations(lang);
    renderArticles(lang);
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
}

// Функция для отображения статей с пагинацией
function renderArticles(lang) {
    const articlesContainer = document.getElementById('articles-container');
    const articles = articlesData[lang] || articlesData['en'];
    const startIndex = (appState.currentBlogPage - 1) * appState.articlesPerPage;
    const paginatedArticles = articles.slice(startIndex, startIndex + appState.articlesPerPage);
    
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
    const totalPages = Math.ceil(totalArticles / appState.articlesPerPage);
    const langData = translations[lang] || translations['en'];
    
    document.getElementById('page-info').textContent = 
        `${langData.page} ${appState.currentBlogPage} ${langData.of} ${totalPages}`;
    
    document.getElementById('prev-page').disabled = appState.currentBlogPage === 1;
    document.getElementById('next-page').disabled = appState.currentBlogPage === totalPages;
}

// Функция для открытия модального окна с статьей
async function openArticleModal(article) {
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    const langData = translations[document.documentElement.lang] || translations['en'];
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    if (article.isPDF) {
        modalBody.innerHTML = `
            <div class="pdf-viewer-container">
                <div class="pdf-header">
                    <h2>${article.title}</h2>
                    <div class="pdf-meta">
                        <span>${article.author}</span>
                        <span>${article.date}</span>
                    </div>
                </div>
                <div class="pdf-loading-indicator">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>${langData.loadingPdf}</p>
                </div>
                <div class="pdf-scroll-container" id="pdf-scroll-container"></div>
                <div class="pdf-nav-buttons">
                    <button class="pdf-nav-button" id="prev-pdf-page" title="${langData.prevPage}">
                        <i class="fas fa-chevron-up"></i>
                    </button>
                    <button class="pdf-nav-button" id="next-pdf-page" title="${langData.nextPage}">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <button class="pdf-nav-button" id="fullscreen-pdf" title="${langData.fullscreen}">
                        <i class="fas fa-expand"></i>
                    </button>
                </div>
                <div class="pdf-actions">
                    <a href="${article.file}" download class="download-pdf">
                        <i class="fas fa-download"></i> ${langData.downloadOriginal}
                    </a>
                </div>
            </div>
        `;

        try {
            const loadingTask = pdfjsLib.getDocument(article.file);
            appState.pdf.doc = await loadingTask.promise;
            await renderAllPdfPages();
            setupPdfNavigation();
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

// Рендеринг всех страниц PDF
async function renderAllPdfPages() {
    const container = document.getElementById('pdf-scroll-container');
    container.innerHTML = '';
    appState.pdf.pages = [];

    for (let i = 1; i <= appState.pdf.doc.numPages; i++) {
        const page = await appState.pdf.doc.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
            canvasContext: context,
            viewport: viewport,
            intent: 'print'
        }).promise;

        const pageContainer = document.createElement('div');
        pageContainer.className = 'pdf-page-container';
        pageContainer.id = `pdf-page-${i}`;
        pageContainer.appendChild(canvas);
        container.appendChild(pageContainer);

        appState.pdf.pages.push({
            element: pageContainer,
            top: pageContainer.offsetTop,
            height: pageContainer.offsetHeight
        });
    }

    // Удаляем индикатор загрузки
    document.querySelector('.pdf-loading-indicator')?.remove();
}

// Настройка навигации по PDF
function setupPdfNavigation() {
    const container = document.getElementById('pdf-scroll-container');
    
    // Кнопки навигации
    document.getElementById('prev-pdf-page').addEventListener('click', () => {
        if (appState.pdf.currentPage > 1) {
            appState.pdf.currentPage--;
            scrollToPdfPage();
        }
    });
    
    document.getElementById('next-pdf-page').addEventListener('click', () => {
        if (appState.pdf.currentPage < appState.pdf.pages.length) {
            appState.pdf.currentPage++;
            scrollToPdfPage();
        }
    });
    
    // Полноэкранный режим
    document.getElementById('fullscreen-pdf').addEventListener('click', toggleFullscreen);
    
    // Обработчик прокрутки
    container.addEventListener('scroll', () => {
        const scrollPosition = container.scrollTop + (container.clientHeight / 2);
        
        for (let i = 0; i < appState.pdf.pages.length; i++) {
            if (scrollPosition >= appState.pdf.pages[i].top && 
                (i === appState.pdf.pages.length - 1 || scrollPosition < appState.pdf.pages[i + 1].top)) {
                if (appState.pdf.currentPage !== i + 1) {
                    appState.pdf.currentPage = i + 1;
                    updatePdfNavButtons();
                }
                break;
            }
        }
    });
    
    // Инициализация первой страницы
    scrollToPdfPage();
}

// Прокрутка к текущей странице PDF
function scrollToPdfPage() {
    const page = appState.pdf.pages[appState.pdf.currentPage - 1];
    if (page) {
        const container = document.getElementById('pdf-scroll-container');
        container.scrollTo({
            top: page.top,
            behavior: 'smooth'
        });
        updatePdfNavButtons();
    }
}

// Обновление кнопок навигации PDF
function updatePdfNavButtons() {
    document.getElementById('prev-pdf-page').disabled = appState.pdf.currentPage === 1;
    document.getElementById('next-pdf-page').disabled = appState.pdf.currentPage === appState.pdf.pages.length;
}

// Переключение полноэкранного режима
function toggleFullscreen() {
    const pdfViewer = document.querySelector('.pdf-viewer-container');
    
    if (!appState.pdf.isFullscreen) {
        if (pdfViewer.requestFullscreen) {
            pdfViewer.requestFullscreen();
        } else if (pdfViewer.webkitRequestFullscreen) {
            pdfViewer.webkitRequestFullscreen();
        } else if (pdfViewer.msRequestFullscreen) {
            pdfViewer.msRequestFullscreen();
        }
        
        document.getElementById('fullscreen-pdf').innerHTML = 
            '<i class="fas fa-compress"></i>';
        document.getElementById('fullscreen-pdf').title = 
            translations[document.documentElement.lang]?.exitFullscreen || 'Exit fullscreen';
        appState.pdf.isFullscreen = true;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        document.getElementById('fullscreen-pdf').innerHTML = 
            '<i class="fas fa-expand"></i>';
        document.getElementById('fullscreen-pdf').title = 
            translations[document.documentElement.lang]?.fullscreen || 'Fullscreen';
        appState.pdf.isFullscreen = false;
    }
}

// Обработчик изменения полноэкранного режима
document.addEventListener('fullscreenchange', () => {
    appState.pdf.isFullscreen = !!document.fullscreenElement;
});

// Функция для закрытия модального окна
function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    appState.pdf.doc = null;
    appState.pdf.pages = [];
    appState.pdf.currentPage = 1;
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
    appState.currentBlogPage--;
    renderArticles(document.documentElement.lang);
});

document.getElementById('next-page').addEventListener('click', () => {
    appState.currentBlogPage++;
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