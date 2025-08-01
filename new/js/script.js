// Функция для переключения языка
function switchLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLanguage', lang);
  location.reload();
}

function detectLanguageByRegion() {
  const savedLang = localStorage.getItem('siteLanguage');
  if (savedLang) return savedLang;

  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith('ru') ? 'ru' : 'en';
}


// Тексты для разных языков
// Полная реализация перевода
const translations = {
  ru: {
    header: "Вдумчивый, индивидуальный, эффективный подход к покупке и продаже самолётов.",
    description: `<p>В мире нейросетей, автоматизации, воронок продаж даже такое сокровенное и редкое событие, как покупку самолёта, многие пытаются поставить на шаблонные рельсы, поручить алгоритмам и максимально подогнать под какой-то общий стандарт – потому что «так положено». Но самолёт покупают незаурядные люди, и у каждого из них есть свои мечты, свой характер, свои правила и принципы. 
      </p><p class="descr-p-ru">И вы, те редкие и уникальные люди, которые задумываются о покупке самолёта или уже стали владельцем, точно добились этого не потому, что слушали «как положено» – а потому что прокладывали свой путь.
      </p> <p class="descr-p-ru">Поэтому, получив разносторонний опыт в отрасли, полетав на множестве разных джетов и успешно закрыв достаточное количество изощрённых сделок, я решил отбросить все шаблоны и подойти к делу так, как оно и замышлялось изначально: лично и внимательно разбираясь в нюансах каждого покупателя, а затем приступая к поиску индивидуального, максимально подходящего решения.
      </p>
    `,
    signature: "Иван Веретенников",
    projects: "Текущие проекты",
    sale: "Продажа",
    purchase: "Покупка",
    copyright: "UPCAST By Ivan Veretennikov",
    telegramTitle: "Telegram",
    whatsappTitle: "WhatsApp",
    emailTitle: "Написать email"
  },
  en: {
    header: "Thoughtful, individual, human approach to buying and selling business aircraft.",
    description: `<p>In my first career as a journalist, I became something like the Nabokov of business aviation – that is, the only Russian I’m aware of to be published in leading international publications and well-known to the English-speaking world. I interviewed top businessmen and celebrities, spoke at conferences, and even published JetBook, the first-of-a-kind app for mobiles and tablets. 
      </p><p class="descr-p-en">With that experience, I went on to join what became a very successful aircraft sales company and learnt all aspects of the trade: intricacies of cross-border transactions, key things to look for in a business jet, the emotions that really guide buyers and sellers. I also got a pilot licence for the Robinson R44 and R66 – I strongly recommend learning to fly to anyone who gets the opportunity, much like buying an aircraft. There’s not a single disadvantage to doing it! 
      </p> <p class="descr-p-en">Now I’m out to start my own aircraft brokerage. In a world seeking to automate and outsource to AI, I think buying and selling business jets remains a very individual, human, and personal experience. And anyone who reaches this point in their life deserves special treatment. That’s why I approach every conversation with an open mind and take the time to really understand each situation and request, rather than using mass-market generalisations to push a client into some “standard solution”. You’re not standard if you’re buying or selling an airplane!
      </p>
    `,
    signature: "Ivan Veretennikov",
    projects: "Currently working on",
    sale: "Offering for Sale",
    purchase: "Looking to Buy",
    copyright: "UPCAST By Ivan Veretennikov",
    telegramTitle: "Telegram",
    whatsappTitle: "WhatsApp",
    emailTitle: "Email us"
  }
};

// Функции для работы с языком
function applyTranslations(lang) {
  const langData = translations[lang] || translations['en'];
  
  document.querySelector('.header-text').textContent = langData.header;
  document.querySelector('.description p').innerHTML = langData.description.replace(/\n/g, '<br>');
  document.querySelector('.sign').textContent = langData.signature;
  document.querySelector('.aircraft-section h2').textContent = langData.projects;
  document.querySelectorAll('.aircraft-column h3')[0].textContent = langData.sale;
  document.querySelectorAll('.aircraft-column h3')[1].textContent = langData.purchase;
  
  // Обновляем title атрибуты
  const icons = document.querySelectorAll('.contact-icons a');
  icons[0].setAttribute('title', langData.telegramTitle);
  icons[1].setAttribute('title', langData.whatsappTitle);
  icons[2].setAttribute('title', langData.emailTitle);

   // Обновляем активное состояние кнопок
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });
}

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

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const savedLang = localStorage.getItem('siteLanguage');
  const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
  
  const activeLang = langParam || savedLang || browserLang;
  switchLanguage(activeLang);
});

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
  