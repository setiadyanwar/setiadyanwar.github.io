//Typejs
var typed = new Typed("#autotext", {
    strings: [
      "FrontEnd Web ",
      "Frontend MobileApp",
      "Graphic Designer",
      "Videographer",
      "Fotographer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
  });
  

// Slider
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        speed: 600,
        spaceBetween: 100,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
  
  //   Contact
  // Ambil elemen tombol dan modal menggunakan selektor
  const modalToggleBtn = document.querySelector(
    '[data-modal-toggle="crud-modal"]'
  );
  const modal = document.getElementById("crud-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalCloseBtn = document.querySelector('[data-modal-close="crud-modal"]');
  
  // Fungsi untuk menampilkan modal
  function showModal() {
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
  
  // Fungsi untuk menyembunyikan modal
  function hideModal() {
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
  
  // Direct thanks page contact form
  
  const contactForm = document.getElementById("contact-form");
  const loader = document.querySelector(".loader");
  
  loader.style.display = "none";
  
  contactForm.addEventListener("submit",function (e){
    loader.style.display = "block";
    e.preventDefault();
  
    const url = e.target.action;
    const formData = new FormData(contactForm);
  
    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }).then(()=>{
      //url thank you
      loader.style.display = "none";
      window.location.href = "/thankyou.html";
  
    }).catch((e)=>alert('erorr'));
  })
  
  // Direct thanks page contact form
  
  // Tambahkan event listener untuk mengatur tampilan modal
  modalToggleBtn.addEventListener("click", showModal);
  
  // Tambahkan event listener untuk menyembunyikan modal saat overlay diklik
  modalOverlay.addEventListener("click", hideModal);
  
  // Tambahkan event listener untuk menyembunyikan modal saat tombol close diklik
  modalCloseBtn.addEventListener("click", hideModal);

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        event.preventDefault(); // Mencegah pengiriman formulir jika CAPTCHA belum dichecked
        alert("Please complete the CAPTCHA.");
    } else {
        // CAPTCHA telah dichecked, izinkan pengiriman formulir
        // Anda dapat menambahkan kode lain di sini, seperti mengirim formulir menggunakan fetch atau AJAX
    }
});

function toggleText() {
  const text = document.getElementById('text');
  const toggle = document.getElementById('toggle');
  if (text.classList.contains('truncate')) {
      text.classList.remove('truncate');
      text.innerText = text.getAttribute('data-full-text'); // Kembalikan teks asli
      toggle.textContent = 'Show less';
  } else {
      text.classList.add('truncate');
      text.innerText = text.getAttribute('data-truncated-text'); // Tampilkan teks yang dipotong
      toggle.textContent = 'Show more';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.truncate');
  elements.forEach(element => {
      const words = element.innerText.split(' ');
      if (words.length > 30) {
          const fullText = element.innerText;
          const truncatedText = words.slice(0, 30).join(' ') + '...';
          element.setAttribute('data-full-text', fullText); // Simpan teks asli
          element.setAttribute('data-truncated-text', truncatedText); // Simpan teks yang dipotong
          element.innerText = truncatedText; // Tampilkan teks yang dipotong
      }
  });
});