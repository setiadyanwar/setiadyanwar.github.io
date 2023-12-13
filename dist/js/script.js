// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}


//  Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

const tabs = document.querySelectorAll('.tabs_wrap ul li');
const uiuxTab = document.querySelector('.tabs_wrap ul li[data-tabs="uidesign"]');
const videografiTab = document.querySelector('.tabs_wrap ul li[data-tabs="videografi"]');
const uiux = document.querySelectorAll('.item_wrap.uidesign');
const videografi = document.querySelectorAll('.item_wrap.videografi');
const animasi = document.querySelectorAll('.item_wrap.animasi');
const desain = document.querySelectorAll('.item_wrap.desain');
const ilustrasi = document.querySelectorAll('.item_wrap.ilustrasi');

// Sembunyikan semua konten kecuali UI/UX saat halaman dimuat
uiux.forEach(item => {
    item.style.display = 'block';
});
videografi.forEach(item => {
    item.style.display = 'none';
});
animasi.forEach(item => {
    item.style.display = 'none';
});
desain.forEach(item => {
    item.style.display = 'none';
});
ilustrasi.forEach(item => {
    item.style.display = 'none';
});

// Tambahkan event listener untuk setiap tab
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Sembunyikan semua konten terlebih dahulu
        uiux.forEach(item => {
            item.style.display = 'none';
        });
        videografi.forEach(item => {
            item.style.display = 'none';
        });
        animasi.forEach(item => {
            item.style.display = 'none';
        });
        desain.forEach(item => {
            item.style.display = 'none';
        });
        ilustrasi.forEach(item => {
            item.style.display = 'none';
        });

        // Hapus class "active" dari semua tab
        tabs.forEach(t => {
            t.classList.remove("active");
        });

        // Tandai tab yang diklik sebagai "active"
        tab.classList.add('active');

        // Ambil data-tabs attribute dari tab yang diklik
        const tabval = tab.getAttribute('data-tabs');

        // Tampilkan konten yang sesuai dengan tab yang diklik
        if (tabval == 'videografi'){
            videografi.forEach(item => {
                item.style.display = 'block';
            });
        } else if (tabval == 'animasi'){
            animasi.forEach(item => {
                item.style.display = 'block';
            });
        } else if (tabval == 'desain'){
            desain.forEach(item => {
                item.style.display = 'block';
            });
        } else if (tabval == 'ilustrasi'){
            ilustrasi.forEach(item => {
                item.style.display = 'block';
            });
        } else if(tabval == 'videografi'){
            videografi.forEach(item => {
                item.style.display = 'block';
            });
        }else {
            uiux.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});

uiuxTab.classList.add('active');

//Typejs
var typed = new Typed('#autotext',{
    strings : ["FrontEnd Web Developer","Frontend Mobile Developer","Graphic Designer", "Videographer","Fotographer"],
    typeSpeed :100,
    backSpeed :100,
    loop :true,
    loopCount: Infinity
})

// Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed:600,
    spaceBetween:100,
    autoplay:{
        delay:3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });