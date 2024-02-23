console.log("JavaScript файл загружен");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM готов к использованию");
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      console.log("Нажата ссылка");
      event.preventDefault(); // Отмена действия по умолчанию (перехода по ссылке)
      const href = this.getAttribute("href"); // Получаем значение атрибута href
      if (href) {
        console.log("Перенаправление на страницу:", href);
        window.location.href = href; // Перенаправляем пользователя на новую страницу
      }
    });
  });
});