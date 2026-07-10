// =========================
// DATA NOVEL BAWAAN
// =========================
const defaultStories = [
  {
    id: "story_1",
    title: "Hujan di Balik Jendela",
    genre: "Romance",
    episodes: 24,
    author: "Aksara Senja",
    desc: "Pertemuan tak sengaja di halte saat hujan turun membuat dua orang asing saling menemukan tempat pulang.",
    content: `Malam itu hujan turun tanpa aba-aba.
Aku berdiri di bawah halte kecil, memeluk tas yang sudah setengah basah. Kota terasa terlalu ramai untuk seseorang yang sedang ingin menghilang. Dari arah jalan, seorang perempuan berjaket abu-abu menoleh ke arahku, lalu tersenyum tipis seperti seseorang yang baru saja menemukan alasan untuk bertahan.

“Aku kira cuma aku yang masih menunggu hujan reda,” katanya.

Aku menoleh, ragu menjawab. Tapi entah kenapa, suaranya terdengar hangat di tengah udara yang dingin.

“Aku juga,” jawabku pelan.

Malam itu seharusnya biasa saja. Namun dari halte kecil yang hampir rubuh, cerita kami dimulai.`,
    badge: "Trending",
    readers: 18231,
    rating: 4.9,
    coverGradient: "linear-gradient(135deg,#00d564,#0f3b2a)"
  },
  {
    id: "story_2",
    title: "Lorong Jam 2 Pagi",
    genre: "Horor",
    episodes: 18,
    author: "Malam Putih",
    desc: "Seorang penghuni kos mulai mendengar langkah kaki di lorong setiap pukul 2 pagi, padahal semua kamar terkunci rapat.",
    content: `Kos tua itu selalu sepi setelah tengah malam.
Tapi sejak minggu pertama aku pindah, selalu ada suara langkah kaki di lorong tepat pukul dua pagi. Pelan. Berat. Menyeret.

Awalnya aku mengira itu penghuni lain. Sampai suatu malam aku membuka pintu dan melihat lorong kosong, lampu kuning redup, dan jejak kaki basah mengarah ke kamarku.`,
    badge: "Horor",
    readers: 12002,
    rating: 4.8,
    coverGradient: "linear-gradient(135deg,#7f1d1d,#111827)"
  },
  {
    id: "story_3",
    title: "Sisa Cahaya di Ujung Senja",
    genre: "Drama",
    episodes: 31,
    author: "Ruang Hening",
    desc: "Tentang kehilangan, keluarga, dan keberanian untuk memulai hidup baru setelah semuanya runtuh.",
    content: `Ayah pergi tanpa sempat mengucapkan selamat tinggal.
Rumah yang dulu terasa hangat mendadak menjadi ruangan-ruangan dingin penuh kenangan. Di meja makan, cangkir kesukaannya masih ada. Di teras, sandal tuanya belum dipindahkan siapa pun.

Ibu bilang hidup harus terus berjalan. Tapi tidak ada yang benar-benar mengajarkan caranya.`,
    badge: "Drama",
    readers: 9510,
    rating: 4.7,
    coverGradient: "linear-gradient(135deg,#f59e0b,#7c2d12)"
  },
  {
    id: "story_4",
    title: "Putri dari Negeri Kabut",
    genre: "Fantasi",
    episodes: 40,
    author: "Nawa Langit",
    desc: "Gadis biasa yang ternyata mewarisi darah kerajaan kuno dan harus memilih antara dunia manusia atau negeri kabut.",
    content: `Kabut turun terlalu cepat pagi itu.
Saat semua orang berlari menutup jendela, aku justru melihat sosok perempuan berjubah putih berdiri di tengah halaman. Matanya menatapku seolah telah menunggu sangat lama.

“Waktumu pulang sudah tiba,” katanya.

Aku tertawa gugup. Sampai kalung di leherku mulai menyala.`,
    badge: "Fantasi",
    readers: 20311,
    rating: 4.9,
    coverGradient: "linear-gradient(135deg,#4f46e5,#1e1b4b)"
  },
  {
    id: "story_5",
    title: "Catatan Kecil untuk Bulan",
    genre: "Slice of Life",
    episodes: 16,
    author: "Biru Pagi",
    desc: "Kisah sederhana tentang luka, kopi, dan surat-surat kecil yang tak pernah benar-benar dikirim.",
    content: `Aku mulai menulis surat untuk bulan sejak hari kau pergi.
Bukan karena aku berharap bulan membalas, tapi karena hanya itu cara yang kupunya untuk menaruh rindu di tempat yang tidak akan menghakimi.`,
    badge: "Rekomendasi",
    readers: 7402,
    rating: 4.6,
    coverGradient: "linear-gradient(135deg,#0ea5e9,#1e3a8a)"
  },
  {
    id: "story_6",
    title: "Rumah Tanpa Pintu",
    genre: "Misteri",
    episodes: 22,
    author: "Damar Hitam",
    desc: "Sebuah rumah tua di ujung desa menyimpan rahasia puluhan tahun yang tak pernah berani dibongkar siapa pun.",
    content: `Orang-orang desa selalu bilang rumah itu tak punya pintu.
Padahal aku melihatnya sendiri: pintu kayu tua, berukir aneh, setengah terbuka. Begitu kakiku melangkah masuk, udara berubah dingin, dan suara ibuku terdengar memanggil dari ruangan paling gelap.`,
    badge: "Misteri",
    readers: 11034,
    rating: 4.8,
    coverGradient: "linear-gradient(135deg,#374151,#111827)"
  }
];

// =========================
// HELPERS STORAGE
// =========================
function getStoredStories() {
  const custom = JSON.parse(localStorage.getItem("ceritaku_custom_stories")) || [];
  return [...custom, ...defaultStories];
}

function getFavorites() {
  return JSON.parse(localStorage.getItem("ceritaku_favorites")) || [];
}

function saveFavorites(data) {
  localStorage.setItem("ceritaku_favorites", JSON.stringify(data));
}

function isLoggedIn() {
  return localStorage.getItem("ceritaku_logged_in") === "true";
}

function getUsername() {
  return localStorage.getItem("ceritaku_username") || "Pengguna";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

// =========================
// LOGIN PAGE LOGIC
// =========================
function initLoginPage() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");
  const togglePassword = document.getElementById("togglePassword");
  const backHomeBtn = document.getElementById("backHomeBtn");
  const demoGoogleBtn = document.getElementById("demoGoogleBtn");

  const savedUser = localStorage.getItem("ceritaku_saved_user");
  const savedRemember = localStorage.getItem("ceritaku_saved_remember");

  if (savedRemember === "true" && savedUser) {
    username.value = savedUser;
    rememberMe.checked = true;
  }

  togglePassword?.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      togglePassword.textContent = "🙈";
    } else {
      password.type = "password";
      togglePassword.textContent = "👁️";
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userVal = username.value.trim();
    const passVal = password.value.trim();

    if (!userVal) {
      showToast("Masukkan email atau username dulu.");
      return;
    }

    if (passVal.length < 6) {
      showToast("Password minimal 6 karakter.");
      return;
    }

    localStorage.setItem("ceritaku_logged_in", "true");
    localStorage.setItem("ceritaku_username", userVal);

    if (rememberMe.checked) {
      localStorage.setItem("ceritaku_saved_user", userVal);
      localStorage.setItem("ceritaku_saved_remember", "true");
    } else {
      localStorage.removeItem("ceritaku_saved_user");
      localStorage.removeItem("ceritaku_saved_remember");
    }

    showToast("Login berhasil. Mengarahkan ke beranda...");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 900);
  });

  demoGoogleBtn?.addEventListener("click", () => {
    showToast("Login Google masih mode demo:(.");
  });

  backHomeBtn?.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

// =========================
// AUTH UI DI HOME
// =========================
function renderAuthUI() {
  const authBox = document.getElementById("authBox");
  if (!authBox) return;

  if (isLoggedIn()) {
    const username = getUsername();
    const firstLetter = username.charAt(0).toUpperCase();

    authBox.innerHTML = `
      <div class="user-chip">
        <div class="user-avatar">${firstLetter}</div>
        <div class="user-info">
          <strong>${username}</strong>
          <span>Selamat membaca</span>
        </div>
      </div>
      <button class="auth-btn" id="writerBtn">Tulis</button>
      <button class="logout-btn" id="logoutBtn">Logout</button>
    `;

    document.getElementById("writerBtn")?.addEventListener("click", () => {
  window.location.href = "writer.html";
});

    document.getElementById("logoutBtn")?.addEventListener("click", () => {
      localStorage.removeItem("ceritaku_logged_in");
      localStorage.removeItem("ceritaku_username");
      renderAuthUI();
      showToast("Kamu berhasil logout.");
    });
  } else {
    authBox.innerHTML = `
      <button class="auth-btn" id="loginBtn">Masuk</button>
      <button class="auth-btn primary" id="registerBtn">Daftar</button>
    `;

    document.getElementById("loginBtn")?.addEventListener("click", () => {
      window.location.href = "login.html";
    });

    document.getElementById("registerBtn")?.addEventListener("click", () => {
      showToast("Halaman daftar belum dibuat.");
    });
  }
}

// =========================
// RENDER NOVEL
// =========================
function renderStories(filterGenre = "Semua", searchKeyword = "") {
  const storyGrid = document.getElementById("storyGrid");
  if (!storyGrid) return;

  const stories = getStoredStories();
  const favorites = getFavorites();

  let filtered = stories.filter((story) => {
    const matchGenre = filterGenre === "Semua" ? true : story.genre === filterGenre;
    const matchSearch = story.title.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchGenre && matchSearch;
  });

  if (filtered.length === 0) {
    storyGrid.innerHTML = `
      <div class="empty-state">
        Tidak ada novel yang cocok dengan pencarian atau genre yang kamu pilih.
      </div>
    `;
    updateStats(stories.length, favorites.length);
    return;
  }

  storyGrid.innerHTML = filtered.map((story) => {
    const isFav = favorites.includes(story.id);
    const coverStyle = story.cover
      ? `background:linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.45)), url('${story.cover}') center/cover;`
      : `background:${story.coverGradient || "linear-gradient(135deg,#00d564,#0f3b2a)"};`;

    return `
      <article class="story-card">
        <div class="story-cover" style="${coverStyle}">
          <span class="top-label">${story.badge || "Novel"}</span>
          <div class="story-title-cover">${story.title}</div>
        </div>
        <div class="story-body">
          <div class="story-top">
            <h3>${story.title}</h3>
            <span class="rating">★ ${story.rating}</span>
          </div>
          <p class="story-meta">${story.genre} • ${story.episodes} Bab • ${story.author || "Penulis"}</p>
          <p class="story-desc">${story.desc}</p>
          <div class="story-footer">
            <span>${story.readers || 0} pembaca</span>
            <div class="story-actions">
              <button class="small-btn fav ${isFav ? "active" : ""}" data-fav="${story.id}">
                ${isFav ? "❤ Favorit" : "♡ Favorit"}
              </button>
              <button class="small-btn read"
                data-read="${story.id}"
                data-title="${story.title}"
                data-genre="${story.genre}"
                data-episode="Bab 1"
                data-content="${story.content.replace(/"/g, '&quot;')}">
                Baca
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  bindFavoriteButtons();
  bindReadButtons();
  updateStats(stories.length, favorites.length);
}

function updateStats(totalStories, totalFavorites) {
  const statNovel = document.getElementById("statNovel");
  const statFav = document.getElementById("statFav");
  if (statNovel) statNovel.textContent = totalStories;
  if (statFav) statFav.textContent = totalFavorites;
}

// =========================
// FAVORIT
// =========================
function bindFavoriteButtons() {
  document.querySelectorAll("[data-fav]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const storyId = btn.getAttribute("data-fav");
      let favorites = getFavorites();

      if (favorites.includes(storyId)) {
        favorites = favorites.filter((id) => id !== storyId);
        showToast("Novel dihapus dari favorit.");
      } else {
        favorites.push(storyId);
        showToast("Novel disimpan ke favorit.");
      }

      saveFavorites(favorites);
      renderStories(getActiveGenre(), getCurrentSearch());
      renderFavorites();
    });
  });
}

function renderFavorites() {
  const favoriteList = document.getElementById("favoriteList");
  if (!favoriteList) return;

  const stories = getStoredStories();
  const favorites = getFavorites();
  const favStories = stories.filter((story) => favorites.includes(story.id));

  if (favStories.length === 0) {
    favoriteList.innerHTML = `
      <div class="empty-state">
        Belum ada novel favorit. Tekan tombol ❤ di kartu novel untuk menyimpan.
      </div>
    `;
    return;
  }

  favoriteList.innerHTML = favStories.map((story) => `
    <div class="favorite-item">
      <h4>${story.title}</h4>
      <p>${story.genre} • ${story.episodes} Bab • ${story.author || "Penulis"}</p>
      <p style="margin-top:8px;">${story.desc}</p>
    </div>
  `).join("");
}

// =========================
// READER MODAL
// =========================
function bindReadButtons() {
  document.querySelectorAll("[data-read]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-title") || "Judul Novel";
      const genre = btn.getAttribute("data-genre") || "Genre";
      const episode = btn.getAttribute("data-episode") || "Bab 1";
      const content = btn.getAttribute("data-content") || "Isi cerita belum tersedia.";

      const readerTitle = document.getElementById("readerTitle");
      const readerMeta = document.getElementById("readerMeta");
      const readerText = document.getElementById("readerText");
      const readerModal = document.getElementById("readerModal");

      if (!readerModal || !readerTitle || !readerMeta || !readerText) return;

      readerTitle.textContent = title;
      readerMeta.textContent = `${genre} • ${episode}`;
      readerText.textContent = content;
      readerModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });
}

function initReaderModal() {
  const readerModal = document.getElementById("readerModal");
  const closeReaderBtn = document.getElementById("closeReaderBtn");
  if (!readerModal || !closeReaderBtn) return;

  function closeReader() {
    readerModal.classList.remove("show");
    document.body.style.overflow = "";
  }

  closeReaderBtn.addEventListener("click", closeReader);
  readerModal.addEventListener("click", (e) => {
    if (e.target === readerModal) closeReader();
  });
}

// =========================
// SEARCH
// =========================
let currentSearch = "";
let currentGenre = "Semua";

function getCurrentSearch() {
  return currentSearch;
}

function getActiveGenre() {
  return currentGenre;
}

function initSearch() {
  const openSearchBtn = document.getElementById("openSearchBtn");
  const closeSearchBtn = document.getElementById("closeSearchBtn");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const searchResult = document.getElementById("searchResult");

  if (!searchOverlay) return;

  function openSearch() {
    searchOverlay.classList.add("show");
    setTimeout(() => searchInput?.focus(), 100);
  }

  function closeSearch() {
    searchOverlay.classList.remove("show");
  }

  openSearchBtn?.addEventListener("click", openSearch);
  closeSearchBtn?.addEventListener("click", closeSearch);

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  searchInput?.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const stories = getStoredStories().filter((story) =>
      story.title.toLowerCase().includes(keyword)
    );

    currentSearch = keyword;
    renderStories(currentGenre, currentSearch);

    if (!keyword) {
      searchResult.innerHTML = `<div class="empty-state">Ketik judul novel untuk mencari.</div>`;
      return;
    }

    if (stories.length === 0) {
      searchResult.innerHTML = `<div class="empty-state">Novel tidak ditemukan.</div>`;
      return;
    }

    searchResult.innerHTML = stories.map((story) => `
      <div class="search-item">
        <h4>${story.title}</h4>
        <p>${story.genre} • ${story.episodes} Bab • ${story.author || "Penulis"}</p>
        <p style="margin-top:8px;">${story.desc}</p>
      </div>
    `).join("");
  });
}

// =========================
// GENRE FILTER
// =========================
function initGenreFilter() {
  const chips = document.querySelectorAll(".genre-chip");
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentGenre = chip.getAttribute("data-genre") || "Semua";
      renderStories(currentGenre, currentSearch);
    });
  });
}

// =========================
// THEME
// =========================
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("ceritaku_theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("ceritaku_theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });
}

// =========================
// BOTTOM NAV + HERO BTN
// =========================
function initNavigation() {
  document.querySelectorAll(".bottom-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".bottom-item").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.getElementById("startReadingBtn")?.addEventListener("click", () => {
    document.getElementById("populer")?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("openGenreBtn")?.addEventListener("click", () => {
    document.getElementById("genre")?.scrollIntoView({ behavior: "smooth" });
  });
}

// =========================
// INIT HOME
// =========================
function initHomePage() {
  if (!document.getElementById("storyGrid")) return;
  renderAuthUI();
  renderStories();
  renderFavorites();
  initReaderModal();
  initSearch();
  initGenreFilter();
  initTheme();
  initNavigation();
}

// =========================
// START
// =========================
document.addEventListener("DOMContentLoaded", () => {
  initLoginPage();
  initHomePage();
});