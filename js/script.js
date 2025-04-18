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
