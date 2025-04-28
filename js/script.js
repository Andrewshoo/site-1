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
  window.location.href = "mailto:ivan@upcast.pro" + 
                        "?subject=Запрос с сайта UPCAST" +
                        "&body=Здравствуйте, Иван.%0D%0A%0D%0AМеня интересует...";
}

// Функция для переключения языка
function switchLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('preferredLanguage', lang);
  location.reload();
}

// Функция для определения языка по региону
function detectLanguageByRegion() {
  // Проверяем сохраненный язык
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) return savedLang;

  // Определяем язык браузера
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('ru')) return 'ru';

  // Определяем по IP (упрощенная версия)
  const russianSpeakingCountries = ['RU', 'BY', 'KZ', 'UA', 'KG', 'AM', 'AZ', 'MD', 'TJ', 'UZ'];
  try {
      fetch('https://ipapi.co/json/')
          .then(response => response.json())
          .then(data => {
              if (russianSpeakingCountries.includes(data.country)) {
                  return 'ru';
              } else {
                  return 'en';
              }
          });
  } catch (e) {
      return 'en'; // По умолчанию английский если API не доступно
  }

  return 'en'; // По умолчанию английский
}


// Тексты для разных языков
// Полная реализация перевода
const translations = {
  ru: {
    header: "Вдумчивый, индивидуальный, эффективный подход к покупке и продаже самолётов.",
    description: "В мире нейросетей, автоматизации, воронок продаж даже такое сокровенное и редкое событие, как покупку самолёта, многие пытаются поставить на шаблонные рельсы, поручить алгоритмам и максимально подогнать под какой-то общий стандарт – потому что «так положено». Но самолёт покупают незаурядные люди...",
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
    header: "Thoughtful, personalized, effective approach to aircraft acquisition and sales.",
    description: "In the era of neural networks, automation, and sales pipelines, even such an exclusive event as aircraft purchase is often standardized and delegated to algorithms - because 'that's how it's done'. But aircraft are purchased by extraordinary individuals...",
    signature: "Ivan Veretennikov",
    projects: "Current Projects",
    sale: "Aircraft for Sale",
    purchase: "Aircraft Wanted",
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

// Контактные функции (замените на реальные данные)
function openEncodedLink() {
  window.open('https://t.me/username', '_blank');
}
function openWA() {
  window.open('https://wa.me/1234567890', '_blank');
}
function sendEmail() {
  window.location.href = 'mailto:email@example.com';
}

