let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className+="active";
}




var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: true
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".prev",
    prevEl: ".next"
  },
  keyboard: {
    enabled: true
  },
  // mousewheel: {
  //   thresholdDelta: 70
  // },
  breakpoints: {
    560: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    }
  }
});


const testimonials = [
  {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe",
      image: "img/user1.jpg"
  },
  {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      name: "Doe",
      image: "img/user1.jpg"
  },
  {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.incididunt ut labore et dolore magna aliqua.",
      name: "Janaid",
      image: "img/user1.jpg"
  },
  
];

let currentTestimonial = 0;

document.getElementById('testimonial-section').addEventListener('click', function() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  document.getElementById('testimonial-text').innerText = testimonials[currentTestimonial].text;
  document.getElementById('user-name').innerText = testimonials[currentTestimonial].name;
  document.getElementById('user-image').src = testimonials[currentTestimonial].image;
});

  