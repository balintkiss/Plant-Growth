
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    autoplay: {
        loop: true,
        delay: 4000,
        pauseOnMouseEnter: true,

      },
  });

   // Initialize the map and set its view to the chosen geographical coordinates and a zoom level
var map = L.map('map').setView([51.505, -0.09], 13);

   // Add a tile layer to the map, using OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '© OpenStreetMap contributors'
   }).addTo(map);

   // Add a marker to the map at the specified location
var marker = L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


var swiperTwo = new Swiper(".mySwiper-two", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
});