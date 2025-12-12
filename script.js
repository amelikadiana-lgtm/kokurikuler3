/* =================================================
   script.js - FINAL (Enhanced)
   - Gallery, Search, Sort, Region Filter, Category Filter
   - Modal detail dengan tombol Favorit (☆ -> ★)
   - Ikon Favorit global (pojok kanan atas) -> mode "Favorit saja"
   - localStorage untuk favorit
   - Animasi fade, small tilt hover, pagination
   ================================================= */

/* ------------------ DATA BUDAYA (60 ITEM) ------------------ */
/* Jika kamu sudah punya data di tempat lain, ganti source di sini */
const dataBudaya = [
  /* SUMATRA (10) */
  { name: "Tari Saman", region: "Sumatra", category: "Tarian", popular: 10, img: "saman2.jpg.jpg", desc: "Tari Saman (Aceh) terkenal dengan kekompakan dan tempo cepat; sering dipentaskan untuk menyampaikan pesan sosial dan religius." },
  { name: "Tari Piring", region: "Sumatra", category: "Tarian", popular: 8, img: "tari-piring.jpg", desc: "Tari Piring (Sumbar) menggunakan piring sebagai properti; menampilkan gerakan akrobatik yang melambangkan rasa syukur." },
  { name: "Tari Melayu Deli", region: "Sumatra", category: "Tarian", popular: 7, img: "melayu-deli.jpg", desc: "Tarian Melayu yang anggun dengan gerakan tangan lembut, menampilkan keindahan budaya Deli." },
  { name: "Tari Gelang Alas", region: "Sumatra", category: "Tarian", popular: 6, img: "gelang-alas.jpg", desc: "Tarian tradisional Jambi yang menggunakan gelang sebagai atribut utama dalam gerakannya." },
  { name: "Tari Zapin", region: "Sumatra", category: "Tarian", popular: 8, img: "zapin.jpg", desc: "Tarian Riau dengan gerakan cepat dan dinamis, menampilkan pengaruh budaya Arab yang kuat." },
  { name: "Rumah Gadang", region: "Sumatra", category: "Arsitektur", popular: 9, img: "gadang.jpg.jpg", desc: "Rumah adat Minangkabau beratap gonjong, tempat tinggal keluarga besar dan pusat adat matrilineal." },
  { name: "Istana Maimun", region: "Sumatra", category: "Arsitektur", popular: 8, img: "istana-maimun.jpg", desc: "Istana bersejarah Deli Medan yang menggabungkan arsitektur Melayu, India, dan Eropa." },
  { name: "Rumah Boang Aceh", region: "Sumatra", category: "Arsitektur", popular: 7, img: "boang.jpg", desc: "Rumah tradisional Aceh dengan tiang tinggi yang dirancang untuk menghadapi banjir musiman." },
  { name: "Rendang", region: "Sumatra", category: "Kuliner", popular: 10, img: "rendang.jpg", desc: "Masakan khas Minangkabau, rendang kaya rempah dan menjadi ikon kuliner Indonesia di dunia." },
  { name: "Gulai Tambusu", region: "Sumatra", category: "Kuliner", popular: 8, img: "gulai-tambusu.jpg", desc: "Gulai daging khas Jambi dengan rempahannya yang kaya dan cita rasa yang dalam." },
  { name: "Ulos Batak", region: "Sumatra", category: "Kain Tradisional", popular: 8, img: "ulos.jpg", desc: "Kain tenun tradisional Batak, dipakai untuk upacara adat dan simbol ikatan keluarga." },

  /* JAWA (10) */
  { name: "Wayang Kulit", region: "Jawa", category: "Seni Pertunjukan", popular: 10, img: "wayang2.jpg.jpg", desc: "Pertunjukan pewayangan yang memadukan seni cerita, musik, dan filosofi kehidupan; diakui UNESCO." },
  { name: "Batik", region: "Jawa", category: "Kain Tradisional", popular: 10, img: "batik.jpg", desc: "Teknik pewarnaan kain dengan malam (lilin) yang menghasilkan motif simbolik, identitas budaya Indonesia." },
  { name: "Reog Ponorogo", region: "Jawa", category: "Seni Pertunjukan", popular: 9, img: "reog.jpg", desc: "Seni rakyat Ponorogo dengan topeng besar 'Singa Barong' yang penuh energi dan mitologi lokal." },
  { name: "Angklung", region: "Jawa", category: "Alat Musik", popular: 9, img: "angklung.jpg", desc: "Alat musik bambu yang dimainkan berkelompok, mengajarkan kolaborasi dan harmoni bunyi." },
  { name: "Keris", region: "Jawa", category: "Warisan Tradisional", popular: 8, img: "keris.jpg", desc: "Senjata tradisional sekaligus benda pusaka yang memuat nilai spiritual, seni pamor, dan sejarah." },
  { name: "Wayang Orang", region: "Jawa", category: "Seni Pertunjukan", popular: 8, img: "wayang-orang.jpg", desc: "Pertunjukan wayang yang dimainkan oleh manusia dengan kostum dan tata panggung dramatis." },
  { name: "Gamelan Jawa", region: "Jawa", category: "Alat Musik", popular: 9, img: "gamelan-jawa.jpg", desc: "Orkestra tradisional Jawa dengan instrumen perunggu yang menghasilkan suara mistis dan mendalam." },
  { name: "Kain Lurik", region: "Jawa", category: "Kain Tradisional", popular: 7, img: "lurik.jpg", desc: "Kain tradisional Jawa dengan motif garis yang sederhana namun penuh makna filosofis." },
  { name: "Tari Serimpi", region: "Jawa", category: "Tarian", popular: 8, img: "serimpi.jpg", desc: "Tarian Jawa istana dengan gerakan lambat, anggun, dan penuh makna simbolis." },
  { name: "Gunungan Wayang", region: "Jawa", category: "Seni Kerajinan", popular: 7, img: "gunungan.jpg", desc: "Bentuk dekoratif pada pertunjukan wayang yang melambangkan gunung dan spiritual." },

  /* KALIMANTAN (10) */
  { name: "Rumah Betang", region: "Kalimantan", category: "Arsitektur", popular: 8, img: "betang.jpg", desc: "Rumah panjang Dayak yang mencerminkan kebersamaan komunitas dan struktur adat setempat." },
  { name: "Tari Gong", region: "Kalimantan", category: "Tarian", popular: 7, img: "tari-gong.jpg", desc: "Tarian tradisional Dayak dengan iringan gong sebagai elemen ritmis utama." },
  { name: "Mandau", region: "Kalimantan", category: "Warisan Tradisional", popular: 7, img: "mandau.jpg", desc: "Senjata tradisional suku Dayak, sering dipahat dengan motif khas dan digunakan pada ritual tertentu." },
  { name: "Tenun Ikat Dayak", region: "Kalimantan", category: "Kain Tradisional", popular: 7, img: "ikat-dayak.jpg", desc: "Tenun dengan motif geometris khas yang dibuat lewat teknik ikat pada benang." },
  { name: "Upacara Tiwah", region: "Kalimantan", category: "Upacara Adat", popular: 8, img: "tiwah.jpg", desc: "Ritual pemakaman suku Dayak Ngaju yang kaya simbolisme, dilakukan untuk menghantarkan roh ke akhirat." },
  { name: "Tari Hudoq", region: "Kalimantan", category: "Tarian", popular: 8, img: "hudoq.jpg", desc: "Tarian ritual Dayak Kenyah yang menggunakan topeng kayu dan dilakukan untuk kesuburan tanah." },
  { name: "Seni Pahat Dayak", region: "Kalimantan", category: "Seni Kerajinan", popular: 7, img: "pahat-dayak.jpg", desc: "Kerajinan ukir tradisional Dayak dengan desain fauna dan geometrik yang unik." },
  { name: "Rumah Tambi Halu", region: "Kalimantan", category: "Arsitektur", popular: 6, img: "tambi-halu.jpg", desc: "Rumah adat Kalimantan Tengah dengan struktur panggung yang kuat dan desain unik." },
  { name: "Sago Lempeng", region: "Kalimantan", category: "Kuliner", popular: 7, img: "sago-lempeng.jpg", desc: "Makanan tradisional Kalimantan Barat terbuat dari sagu dengan tekstur kenyal dan rasa gurih." },
  { name: "Anyaman Rotan Dayak", region: "Kalimantan", category: "Seni Kerajinan", popular: 6, img: "anyaman-rotan.jpg", desc: "Kerajinan anyaman rotan Dayak untuk tempat penyimpanan dan dekorasi rumah." },

  /* SULAWESI (10) */
  { name: "Tongkonan", region: "Sulawesi", category: "Arsitektur", popular: 9, img: "tongkonan.jpg", desc: "Rumah adat Toraja dengan atap melengkung; pusat aktivitas sosial, adat, dan spiritual masyarakat Toraja." },
  { name: "Tari Pakarena", region: "Sulawesi", category: "Tarian", popular: 8, img: "pakarena.jpg", desc: "Tarian Makassar yang anggun, sering dipentaskan pada upacara formal dan penyambutan tamu." },
  { name: "Rambu Solo", region: "Sulawesi", category: "Upacara Adat", popular: 9, img: "rambu-solo.jpg", desc: "Upacara pemakaman Toraja yang terkenal dengan prosesi besar dan simbol-simbol budaya yang kuat." },
  { name: "Tenun Toraja", region: "Sulawesi", category: "Kain Tradisional", popular: 7, img: "tenun-toraja.jpg", desc: "Tenun dengan motif khas yang sering dipakai pada acara adat serta upacara keluarga." },
  { name: "Pakaian Adat Bugis", region: "Sulawesi", category: "Pakaian Tradisional", popular: 7, img: "bugis.jpg", desc: "Busana adat suku Bugis dengan corak khas yang dipakai terutama pada acara pernikahan dan adat." },
  { name: "Tari Cakalele", region: "Sulawesi", category: "Tarian", popular: 8, img: "cakalele.jpg", desc: "Tarian perang Maluku dengan gerakan dinamis dan energik yang menampilkan keberanian." },
  { name: "Batik Makassar", region: "Sulawesi", category: "Kain Tradisional", popular: 7, img: "batik-makassar.jpg", desc: "Batik khas Makassar dengan motif unik yang menggabungkan budaya lokal dan pengaruh luar." },
  { name: "Gong Toraja", region: "Sulawesi", category: "Alat Musik", popular: 7, img: "gong-toraja.jpg", desc: "Alat musik logam dari Toraja yang digunakan dalam ritual dan acara keagamaan." },
  { name: "Coto Makassar", region: "Sulawesi", category: "Kuliner", popular: 8, img: "coto-makassar.jpg", desc: "Sup khas Makassar dengan bumbu rempah yang kompleks dan gurih, hidangan kaya tradisi." },
  { name: "Tari Poco-Poco", region: "Sulawesi", category: "Tarian", popular: 7, img: "poco-poco.jpg", desc: "Tarian rakyat modern Manado yang energik dan mudah dipelajari oleh semua kalangan." },

  /* BALI & NUSA TENGGARA (10) */
  { name: "Tari Kecak", region: "Bali & Nusa Tenggara", category: "Tarian", popular: 10, img: "kecak.jpg.jpg", desc: "Tarian Bali yang terkenal dengan paduan vokal 'cak' oleh sekelompok penari pria, menceritakan episode Ramayana." },
  { name: "Tari Barong", region: "Bali & Nusa Tenggara", category: "Tarian", popular: 9, img: "barong.jpg", desc: "Pertunjukan yang menampilkan karakter Barong (perwujudan kebaikan) melawan Rangda (perwujudan kejahatan)." },
  { name: "Penglipuran", region: "Bali & Nusa Tenggara", category: "Destinasi Budaya", popular: 8, img: "penglipuran.jpg", desc: "Desa adat Bali yang mempertahankan pola permukiman tradisional dan budaya leluhur secara kuat." },
  { name: "Tenun Gringsing", region: "Bali & Nusa Tenggara", category: "Kain Tradisional", popular: 7, img: "gringsing.jpg", desc: "Kain double-ikat yang memiliki makna magis dan ritus, berasal dari desa Tenganan." },
  { name: "Gamelan Bali", region: "Bali & Nusa Tenggara", category: "Alat Musik", popular: 9, img: "gamelan-bali.jpg", desc: "Orkestra tradisional Bali yang tak terpisahkan dari tarian dan upacara keagamaan." },
  { name: "Tari Legong", region: "Bali & Nusa Tenggara", category: "Tarian", popular: 9, img: "legong.jpg", desc: "Tarian Bali yang sangat elegan dan kompleks, memerlukan latihan bertahun-tahun untuk menguasainya." },
  { name: "Pura Besakih", region: "Bali & Nusa Tenggara", category: "Arsitektur", popular: 8, img: "besakih.jpg", desc: "Candi terbesar dan terpenting di Bali yang merupakan pusat kehidupan spiritual Hindu Bali." },
  { name: "Lontar Bali", region: "Bali & Nusa Tenggara", category: "Warisan Tradisional", popular: 7, img: "lontar.jpg", desc: "Naskah kuno Bali yang ditulis di atas daun lontar dengan filosofi dan pengetahuan mendalam." },
  { name: "Babi Guling", region: "Bali & Nusa Tenggara", category: "Kuliner", popular: 9, img: "babi-guling.jpg", desc: "Hidangan Bali ikonik berupa babi panggang dengan kulit krispi dan bumbu rempah kaya." },
  { name: "Tari Pendet", region: "Bali & Nusa Tenggara", category: "Tarian", popular: 8, img: "pendet.jpg", desc: "Tarian Bali yang sakral namun sering ditampilkan untuk menyambut tamu dengan hangat." },

  /* PAPUA (10) */
  { name: "Rumah Honai", region: "Papua", category: "Arsitektur", popular: 8, img: "honai.jpg", desc: "Rumah bulat tradisional suku Dani, berfungsi sebagai tempat tinggal dan simbol identitas komunitas." },
  { name: "Tifa", region: "Papua", category: "Alat Musik", popular: 9, img: "tifa.jpg", desc: "Alat musik pukul dari Papua yang menjadi pengiring tarian dan upacara adat." },
  { name: "Tari Yospan", region: "Papua", category: "Tarian", popular: 8, img: "yospan.jpg", desc: "Tarian populer Papua yang dinamis dan sering tampil pada acara hiburan rakyat." },
  { name: "Seni Ukir Asmat", region: "Papua", category: "Seni Patung", popular: 9, img: "asmat.jpg", desc: "Asmat terkenal dengan ukiran kayu yang kompleks, seringkali memiliki nilai spiritual." },
  { name: "Koteka", region: "Papua", category: "Atribut Adat", popular: 7, img: "koteka.jpg", desc: "Pakaian tradisional suku tertentu di Papua berupa penutup dari labu; memiliki konteks adat yang kuat." },
  { name: "Tari Poco-Poco Papua", region: "Papua", category: "Tarian", popular: 7, img: "poco-poco-papua.jpg", desc: "Variasi tarian rakyat Papua dengan gerakan energik dan iringan musik tradisional." },
  { name: "Noken Papua", region: "Papua", category: "Seni Kerajinan", popular: 8, img: "noken.jpg", desc: "Tas anyaman tradisional Papua yang dibuat dari tali kulit pohon dengan motif unik." },
  { name: "Rumah Kariwari", region: "Papua", category: "Arsitektur", popular: 7, img: "kariwari.jpg", desc: "Rumah adat Maluku-Papua dengan struktur panggung yang kokoh dan desain adaptif terhadap alam." },
  { name: "Papeda", region: "Papua", category: "Kuliner", popular: 8, img: "papeda.jpg", desc: "Hidangan tradisional Papua terbuat dari tepung sagu yang dimasak dengan kuah ikan atau kaldu gurih." },
  // 'Tari Tebus Sayap' (Papua) telah dihapus dari dataset.
];

/* ------------------ SELECTORS / DOM ------------------ */
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const navButtons = document.querySelectorAll(".nav-btn");
const headerContainer = document.querySelector(".header-inner") || document.body; // fallback

/* modal elements (from your HTML) */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalRegion = document.getElementById("modal-region");
const modalCategory = document.getElementById("modal-category");
const modalClose = document.getElementById("modal-close");

/* runtime controls we'll create */
let categorySelect = null;
let paginationContainer = null;

/* ------------------ STATE ------------------ */
let activeRegion = null;
let activeCategory = null;
let currentQuery = "";
let currentSort = sortSelect ? sortSelect.value : "popular";
let currentPage = 1;
const itemsPerPage = 12;

/* FAVORITES stored in localStorage */
const FAVORITES_KEY = "pelestarian_budaya_fav_v1";
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");

/* ------------------ HELPERS ------------------ */
const uniq = arr => [...new Set(arr)];
const truncate = (txt, n) => (txt && txt.length > n ? txt.slice(0, n - 1) + "…" : (txt || ""));
const saveFavorites = () => localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
const isFav = name => favorites.includes(name);
const toggleFavorite = name => {
  if (isFav(name)) favorites = favorites.filter(n => n !== name);
  else favorites.push(name);
  saveFavorites();
};

/* ------------------ UI: Global Favorite Icon (top-right) ------------------ */
function ensureGlobalFavIcon() {
  if (document.getElementById("global-fav-toggle")) return;
  const btn = document.createElement("button");
  btn.id = "global-fav-toggle";
  btn.title = "Tampilkan Favorit Saya";
  btn.className = "global-fav-toggle";
  btn.innerHTML = `☆ Favorit <span class="count">(${favorites.length})</span>`;
  btn.addEventListener("click", () => {
    // toggle mode
    const active = btn.classList.toggle("active");
    if (active) {
      // show favorites only
      const onlyFav = dataBudaya.filter(d => isFav(d.name));
      renderWithPagination(onlyFav);
      btn.innerHTML = `★ Favorit <span class="count">(${favorites.length})</span>`;
      btn.classList.add("mode-fav");
    } else {
      btn.innerHTML = `☆ Favorit <span class="count">(${favorites.length})</span>`;
      applyFiltersAndRender();
      btn.classList.remove("mode-fav");
    }
  });
  // small style placement: append to header-inner or body if missing
  headerContainer.appendChild(btn);
}

/* ------------------ CATEGORY SELECT ------------------ */
function renderCategoryFilter() {
  const controlsWrap = document.querySelector(".controls");
  if (!controlsWrap) return;
  if (document.getElementById("category-filter")) return;

  const cats = uniq(dataBudaya.map(d => d.category)).sort();
  categorySelect = document.createElement("select");
  categorySelect.id = "category-filter";
  categorySelect.innerHTML = `<option value="">Semua Kategori</option>` + cats.map(c => `<option value="${c}">${c}</option>`).join("");
  controlsWrap.insertBefore(categorySelect, sortSelect);

  categorySelect.addEventListener("change", () => {
    activeCategory = categorySelect.value || null;
    currentPage = 1;
    applyFiltersAndRender();
  });
}

/* ------------------ PAGINATION CONTAINER ------------------ */
function ensurePaginationContainer() {
  if (paginationContainer) return;
  paginationContainer = document.createElement("div");
  paginationContainer.id = "pagination";
  paginationContainer.className = "pagination";
  // place after gallery
  gallery.parentNode.insertBefore(paginationContainer, gallery.nextSibling);
}

/* ------------------ RENDER GALLERY (cards) ------------------ */
function renderGallery(dataList) {
  gallery.innerHTML = "";

  // slice for pagination
  const start = (currentPage - 1) * itemsPerPage;
  const pageItems = dataList.slice(start, start + itemsPerPage);

  // create cards
  pageItems.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "card fade card-tilt";
    card.setAttribute("data-name", item.name);

    // favorite mark on card if item favorited
    const favMark = isFav(item.name) ? `<span class="card-fav" aria-hidden="true">★</span>` : "";

    card.innerHTML = `
      <div class="card-media">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.popular >= 9 ? `<span class="badge">Populer</span>` : ""}
        ${favMark}
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-meta">${item.region} • ${item.category}</p>
        <p class="card-excerpt">${truncate(item.desc, 110)}</p>
      </div>
    `;

    // click opens modal (but ignore clicks on future interactive elements)
    card.addEventListener("click", (e) => {
      // if clicked on elements inside card that shouldn't open modal, ignore (none now except future)
      openModal(item);
    });

    // add subtle tilt effect
    addTilt(card);

    gallery.appendChild(card);
  });

  // animations
  fadeInCards();
  ensurePaginationContainer();
}

/* ------------------ RENDER PAGINATION BUTTONS ------------------ */
function renderPagination(totalItems) {
  ensurePaginationContainer();
  paginationContainer.innerHTML = "";
  const pages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  for (let p = 1; p <= pages; p++) {
    const b = document.createElement("button");
    b.className = p === currentPage ? "page page-active" : "page";
    b.textContent = p;
    b.addEventListener("click", () => {
      currentPage = p;
      applyFiltersAndRender();
      window.scrollTo({ top: gallery.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    });
    paginationContainer.appendChild(b);
  }
}

/* ------------------ FADE IN CARDS ------------------ */
function fadeInCards() {
  const cards = document.querySelectorAll(".card.fade");
  cards.forEach((c, i) => {
    c.style.opacity = "0";
    c.style.transform = "translateY(14px) scale(0.995)";
    c.style.transition = "all 520ms cubic-bezier(.16,.84,.38,1)";
    setTimeout(() => {
      c.style.opacity = "1";
      c.style.transform = "translateY(0) scale(1)";
    }, i * 70);
  });
}

/* ------------------ TILT EFFECT ------------------ */
function addTilt(el) {
  el.addEventListener("mousemove", e => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const cx = r.width / 2;
    const cy = r.height / 2;
    const rx = (y - cy) / -20;
    const ry = (x - cx) / 20;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
    el.style.transition = "transform .3s ease";
  });
}

/* ------------------ MODAL: create-fav-button if missing & open modal ------------------ */
function ensureModalFavButton() {
  if (document.getElementById("modal-fav-btn")) return;
  const btn = document.createElement("button");
  btn.id = "modal-fav-btn";
  btn.className = "modal-fav-btn";
  btn.type = "button";
  // place it inside modal-content top-right if exists, otherwise modal
  const content = modal.querySelector(".modal-content") || modal;
  content.insertBefore(btn, content.firstChild);
}

function openModal(item) {
  if (!modal) return;
  // ensure modal fav button exists
  ensureModalFavButton();
  const modalFavBtn = document.getElementById("modal-fav-btn");

  modalTitle.textContent = item.name || "";
  if (modalImg) {
    modalImg.src = item.img || "";
    modalImg.alt = item.name || "";
  }
  modalDesc.textContent = item.desc || "";
  modalRegion.textContent = item.region || "";
  modalCategory.textContent = item.category || "";

  // set fav button text and class
  const isFavorited = isFav(item.name);
  modalFavBtn.textContent = isFavorited ? "★ Sudah di Favorit" : "☆ Tambah ke Favorit";
  modalFavBtn.classList.toggle("favorited", isFavorited);
  modalFavBtn.onclick = (e) => {
    e.stopPropagation();
    toggleFavorite(item.name);
    // update UI after toggling
    const nowFavorited = isFav(item.name);
    modalFavBtn.textContent = nowFavorited ? "★ Sudah di Favorit" : "☆ Tambah ke Favorit";
    modalFavBtn.classList.toggle("favorited", nowFavorited);
    updateGlobalFavCount();
    // small pop animation
    modalFavBtn.animate([{ transform: "scale(0.9)" }, { transform: "scale(1.05)" }, { transform: "scale(1)" }], { duration: 300 });
    // refresh gallery (to show star on cards)
    applyFiltersAndRender();
  };

  // show modal with animation
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 20);

  // focus close button for accessibility
  setTimeout(() => {
    if (modalClose) modalClose.focus();
  }, 80);
}

/* close modal handlers */
if (modalClose) {
  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => { modal.style.display = "none"; }, 240);
  });
}
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => { modal.style.display = "none"; }, 240);
  }
});

/* ------------------ FILTER / SEARCH / SORT FLOW ------------------ */
function applyFiltersAndRender() {
  // build filtered list
  let filtered = [...dataBudaya];

  // region filter
  if (activeRegion) filtered = filtered.filter(i => i.region === activeRegion);

  // category filter
  if (activeCategory) filtered = filtered.filter(i => i.category === activeCategory);

  // search
  if (currentQuery && currentQuery.trim() !== "") {
    const q = currentQuery.toLowerCase();
    filtered = filtered.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q) ||
      i.region.toLowerCase().includes(q) ||
      (i.desc && i.desc.toLowerCase().includes(q))
    );
  }

  // sort
  if (currentSort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
  else if (currentSort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));
  else filtered.sort((a, b) => (b.popular || 0) - (a.popular || 0));

  // render pagination + gallery
  renderWithPagination(filtered);
}

/* helper that renders gallery + pagination for a given list */
function renderWithPagination(list) {
  // if currentPage is out of range after filters, reset
  const pages = Math.max(1, Math.ceil(list.length / itemsPerPage));
  if (currentPage > pages) currentPage = 1;

  renderGallery(list);
  renderPagination(list.length);
  updateGlobalFavCount();
}

/* ------------------ NAV BUTTONS (region filter) ------------------ */
function initNavButtons() {
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeRegion = btn.dataset.region || null;
      currentPage = 1;
      applyFiltersAndRender();
      // scroll to gallery
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ------------------ SEARCH & SORT EVENTS ------------------ */
if (searchInput) {
  searchInput.addEventListener("input", e => {
    currentQuery = e.target.value || "";
    currentPage = 1;
    applyFiltersAndRender();
  });
}
if (sortSelect) {
  sortSelect.addEventListener("change", e => {
    currentSort = e.target.value;
    applyFiltersAndRender();
  });
}

/* ------------------ GLOBAL DARK MODE TOGGLE (if exists) ------------------ */
function initDarkToggle() {
  const dt = document.getElementById("dark-mode-toggle");
  if (!dt) return;
  const saved = localStorage.getItem("pelestarian_dark") || "off";
  if (saved === "on") document.body.classList.add("dark");
  dt.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("pelestarian_dark", document.body.classList.contains("dark") ? "on" : "off");
  });
}

/* ------------------ UPDATE GLOBAL FAVORITE COUNT (UI) ------------------ */
function updateGlobalFavCount() {
  const g = document.getElementById("global-fav-toggle");
  if (!g) return;
  const countSpan = g.querySelector(".count");
  if (countSpan) countSpan.textContent = `(${favorites.length})`;
}

/* ------------------ SKELETON LOADING (small) ------------------ */
function showSkeleton() {
  gallery.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    const sk = document.createElement("div");
    sk.className = "skeleton-card";
    sk.innerHTML = `<div class="sk-img"></div><div class="sk-line"></div><div class="sk-line short"></div>`;
    gallery.appendChild(sk);
  }
}

/* ------------------ INITIALIZATION ------------------ */
function init() {
  // safety: ensure containers exist
  if (!gallery) return console.warn("Gallery container (#gallery) not found.");

  // UI elements we manage
  renderCategoryFilter();
  ensureGlobalFavIcon();
  ensurePaginationContainer();
  initNavButtons();
  initDarkToggle();

  // show skeleton then render
  showSkeleton();
  setTimeout(() => {
    applyFiltersAndRender();
  }, 450);

  // footer year if exists
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // expose for debug
  window._dataBudaya = dataBudaya;
  window._favorites = favorites;
  window._applyFiltersAndRender = applyFiltersAndRender;
}

init();

/* ------------------ QUIZ FEATURE ------------------ */
const quizQuestions = [
  {
    question: "Tari Saman berasal dari daerah mana?",
    options: ["Sumatra Barat", "Aceh", "Jawa Timur", "Bali"],
    correct: 1,
    explanation: "Tari Saman adalah tarian tradisional dari Aceh, Sumatra, yang terkenal dengan kekompakan dan tempo cepat."
  },
  {
    question: "Apa yang membuat Batik menjadi warisan budaya dunia?",
    options: ["Teknik pewarnaan dengan malam", "Motif geometris", "Warna-warni cerah", "Bahan katun"],
    correct: 0,
    explanation: "Batik diakui UNESCO sebagai warisan budaya takbenda karena teknik pewarnaan kain dengan malam (lilin) yang menghasilkan motif simbolik."
  },
  {
    question: "Rumah adat Tongkonan khas dari suku mana?",
    options: ["Dayak", "Toraja", "Minangkabau", "Bugis"],
    correct: 1,
    explanation: "Tongkonan adalah rumah adat suku Toraja di Sulawesi Selatan dengan atap melengkung yang menjadi pusat aktivitas sosial dan adat."
  },
  {
    question: "Alat musik Angklung berasal dari daerah mana?",
    options: ["Bali", "Jawa Barat", "Sumatra", "Papua"],
    correct: 1,
    explanation: "Angklung adalah alat musik bambu dari Jawa Barat yang dimainkan berkelompok dan mengajarkan kolaborasi."
  },
  {
    question: "Tari Kecak terkenal dengan paduan vokal apa?",
    options: ["'Cak' oleh penari pria", "'O' oleh penari wanita", "'Gong' dengan instrumen", "'Saman' dengan gerakan"],
    correct: 0,
    explanation: "Tari Kecak dari Bali terkenal dengan paduan vokal 'cak' oleh sekelompok penari pria, menceritakan episode Ramayana."
  },
  {
    question: "Apa fungsi utama Rumah Honai bagi suku Dani?",
    options: ["Tempat ibadah", "Tempat tinggal dan simbol identitas", "Tempat penyimpanan makanan", "Tempat pertemuan adat"],
    correct: 1,
    explanation: "Rumah Honai adalah rumah bulat tradisional suku Dani di Papua yang berfungsi sebagai tempat tinggal dan simbol identitas komunitas."
  },
  {
    question: "Rendang adalah masakan khas dari daerah mana?",
    options: ["Aceh", "Minangkabau", "Toraja", "Dayak"],
    correct: 1,
    explanation: "Rendang adalah masakan khas Minangkabau dari Sumatra Barat, kaya rempah dan menjadi ikon kuliner Indonesia di dunia."
  },
  {
    question: "Apa yang melambangkan Tari Piring?",
    options: ["Kekompakan keluarga", "Rasa syukur", "Perang melawan penjajah", "Ritual pemakaman"],
    correct: 1,
    explanation: "Tari Piring dari Sumatra Barat menggunakan piring sebagai properti dan menampilkan gerakan akrobatik yang melambangkan rasa syukur."
  },
  {
    question: "Wayang Kulit diakui oleh UNESCO sebagai warisan budaya apa?",
    options: ["Warisan budaya benda", "Warisan budaya takbenda", "Warisan arsitektur", "Warisan kuliner"],
    correct: 1,
    explanation: "Wayang Kulit adalah pertunjukan pewayangan yang memadukan seni cerita, musik, dan filosofi kehidupan, diakui UNESCO sebagai warisan budaya takbenda."
  },
  {
    question: "Apa nama upacara pemakaman terkenal dari suku Toraja?",
    options: ["Tiwah", "Rambu Solo", "Ngaben", "Ngadeg"],
    correct: 1,
    explanation: "Rambu Solo adalah upacara pemakaman Toraja yang terkenal dengan prosesi besar dan simbol-simbol budaya yang kuat."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizStarted = false;

/* ------------------ QUIZ FUNCTIONS ------------------ */
function startQuiz() {
  quizStarted = true;
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  
  const startScreen = document.getElementById('quiz-start');
  const quizBox = document.getElementById('quiz-box');
  
  // Hide start screen with animation
  startScreen.style.opacity = '0';
  startScreen.style.transform = 'translateY(20px)';
  startScreen.style.pointerEvents = 'none';
  startScreen.style.transition = 'all 0.3s ease-out';
  
  setTimeout(() => {
    startScreen.style.display = 'none';
    quizBox.innerHTML = '';
    showQuestion();
  }, 300);
}

function showQuestion() {
  const quizBox = document.getElementById('quiz-box');
  const question = quizQuestions[currentQuestionIndex];

  quizBox.innerHTML = `
    <div class="quiz-question">
      <h3>Pertanyaan ${currentQuestionIndex + 1} dari ${quizQuestions.length}</h3>
      <p class="question-text">${question.question}</p>
      <div class="options">
        ${question.options.map((option, index) => `
          <button class="option-btn" data-index="${index}">${option}</button>
        `).join('')}
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${(currentQuestionIndex + 1) / quizQuestions.length * 100}%"></div>
      </div>
    </div>
  `;

  // Add event listeners to options
  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      const selectedIndex = parseInt(e.target.dataset.index);
      
      // Disable all buttons
      document.querySelectorAll('.option-btn').forEach(b => {
        b.style.pointerEvents = 'none';
        b.style.opacity = '0.6';
      });
      
      // Highlight selected and correct option
      const question = quizQuestions[currentQuestionIndex];
      btn.classList.add('selected');
      
      // Show result after slight delay
      setTimeout(() => {
        checkAnswer(selectedIndex);
      }, 400);
    });
  });
}

function checkAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === question.correct;
  const optionBtns = document.querySelectorAll('.option-btn');
  
  userAnswers.push({
    question: question.question,
    selected: selectedIndex,
    correct: question.correct,
    isCorrect: isCorrect
  });

  if (isCorrect) score++;

  // Animate correct/incorrect options
  optionBtns.forEach((btn, idx) => {
    if (idx === question.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });

  // Show feedback after animation
  setTimeout(() => {
    showFeedback(isCorrect, question.explanation);
  }, 800);
}

function showFeedback(isCorrect, explanation) {
  const quizBox = document.getElementById('quiz-box');
  const feedbackClass = isCorrect ? 'correct' : 'incorrect';
  const feedbackText = isCorrect ? '✓ Benar!' : '✗ Salah!';

  const feedbackHTML = `
    <div class="feedback ${feedbackClass}">
      <h4>${feedbackText}</h4>
      <p>${explanation}</p>
      <button id="next-btn" class="next-btn">Lanjut ke Soal Berikutnya →</button>
    </div>
  `;

  quizBox.innerHTML += feedbackHTML;
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizBox = document.getElementById('quiz-box');
  const percentage = Math.round((score / quizQuestions.length) * 100);

  let resultsHTML = `
    <div class="quiz-results">
      <h3>Kuis Selesai!</h3>
      <div class="score-display">
        <div class="score-circle">
          <div>
            <span class="score-number">${score}</span>
            <span class="score-total">/${quizQuestions.length}</span>
          </div>
        </div>
        <p class="score-percentage">${percentage}%</p>
      </div>
      <p class="score-message">${getScoreMessage(percentage)}</p>
      <div class="results-summary">
        <h4>📊 Ringkasan Jawaban:</h4>
        <ul>
          ${userAnswers.map((answer, index) => `
            <li>
              <strong>P${index + 1}:</strong> 
              ${answer.isCorrect ? '<span class="correct-mark">✓</span>' : '<span class="incorrect-mark">✗</span>'} 
              ${quizQuestions[index].options[answer.selected]}
            </li>
          `).join('')}
        </ul>
      </div>
      <button id="restart-quiz" class="retry-btn">🔄 Coba Lagi</button>
    </div>
  `;

  quizBox.innerHTML = resultsHTML;
  document.getElementById('restart-quiz').addEventListener('click', restartQuiz);
}

function restartQuiz() {
  // Reset state
  quizStarted = false;
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  
  // Show start screen again
  const startScreen = document.getElementById('quiz-start');
  const quizBox = document.getElementById('quiz-box');
  
  startScreen.style.display = 'block';
  startScreen.style.opacity = '0';
  startScreen.style.transform = 'translateY(20px)';
  startScreen.style.pointerEvents = 'auto';
  
  quizBox.innerHTML = '';
  
  // Animate in
  setTimeout(() => {
    startScreen.style.transition = 'all 0.3s ease-out';
    startScreen.style.opacity = '1';
    startScreen.style.transform = 'translateY(0)';
  }, 10);
}

function getScoreMessage(percentage) {
  if (percentage >= 90) return "🌟 Luar biasa! Anda ahli budaya Indonesia!";
  if (percentage >= 80) return "👏 Bagus sekali! Pengetahuan Anda tentang budaya Indonesia sangat baik.";
  if (percentage >= 70) return "📚 Cukup baik! Terus pelajari budaya Indonesia.";
  if (percentage >= 60) return "💪 Lumayan! Ada ruang untuk belajar lebih banyak.";
  return "🎯 Mari belajar lebih banyak tentang budaya Indonesia!";
}

/* ------------------ QUIZ EVENT LISTENERS ------------------ */
document.getElementById('start-quiz').addEventListener('click', startQuiz);
