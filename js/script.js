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
      header: "Вдумчивый, индивидуальный, эффективный подход при покупке и продаже самолётов.",
      description: `В мире нейросетей, автоматизации, воронок продаж даже такое сокровенное и редкое событие, как покупку самолёта, многие пытаются поставить на шаблонные рельсы, поручить алгоритмам и максимально подогнать под какой-то общий стандарт – потому что «так положено». Но самолёт покупают незаурядные люди, и у каждого из них есть свои мечты, свой характер, свои правила и принципы. И вы, те редкие и уникальные люди, которые задумываются о покупке самолёта или уже стали владельцем, точно добились этого не потому, что слушали «как положено» – а потому что прокладывали свой путь. Поэтому, получив разносторонний опыт в отрасли, полетав на множестве разных джетов и успешно закрыв достаточное количество изощрённых сделок, я решил отбросить все шаблоны и подойти к делу так, как оно и замышлялось изначально: лично и внимательно разбираясь в нюансах каждого покупателя, а затем приступая к поиску индивидуального, максимально подходящего решения.`,
      signature: "Иван Веретенников",
      projects: "Текущие проекты",
      sale: "Продажа",
      purchase: "Покупка",
      copyright: "UPCAST By Ivan Veretennikov"
  },
  en: {
      title: "UPCAST By Ivan Veretennikov",
      header: "Thoughtful, individual, human approach to buying and selling business aircraft.",
      description: `In my first career as a journalist, I became something like the Nabokov of business aviation – that is, the only Russian I’m aware of to be published in leading international publications and well-known to the English-speaking world. I interviewed top businessmen and celebrities, spoke at conferences, and even published JetBook, the first-of-a-kind app for mobiles and tablets. With that experience, I went on to join what became a very successful aircraft sales company and learnt all aspects of the trade: intricacies of cross-border transactions, key things to look for in a business jet, the emotions that really guide buyers and sellers. I also got a pilot licence for the Robinson R44 and R66 – I strongly recommend learning to fly to anyone who gets the opportunity, much like buying an aircraft. There’s not a single disadvantage to doing it! Now I’m out to start my own aircraft brokerage. In a world seeking to automate and outsource to AI, I think buying and selling business jets remains a very individual, human, and personal experience. And anyone who reaches this point in their life deserves special treatment. That’s why I approach every conversation with an open mind and take the time to really understand each situation and request, rather than using mass-market generalisations to push a client into some “standard solution”. You’re not standard if you’re buying or selling an airplane! `,
      signature: "Ivan Veretennikov",
      projects: "Currently working on",
      sale: "Offering for Sale",
      purchase: "Looking to Buy",
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
