
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Dark and lite mode 
    // let darkModeicon = document.querySelector('#dark-icon');
    
    // darkModeicon.onclick = function => {
    //     darkModeicon.body.classList.toggle('fa-sun');
    // };
    var icon = document.getElementById('dark-icon');

    icon.onclick = () =>{
      document.body.classList.toggle("dark-theme");
      
      // if(document.body.classList.toggle("dark-theme")){
      //   icon .fa-moon;
      // }
      // else{
      //   icon .fa-sun; 
      // }
    }
    // icon.onclick = () => {
    //   document.body.classList.toggle('fa-sun');
    // }