// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};



//  Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerElement = document.getElementById("hamburger");
    if (hamburgerElement) {
        hamburgerElement.addEventListener("click", function () {
            hamburger.classList.toggle("hamburger-active");
            navMenu.classList.toggle("hidden");
        });
    }
});

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const uiuxTab = document.querySelector(
  '.tabs_wrap ul li[data-tabs="uidesign"]'
);
const videografiTab = document.querySelector(
  '.tabs_wrap ul li[data-tabs="videografi"]'
);
const uiux = document.querySelectorAll(".item_wrap.uidesign");
const videografi = document.querySelectorAll(".item_wrap.videografi");
const animasi = document.querySelectorAll(".item_wrap.animasi");
const desain = document.querySelectorAll(".item_wrap.desain");
const ilustrasi = document.querySelectorAll(".item_wrap.ilustrasi");

// Sembunyikan semua konten kecuali UI/UX saat halaman dimuat
uiux.forEach((item) => {
  item.style.display = "block";
});
videografi.forEach((item) => {
  item.style.display = "none";
});
animasi.forEach((item) => {
  item.style.display = "none";
});
desain.forEach((item) => {
  item.style.display = "none";
});
ilustrasi.forEach((item) => {
  item.style.display = "none";
});

// Tambahkan event listener untuk setiap tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Sembunyikan semua konten terlebih dahulu
    uiux.forEach((item) => {
      item.style.display = "none";
    });
    videografi.forEach((item) => {
      item.style.display = "none";
    });
    animasi.forEach((item) => {
      item.style.display = "none";
    });
    desain.forEach((item) => {
      item.style.display = "none";
    });
    ilustrasi.forEach((item) => {
      item.style.display = "none";
    });

    // Hapus class "active" dari semua tab
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    // Tandai tab yang diklik sebagai "active"
    tab.classList.add("active");

    // Ambil data-tabs attribute dari tab yang diklik
    const tabval = tab.getAttribute("data-tabs");

    // Tampilkan konten yang sesuai dengan tab yang diklik
    if (tabval == "videografi") {
      videografi.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "animasi") {
      animasi.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "desain") {
      desain.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "ilustrasi") {
      ilustrasi.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "videografi") {
      videografi.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      uiux.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

uiuxTab.classList.add("active");

function showDetail(detailId) {
  const detailContainer = document.createElement("div");
  detailContainer.classList.add("container", "relative");
  detailContainer.style.marginTop = "40px";

  // Definisi informasi detail berdasarkan ID
  let title, imageSrc, websiteUrl, description;

  if (detailId === "ipbDetail") {
    title = "Redesign Website IPB UNIVERSITY";
    imageSrc = "dist/image/portfolio/uiux/IPB Redisgn.png";
    websiteUrl = "https://example.com/ipb";
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.";
  }else if (detailId === "swiftDetail") {
    title = "Swiftcare Application for fundaraise";
    imageSrc = "dist/image/portfolio/uiux/SwiftcareApp.png";
    websiteUrl = "https://example.com/semar";
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.";
  }else if (detailId === "semarDetail") {
    title = "Semar UI Web Design Portfolio";
    imageSrc = "dist/image/portfolio/uiux/SEMAR UI.png";
    websiteUrl = "https://example.com/semar";
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.";
  } else if (detailId === "bromoDetail") {
    title = "Dashboard UI Bromo Web and Application";
    imageSrc = "dist/image/portfolio/uiux/UI BROMO Fix.png";
    websiteUrl =
      "https://www.figma.com/file/naDymnkyYHEHqdayLcNaJ9/Bromo?type=design&node-id=204%3A4&mode=design&t=QxsYdU3HjO3elDhG-1";
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.";
  } else if (detailId === "butcheryDetail") {
    title = "Web and Mobile App E-commerce Butchery";
    imageSrc = "dist/image/portfolio/uiux/Buthcery webapp.png";
    websiteUrl = "http://146.190.89.250/";
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.";
  } else if (detailId === "agridationDetail") {
    title = "Agridation Web Design Portfolio";
    imageSrc = "dist/image/portfolio/uiux/Agridation.png";
    websiteUrl =
      "https://www.figma.com/file/08iSgX68JqkLI5gRL00NYO/Agridation?type=design&node-id=0%3A1&mode=design&t=BcGG0QdEtJsC3iPH-1";
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus, molestiae rem doloribus earum nobis ex magni explicabo? Ipsum, sint.";
  } else {
    console.error("Invalid detailId:", detailId);
    return;
  }

  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.classList.add(
    "absolute",
    "top-0",
    "right-4",
    "text-black",
    "text-4xl",
    "cursor-pointer",
    "bg-white",
    "rounded-full",
    "p-0",
    "shadow-md",
    "text-dark"
  );
  closeButton.style.width = "46px";
  closeButton.style.height = "46px";

  closeButton.addEventListener("click", function () {
    document.body.removeChild(detailContainer);
  });

  const detailContent = document.createElement("div");
  detailContent.classList.add("detail-container", "max-w-lg", "mx-auto");

  const detailImage = document.createElement("img");
  detailImage.src = imageSrc;
  detailImage.alt = title;
  detailImage.classList.add(
    "h-auto",
    "rounded-md",
    "mb-6",
    "mx-auto",
    "lg:w-1/2",
    "w-full",
    "lg:w-auto"
  );

  const detailTitleWrapper = document.createElement("div");
  detailTitleWrapper.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "mb-6"
  );

  const detailTitle = document.createElement("h3");
  detailTitle.innerHTML = `<b class="text-2xl font-extrabold">${title}</b>`;
  detailTitle.classList.add("mt-6");

  const visitWebsiteButton = document.createElement("a");
  visitWebsiteButton.href = websiteUrl;
  visitWebsiteButton.target = "_blank";
  visitWebsiteButton.textContent = " 🔗 Visit Website";
  visitWebsiteButton.classList.add(
    "flex-shrink-0",
    "px-4",
    "py-2",
    "text-white",
    "bg-dark",
    "rounded-lg",
    "hover:bg-primary",
    "focus:outline-none",
    "focus:shadow-outline-blue",
    "active:bg-blue-800"
  );

  detailTitleWrapper.appendChild(detailTitle);
  detailTitleWrapper.appendChild(visitWebsiteButton);

  const detailLorem = document.createElement("p");
  detailLorem.textContent = description;
  detailLorem.classList.add("mt-6", "mb-6");

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
