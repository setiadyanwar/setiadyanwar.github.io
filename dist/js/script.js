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






  function showDetail(imageSrc, title) {
    // Buat elemen untuk menampilkan detail gambar
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('container', 'relative'); // Tambahkan kelas container dan relative
    detailContainer.style.marginTop = '40px'; // Atur nilai margin top sesuai kebutuhan Anda

    // Tambahkan tombol silang di kanan atas
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;'; // Simbol silang (×)
    closeButton.classList.add('absolute', 'top-0', 'right-4', 'text-black', 'text-4xl', 'cursor-pointer', 'bg-white', 'rounded-full', 'p-2', 'shadow-md', 'text-dark');
    
    // Tambahkan properti width dan height untuk mengatur ukuran lingkaran
    closeButton.style.width = '46px';
    closeButton.style.height = '46px';

    closeButton.addEventListener('click', function () {
        // Tambahkan event listener untuk menutup detailContainer saat tombol silang diklik
        document.body.removeChild(detailContainer);
        location.reload(); // Me-refresh halaman setelah menutup detailContainer
    });

    const detailContent = document.createElement('div');
    detailContent.classList.add('detail-container', 'max-w-lg', 'mx-auto'); // Tambahkan kelas detail-container dan atur lebar maksimum

    const detailImage = document.createElement('img');
    detailImage.src = imageSrc;
    detailImage.alt = title;
    detailImage.classList.add('h-auto', 'rounded-md', 'mb-6', 'mx-auto', 'lg:w-1/2', 'w-full', 'lg:w-auto');
    // Tambahkan kelas-kelas responsif untuk mengatur lebar gambar

    const detailTitleWrapper = document.createElement('div');
    detailTitleWrapper.classList.add('flex', 'justify-between', 'items-center', 'mb-6');

    const detailTitle = document.createElement('h3');
    detailTitle.innerHTML = `<b  class="text-2xl font-extrabold">${title}</b>`; 
    detailTitle.classList.add('mt-6');


    // Buat tombol untuk mengunjungi situs web
    const visitWebsiteButton = document.createElement('a');
    visitWebsiteButton.href = 'https://setiadyanwar.000webhostapp.com/';
    visitWebsiteButton.target = '_blank'; // Buka tautan di tab baru
    visitWebsiteButton.textContent = ' 🔗 Visit Website';
    visitWebsiteButton.classList.add('flex-shrink-0', 'px-4', 'py-2', 'text-white', 'bg-dark', 'rounded-lg', 'hover:bg-primary', 'focus:outline-none', 'focus:shadow-outline-blue', 'active:bg-blue-800');

    // Tambahkan subtitle teknologi
    // const technologySubtitle = document.createElement('p');
    // technologySubtitle.textContent = 'Teknologi yang Digunakan';
    // technologySubtitle.classList.add('mt-2', 'text-dark');

    detailTitleWrapper.appendChild(detailTitle);
    detailTitleWrapper.appendChild(visitWebsiteButton);
    // detailTitleWrapper.appendChild(technologySubtitle);

    const detailLorem = document.createElement('p');
    detailLorem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel purus eget tellus maximus pellentesque non et enim. Nulla facilisi. Morbi commodo erat vel magna placerat interdum. Sed varius justo eget magna gravida, sit amet dignissim nulla tincidunt. Suspendisse auctor sem non nisi vehicula, et bibendum dolor facilisis. Integer fringilla, orci vel scelerisque venenatis, tellus orci aliquet nulla, ut posuere elit felis id nunc.';
    detailLorem.classList.add('mt-6', 'mb-6');

    detailContent.appendChild(closeButton); // Tambahkan tombol silang ke detailContent
    detailContent.appendChild(detailImage);
    detailContent.appendChild(detailTitle);
    detailContent.appendChild(detailLorem); 
    detailContent.appendChild(detailTitleWrapper);
    detailContainer.appendChild(detailContent);

    // Hapus semua elemen anak dari <body>
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    // Masukkan detailContainer ke <body>
    document.body.appendChild(detailContainer);
}
