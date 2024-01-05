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
    strings : ["FrontEnd Web ","Frontend MobileApp","Graphic Designer", "Videographer","Fotographer"],
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

//   Contact
// Ambil elemen tombol dan modal menggunakan selektor
const modalToggleBtn = document.querySelector('[data-modal-toggle="crud-modal"]');
const modal = document.getElementById('crud-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalCloseBtn = document.querySelector('[data-modal-close="crud-modal"]');

// Fungsi untuk menampilkan modal
function showModal() {
  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

// Fungsi untuk menyembunyikan modal
function hideModal() {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Tambahkan event listener untuk mengatur tampilan modal
modalToggleBtn.addEventListener('click', showModal);

// Tambahkan event listener untuk menyembunyikan modal saat overlay diklik
modalOverlay.addEventListener('click', hideModal);

// Tambahkan event listener untuk menyembunyikan modal saat tombol close diklik
modalCloseBtn.addEventListener('click', hideModal);


//detailportof
  function showDetail(detailId) {
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('container', 'relative');
    detailContainer.style.marginTop = '40px';

    // Definisi informasi detail berdasarkan ID
    let title, imageSrc, websiteUrl, description;

    if (detailId === 'ipbDetail') {
        title = 'Redesign Website IPB UNIVERSITY';
        imageSrc = 'dist/image/portfolio/uiux/IPB Redisgn.png';
        websiteUrl = 'https://example.com/ipb';
        description = 'Lorem ipsum dolor sit amet consectetur adipisicing  elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.';
    } else if (detailId === 'semarDetail') {
        title = 'Semar UI Web Design Portfolio';
        imageSrc = 'dist/image/portfolio/uiux/SEMAR UI.png';
        websiteUrl = 'https://example.com/semar';
        description = 'Lorem ipsum dolor sit amet consectetur adipisicing  elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.';
    }else if (detailId === 'bromoDetail') {
        title = 'Dashboard UI Bromo Web and Application';
        imageSrc = 'dist/image/portfolio/uiux/UI BROMO Fix.png';
        websiteUrl = 'https://example.com/semar';
        description = 'Lorem ipsum dolor sit amet consectetur adipisicing  elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.';
    }else if (detailId === 'butcheryDetail') {
        title = 'Mobile Application E-ccomerce Butchery';
        imageSrc = 'dist/image/portfolio/uiux/BUTCHERYAPP.jpg';
        websiteUrl = 'https://example.com/semar';
        description = 'Lorem ipsum dolor sit amet consectetur adipisicing  elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.';
    }else if (detailId === 'semarDetail') {
        title = 'Semar UI Web Design Portfolio';
        imageSrc = 'dist/image/portfolio/uiux/SEMAR UI.png';
        websiteUrl = 'https://example.com/semar';
        description = 'Lorem ipsum dolor sit amet consectetur adipisicing  elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.';
    }
    
    
    
    else {
        console.error('Invalid detailId:', detailId);
        return;
    }

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('absolute', 'top-0', 'right-4', 'text-black', 'text-4xl', 'cursor-pointer', 'bg-white', 'rounded-full', 'p-0', 'shadow-md', 'text-dark');
    closeButton.style.width = '46px';
    closeButton.style.height = '46px';

    closeButton.addEventListener('click', function () {
        detailContainer.style.display = 'none';
        window.location.href = 'index.html';
    });

    const detailContent = document.createElement('div');
    detailContent.classList.add('detail-container', 'max-w-lg', 'mx-auto');

    const detailImage = document.createElement('img');
    detailImage.src = imageSrc;
    detailImage.alt = title;
    detailImage.classList.add('h-auto', 'rounded-md', 'mb-6', 'mx-auto', 'lg:w-1/2', 'w-full', 'lg:w-auto');

    const detailTitleWrapper = document.createElement('div');
    detailTitleWrapper.classList.add('flex', 'justify-between', 'items-center', 'mb-6');

    const detailTitle = document.createElement('h3');
    detailTitle.innerHTML = `<b class="text-2xl font-extrabold">${title}</b>`;
    detailTitle.classList.add('mt-6');

    const visitWebsiteButton = document.createElement('a');
    visitWebsiteButton.href = websiteUrl;
    visitWebsiteButton.target = '_blank';
    visitWebsiteButton.textContent = ' 🔗 Visit Website';
    visitWebsiteButton.classList.add('flex-shrink-0', 'px-4', 'py-2', 'text-white', 'bg-dark', 'rounded-lg', 'hover:bg-primary', 'focus:outline-none', 'focus:shadow-outline-blue', 'active:bg-blue-800');

    detailTitleWrapper.appendChild(detailTitle);
    detailTitleWrapper.appendChild(visitWebsiteButton);

    const detailLorem = document.createElement('p');
    detailLorem.textContent = description;
    detailLorem.classList.add('mt-6', 'mb-6');

    detailContent.appendChild(closeButton);
    detailContent.appendChild(detailImage);
    detailContent.appendChild(detailTitle);
    detailContent.appendChild(detailLorem);
    detailContent.appendChild(detailTitleWrapper);
    detailContainer.appendChild(detailContent);

    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }

    document.body.appendChild(detailContainer);
}