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
const translations = {
  ru: {
      title: "UPCAST By Ivan Veretennikov",
      header: "Вдумчивый, индивидуальный, эффективный подход к покупке и продаже самолётов.",
      description: `В мире нейросетей, автоматизации, воронок продаж даже такое сокровенное и редкое событие, как покупку самолёта,
                    многие пытаются поставить на шаблонные рельсы, поручить алгоритмам и максимально подогнать под какой-то общий стандарт – 
                    потому что «так положено». Но самолёт покупают незаурядные люди, и у каждого из них есть свои мечты, свой характер, свои правила и принципы. 
                    И вы, те редкие и уникальные люди, которые задумываются о покупке самолёта или уже стали владельцем, точно добились этого не потому, что слушали «как положено» – 
                    а потому что прокладывали свой путь. Поэтому, получив разносторонний опыт в отрасли, полетав на множестве разных джетов и успешно закрыв достаточное количество изощрённых сделок, я решил отбросить все шаблоны и подойти к делу так, как оно и замышлялось изначально: лично и внимательно разбираясь в нюансах каждого покупателя, а затем приступая к поиску индивидуального, максимально подходящего решения.`,
      signature: "Иван Веретенников",
      projects: "Текущие проекты",
      sale: "Продажа",
      purchase: "Покупка",
      copyright: "UPCAST By Ivan Veretennikov"
  },
  en: {
      title: "UPCAST By Ivan Veretennikov",
      header: "Thoughtful, individual, effective approach to buying and selling aircraft.",
      description: `In the world of neural networks, automation, and sales funnels, even such an intimate and rare event as the purchase of an airplane, many people try to put it on a template, entrust it to algorithms, and adjust it as much as possible to some general standard-because "it's supposed to". But the plane is bought by extraordinary people, and each of them has their own dreams, their own character, their own rules and principles." And you, those rare and unique people who are thinking about buying an airplane or have already become an owner, definitely achieved this not because you listened "properly" – but because you paved your way. Therefore, having gained a wide range of experience in the industry, having flown on many different jets and successfully closed a sufficient number of sophisticated deals, I decided to drop all the templates and approach the matter as it was originally intended: personally and carefully understanding the nuances of each buyer, and then starting to search for an individual, most suitable solution.`,
      signature: "Ivan Veretennikov",
      projects: "Current projects",
      sale: "For Sale",
      purchase: "Wanted",
      copyright: "UPCAST By Ivan Veretennikov"
  }
};

// Применяем перевод при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  const lang = detectLanguageByRegion();
  document.documentElement.lang = lang;
  
  const texts = translations[lang];
  if (!texts) return;

  // Обновляем тексты на странице
  document.title = texts.title;
  document.querySelector('.header-text').textContent = texts.header;
  document.querySelector('.description p').textContent = texts.description;
  document.querySelector('.sign').textContent = texts.signature;
  document.querySelector('.aircraft-section h2').textContent = texts.projects;
  document.querySelectorAll('.aircraft-column h3')[0].textContent = texts.sale;
  document.querySelectorAll('.aircraft-column h3')[1].textContent = texts.purchase;
  document.querySelector('.copyright').textContent = texts.copyright;
});

// Функции для контактов (оставляем как есть)
function openEncodedLink() {
  window.location.href = "tg://resolve?domain=username";
}
function openWA() {
  window.location.href = "https://wa.me/1234567890";
}
function sendEmail() {
  window.location.href = "mailto:email@example.com";
}
