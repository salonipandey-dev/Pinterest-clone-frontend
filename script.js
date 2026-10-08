/* =============================================
   PINSPIRE – MAIN JAVASCRIPT
   ============================================= */

"use strict";

/* ==========================================
   DATA – PIN DATASET
   ========================================== */
const PINS_DATA = [
  { id:1,  title:"Minimal Japanese Interior",          desc:"A serene wabi-sabi living room blending natural textures, shoji screens, and clean lines that whisper tranquility.",        category:"interior",      img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600", user:"Yuki Tanaka",    avatar:"https://i.pravatar.cc/40?img=1",  likes:1243, tags:["minimal","japanese","interior","zen"] },
  { id:2,  title:"Golden Hour Travel Vibes",           desc:"Chasing the warm amber light across the Moroccan desert as the sun dips below the dunes.",                                 category:"travel",        img:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600", user:"Emma Ray",       avatar:"https://i.pravatar.cc/40?img=5",  likes:874,  tags:["travel","desert","golden-hour","morocco"] },
  { id:3,  title:"Abstract Acrylic Pour Art",          desc:"Hypnotic swirls of coral, navy, and gold created with a fluid acrylic pour technique on a 60x80cm canvas.",               category:"art",           img:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600", user:"Carlos Vega",    avatar:"https://i.pravatar.cc/40?img=12", likes:2187, tags:["art","abstract","acrylic","pour"] },
  { id:4,  title:"Avocado Toast Upgrade",              desc:"Next-level smashed avo on sourdough: heirloom tomatoes, micro herbs, chilli flakes and a perfectly runny poached egg.",    category:"food",          img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600", user:"Priya Sharma",   avatar:"https://i.pravatar.cc/40?img=9",  likes:631,  tags:["food","brunch","avocado","recipe"] },
  { id:5,  title:"Brutalist Architecture Detail",      desc:"Raw concrete geometry of Le Corbusier's Unité d'Habitation, a masterclass in bold shadow and sculptural form.",           category:"architecture",  img:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600", user:"Tom Klein",      avatar:"https://i.pravatar.cc/40?img=15", likes:3401, tags:["architecture","brutalist","concrete","corbusier"] },
  { id:6,  title:"Autumn Forest Trail",                desc:"A mossy path carpeted with fallen maple leaves winds through old-growth forest at peak October colour.",                   category:"nature",        img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600", user:"Sienna Ross",    avatar:"https://i.pravatar.cc/40?img=20", likes:952,  tags:["nature","forest","autumn","trail"] },
  { id:7,  title:"Editorial Fashion Shoot",            desc:"Bold oversized trench coat in caramel, styled against a brutalist concrete wall for maximum contrast.",                    category:"fashion",       img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600", user:"Lena Müller",    avatar:"https://i.pravatar.cc/40?img=25", likes:1560, tags:["fashion","editorial","trench","style"] },
  { id:8,  title:"Coastal Sunrise Photography",        desc:"30-second long exposure captures silky sea motion against jagged dark rocks at first light on the Cornish coast.",        category:"photography",   img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600", user:"James Park",     avatar:"https://i.pravatar.cc/40?img=33", likes:4120, tags:["photography","seascape","sunrise","longexposure"] },
  { id:9,  title:"Home Yoga Space Inspo",              desc:"A sunlit corner transformed: linen curtains, bamboo mat, jade plant and a bowl of polished stones — your daily retreat.",   category:"fitness",       img:"https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600", user:"Mia Chen",       avatar:"https://i.pravatar.cc/40?img=47", likes:788,  tags:["yoga","fitness","home","wellness"] },
  { id:10, title:"Ramen Night",                        desc:"Tonkotsu broth simmered for 18 hours, crowned with chashu pork, soft egg, nori and a slick of chilli oil.",               category:"food",          img:"https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600", user:"Kenji Ito",      avatar:"https://i.pravatar.cc/40?img=52", likes:2093, tags:["food","ramen","japanese","recipe"] },
  { id:11, title:"Kyoto Bamboo Grove",                 desc:"Walking through Arashiyama's towering bamboo at dawn, when the light filters in shafts through the canopy.",              category:"travel",        img:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600", user:"Hana Mizuki",    avatar:"https://i.pravatar.cc/40?img=44", likes:5380, tags:["travel","japan","kyoto","bamboo"] },
  { id:12, title:"Ink & Wash Portrait",                desc:"A loose sumi-e ink portrait capturing gesture and emotion in five confident brushstrokes.",                                category:"art",           img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", user:"Diego Ramos",    avatar:"https://i.pravatar.cc/40?img=57", likes:1670, tags:["art","ink","portrait","sumi-e"] },
  { id:13, title:"Scandinavian Kitchen",               desc:"White oak cabinetry, olive green tiles, beeswax candles and a copper kettle — Hygge made architectural.",                  category:"interior",      img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600", user:"Astrid Berg",    avatar:"https://i.pravatar.cc/40?img=60", likes:2341, tags:["interior","kitchen","scandi","hygge"] },
  { id:14, title:"Street Style Lookbook",              desc:"Oversized denim, vintage band tee, chunky white sneakers and the perfect Tokyo alley as a backdrop.",                     category:"fashion",       img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600", user:"Zara Jin",       avatar:"https://i.pravatar.cc/40?img=62", likes:1882, tags:["fashion","streetstyle","denim","lookbook"] },
  { id:15, title:"Misty Mountain Trek",                desc:"Above the clouds on a pre-dawn alpine ridge — the valley below vanishes into white silence.",                             category:"nature",        img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600", user:"Luca Ferretti",  avatar:"https://i.pravatar.cc/40?img=65", likes:6742, tags:["nature","mountains","hiking","mist"] },
  { id:16, title:"Geometric Architecture",             desc:"The diamond-faceted facade of the Louvre Pyramid at dusk, refracting the last salmon light of day.",                      category:"architecture",  img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600", user:"Marc Leblanc",   avatar:"https://i.pravatar.cc/40?img=67", likes:2955, tags:["architecture","louvre","geometry","paris"] },
  { id:17, title:"Film Photography – 35mm",            desc:"Grain, warmth, and imperfect beauty: a roll of Kodak Gold 200 shot through a battered Olympus OM-1.",                    category:"photography",   img:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600", user:"Ana Sousa",      avatar:"https://i.pravatar.cc/40?img=68", likes:3127, tags:["photography","film","35mm","analog"] },
  { id:18, title:"Vibrant Smoothie Bowl",              desc:"Dragon fruit base loaded with mango, blueberries, granola, edible flowers and a drizzle of honey.",                       category:"food",          img:"https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600", user:"Bella Stone",    avatar:"https://i.pravatar.cc/40?img=70", likes:1049, tags:["food","smoothie","healthy","breakfast"] },
  { id:19, title:"Midnight Run Training",              desc:"Neon reflective gear on wet city streets at 2am — because the best training sessions belong to no one else.",              category:"fitness",       img:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600", user:"Rio Nakamura",   avatar:"https://i.pravatar.cc/40?img=72", likes:887,  tags:["fitness","running","night","training"] },
  { id:20, title:"Art Deco Wallpaper Detail",          desc:"Overlapping fan motifs in dusty rose and sage green — a bold period-correct maximalist wallcovering.",                    category:"interior",      img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600", user:"Violet Ray",     avatar:"https://i.pravatar.cc/40?img=73", likes:1634, tags:["interior","artdeco","wallpaper","pattern"] },
  { id:21, title:"Bali Rice Terraces at Dawn",         desc:"The Tegallalang terraces emerge from morning mist, each tier catching first light in its water-filled mirror.",           category:"travel",        img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600", user:"Dewi Santoso",   avatar:"https://i.pravatar.cc/40?img=74", likes:7810, tags:["travel","bali","rice-terraces","dawn"] },
  { id:22, title:"Hand-Lettering Workshop",            desc:"Brush pen calligraphy practice sheet — building muscle memory for flourished Copperplate capitals.",                      category:"art",           img:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600", user:"Clara Webb",     avatar:"https://i.pravatar.cc/40?img=76", likes:942,  tags:["art","lettering","calligraphy","workshop"] },
  { id:23, title:"Deconstructed Tiramisu",             desc:"Individual glass of espresso-soaked ladyfingers, mascarpone cloud and a dark cocoa cascade — simple, perfect.",          category:"food",          img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600", user:"Sofia Greco",    avatar:"https://i.pravatar.cc/40?img=77", likes:1388, tags:["food","dessert","tiramisu","italian"] },
  { id:24, title:"Glass House Architecture",           desc:"Philip Johnson's Glass House dissolves interior and exterior, letting the Connecticut woodland become the living room.",   category:"architecture",  img:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600", user:"Felix Hart",     avatar:"https://i.pravatar.cc/40?img=78", likes:4214, tags:["architecture","glasshouse","modern","philiojohnson"] },
];

/* comments pool */
const SAMPLE_COMMENTS = [
  { name:"Alex Kim",    avatar:"https://i.pravatar.cc/32?img=3",  text:"This is absolutely stunning 😍" },
  { name:"Sara Bloom",  avatar:"https://i.pravatar.cc/32?img=8",  text:"Saving this for my next project!" },
  { name:"Raj Patel",   avatar:"https://i.pravatar.cc/32?img=22", text:"The colour palette here is everything." },
  { name:"Nora Lee",    avatar:"https://i.pravatar.cc/32?img=35", text:"I tried this and it turned out amazing." },
  { name:"Finn Walsh",  avatar:"https://i.pravatar.cc/32?img=43", text:"This makes me want to travel right now." },
  { name:"Mia Chen",    avatar:"https://i.pravatar.cc/32?img=47", text:"Dream inspo 🙌" },
  { name:"Jake Monroe", avatar:"https://i.pravatar.cc/32?img=55", text:"Shot on what camera? Beautiful light." },
  { name:"Zoe Drake",   avatar:"https://i.pravatar.cc/32?img=63", text:"Pinned immediately, thank you!" },
];

/* ==========================================
   STATE
   ========================================== */
function readSaved(key) { try { const v=JSON.parse(localStorage.getItem(key)||"[]"); return Array.isArray(v)?v:[]; } catch { return []; } }
function persistSaved(key, values) { try { localStorage.setItem(key,JSON.stringify([...values])); } catch {} }
function escapeHTML(value) { return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
const state = {
  activeCategory: "all",
  searchQuery:    "",
  savedPins:      new Set(readSaved('pinspire-saved')),
  likedPins:      new Set(readSaved('pinspire-liked')),
  followedUsers:  new Set(readSaved('pinspire-followed')),
  page:           0,
  pageSize:       12,
  loading:        false,
  allLoaded:      false,
  currentPin:     null,
};

/* ==========================================
   DOM REFERENCES
   ========================================== */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const DOM = {
  navbar:        $("#navbar"),
  searchInput:   $("#searchInput"),
  searchClear:   $("#searchClear"),
  categories:    $("#categories"),
  grid:          $("#masonryGrid"),
  loaderWrap:    $("#loaderWrap"),
  pinModal:      $("#pinModal"),
  createModal:   $("#createModal"),
  backTop:       $("#backTop"),
  toastContainer:$("#toastContainer"),
  avatarMenu:    $("#avatarMenu"),
  profileDropdown:$("#profileDropdown"),
  openCreate:    $("#openCreateModal"),
  closeCreate:   $("#closeCreateModal"),
  closePinModal: $("#closePinModal"),
  createUpload:  $("#createUpload"),
  uploadPlaceholder: $("#uploadPlaceholder"),
  fileInput:     $("#fileInput"),
  previewImage:  $("#previewImage"),
  publishBtn:    $("#publishBtn"),
  commentInput:  $("#commentInput"),
  commentSend:   $("#commentSend"),
  notifBtn:      $("#notifBtn"),
};

/* ==========================================
   HELPERS
   ========================================== */
function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(".0","") + "k";
  return String(n);
}

function randomSlice(arr, min, max) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  return [...arr].sort(() => .5 - Math.random()).slice(0, count);
}

function filteredPins() {
  return PINS_DATA.filter(p => {
    const matchCat = state.activeCategory === "all" || p.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase();
    const matchSearch = !q
      || p.title.toLowerCase().includes(q)
      || p.category.toLowerCase().includes(q)
      || p.user.toLowerCase().includes(q)
      || p.tags.some(t => t.includes(q));
    return matchCat && matchSearch;
  });
}

/* ==========================================
   TOAST
   ========================================== */
function showToast(msg, type = "", icon = "fa-circle-check") {
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.textContent = msg;
  DOM.toastContainer.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

/* ==========================================
   RENDER CARDS
   ========================================== */
function createCard(pin) {
  const saved = state.savedPins.has(pin.id);
  const liked = state.likedPins.has(pin.id);
  const card  = document.createElement("div");
  card.className = "pin-card";
  card.dataset.id = pin.id;
  card.innerHTML = `
    <div class="pin-img-wrap">
      <img class="pin-img" src="${escapeHTML(pin.img)}" alt="${escapeHTML(pin.title)}" loading="lazy"/>
      <div class="pin-overlay"></div>
      <div class="card-actions">
        <button class="save-card-btn${saved?" saved":""}" data-id="${pin.id}">${saved?"Saved":"Save"}</button>
        <button class="like-card-btn${liked?" liked":""}" data-id="${pin.id}">
          <i class="fa-${liked?"solid":"regular"} fa-heart"></i>
        </button>
      </div>
    </div>
    <div class="pin-meta">
      <p class="pin-title">${escapeHTML(pin.title)}</p>
      <div class="pin-user">
        <img class="pin-user-img" src="${escapeHTML(pin.avatar)}" alt="${escapeHTML(pin.user)}" loading="lazy"/>
        <span class="pin-user-name">${escapeHTML(pin.user)}</span>
        <span class="pin-likes">
          <i class="fa-solid fa-heart" style="color:var(--red);font-size:.7rem;"></i>
          ${formatCount(pin.likes + (liked ? 1 : 0))}
        </span>
      </div>
    </div>
  `;

  /* open detail */
  card.addEventListener("click", (e) => {
    if (e.target.closest(".card-actions")) return;
    openPinModal(pin);
  });

  /* save */
  card.querySelector(".save-card-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSave(pin, card.querySelector(".save-card-btn"));
  });

  /* like */
  card.querySelector(".like-card-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLike(pin, card.querySelector(".like-card-btn"), card.querySelector(".pin-likes"));
  });

  return card;
}

function renderCards(append = false) {
  const pins = filteredPins();
  const start = append ? state.page * state.pageSize : 0;
  const slice = pins.slice(start, start + state.pageSize);

  if (!append) {
    DOM.grid.innerHTML = "";
    state.page = 0;
    state.allLoaded = false;
  }

  if (pins.length === 0 && !append) {
    DOM.grid.innerHTML = `
      <div class="empty-state" style="column-span:all">
        <i class="fa-regular fa-face-frown"></i>
        <h3>No results found</h3>
        <p>Try a different search or category</p>
      </div>`;
    DOM.loaderWrap.classList.add("hidden");
    return;
  }

  slice.forEach((pin, i) => {
    const card = createCard(pin);
    card.style.animationDelay = `${(i % state.pageSize) * 30}ms`;
    DOM.grid.appendChild(card);
  });

  state.page++;
  if (state.page * state.pageSize >= pins.length) {
    state.allLoaded = true;
    DOM.loaderWrap.classList.add("hidden");
  } else {
    DOM.loaderWrap.classList.remove("hidden");
  }
}

/* ==========================================
   SAVE / LIKE
   ========================================== */
function toggleSave(pin, btn) {
  if (state.savedPins.has(pin.id)) {
    state.savedPins.delete(pin.id);
    btn.textContent = "Save";
    btn.classList.remove("saved");
    showToast("Removed from saves", "", "fa-bookmark");
  } else {
    state.savedPins.add(pin.id);
    btn.textContent = "Saved";
    btn.classList.add("saved");
    showToast("Saved to your board!", "success", "fa-bookmark");
  }
  persistSaved("pinspire-saved", state.savedPins);
  /* sync modal save btn */
  if (state.currentPin && state.currentPin.id === pin.id) {
    const msb = $("#modalSaveBtn");
    msb.textContent = state.savedPins.has(pin.id) ? "Saved" : "Save";
    msb.classList.toggle("saved", state.savedPins.has(pin.id));
  }
}

function toggleLike(pin, btn, countEl) {
  if (state.likedPins.has(pin.id)) {
    state.likedPins.delete(pin.id);
    btn.classList.remove("liked");
    btn.querySelector("i").className = "fa-regular fa-heart";
  } else {
    state.likedPins.add(pin.id);
    btn.classList.add("liked");
    btn.querySelector("i").className = "fa-solid fa-heart";
    /* heart burst micro-animation */
    btn.animate([{transform:"scale(1.5)"},{transform:"scale(1)"}],{duration:250});
  }
  persistSaved("pinspire-liked", state.likedPins);
  if (countEl) {
    const likes = pin.likes + (state.likedPins.has(pin.id) ? 1 : 0);
    countEl.innerHTML = `<i class="fa-solid fa-heart" style="color:var(--red);font-size:.7rem;"></i> ${formatCount(likes)}`;
  }
}

/* ==========================================
   PIN DETAIL MODAL
   ========================================== */
function openPinModal(pin) {
  state.currentPin = pin;
  const saved = state.savedPins.has(pin.id);

  $("#modalImage").src       = pin.img;
  $("#modalTitle").textContent  = pin.title;
  $("#modalDesc").textContent   = pin.desc;
  $("#modalUserAvatar").src  = pin.avatar;
  $("#modalUsername").textContent  = pin.user;
  $("#modalFollowers").textContent = `${formatCount(Math.floor(Math.random()*50000+1000))} followers`;

  const msb = $("#modalSaveBtn");
  msb.textContent = saved ? "Saved" : "Save";
  msb.classList.toggle("saved", saved);

  const followBtn = $("#modalFollowBtn");
  const following = state.followedUsers.has(pin.user);
  followBtn.textContent = following ? "Following" : "Follow";
  followBtn.classList.toggle("following", following);

  /* tags */
  $("#modalTags").innerHTML = pin.tags.map(t =>
    `<span class="tag-pill">#${t}</span>`
  ).join("");

  /* comments */
  const comments = randomSlice(SAMPLE_COMMENTS, 2, 4);
  $("#modalComments").innerHTML = comments.map(c => `
    <div class="comment-item">
      <img src="${c.avatar}" alt="${c.name}"/>
      <div class="comment-bubble">
        <p class="comment-name">${c.name}</p>
        <p class="comment-text">${c.text}</p>
      </div>
    </div>
  `).join("");

  DOM.pinModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePinModal() {
  DOM.pinModal.classList.remove("open");
  document.body.style.overflow = "";
  state.currentPin = null;
}

/* ==========================================
   CREATE MODAL
   ========================================== */
function openCreateModal() {
  DOM.createModal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCreateModal() {
  DOM.createModal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ==========================================
   INFINITE SCROLL
   ========================================== */
function onScroll() {
  const st = window.scrollY;

  /* navbar shadow */
  DOM.navbar.classList.toggle("scrolled", st > 10);

  /* back to top */
  DOM.backTop.classList.toggle("visible", st > 600);

  /* load more */
  if (state.loading || state.allLoaded) return;
  const threshold = document.documentElement.scrollHeight - window.innerHeight - 300;
  if (st >= threshold) loadMore();
}

function loadMore() {
  state.loading = true;
  DOM.loaderWrap.classList.remove("hidden");
  setTimeout(() => {
    renderCards(true);
    state.loading = false;
  }, 900);
}

/* ==========================================
   SEARCH
   ========================================== */
let searchTimeout;
DOM.searchInput.addEventListener("input", () => {
  const val = DOM.searchInput.value.trim();
  DOM.searchClear.classList.toggle("visible", val.length > 0);
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    state.searchQuery = val;
    renderCards(false);
  }, 300);
});

DOM.searchClear.addEventListener("click", () => {
  DOM.searchInput.value = "";
  DOM.searchClear.classList.remove("visible");
  state.searchQuery = "";
  renderCards(false);
  DOM.searchInput.focus();
});

/* ==========================================
   CATEGORY FILTER
   ========================================== */
DOM.categories.addEventListener("click", (e) => {
  const pill = e.target.closest(".cat-pill");
  if (!pill) return;
  $$(".cat-pill").forEach(p => p.classList.remove("active"));
  pill.classList.add("active");
  state.activeCategory = pill.dataset.cat;
  renderCards(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==========================================
   MODAL EVENTS
   ========================================== */
/* close pin modal */
DOM.closePinModal.addEventListener("click", closePinModal);
DOM.pinModal.addEventListener("click", (e) => {
  if (e.target === DOM.pinModal) closePinModal();
});

/* modal save */
$("#modalSaveBtn").addEventListener("click", () => {
  if (!state.currentPin) return;
  const pin = state.currentPin;
  const allSaveBtns = DOM.grid.querySelectorAll(`.save-card-btn[data-id="${pin.id}"]`);
  const cardBtn = allSaveBtns[0] || null;
  toggleSave(pin, cardBtn || { textContent:"", classList:{ add:()=>{}, remove:()=>{}, toggle:()=>{} } });
});

/* modal follow */
$("#modalFollowBtn").addEventListener("click", () => {
  if (!state.currentPin) return;
  const user = state.currentPin.user;
  const btn  = $("#modalFollowBtn");
  if (state.followedUsers.has(user)) {
    state.followedUsers.delete(user);
    btn.textContent = "Follow";
    btn.classList.remove("following");
    showToast(`Unfollowed ${user}`);
  } else {
    state.followedUsers.add(user);
    btn.textContent = "Following";
    btn.classList.add("following");
    showToast(`Following ${user}!`, "success", "fa-user-plus");
  }
  persistSaved("pinspire-followed", state.followedUsers);
});

/* tag pills */
$("#modalTags").addEventListener("click", (e) => {
  const tag = e.target.closest(".tag-pill");
  if (!tag) return;
  const text = tag.textContent.replace("#","");
  DOM.searchInput.value = text;
  DOM.searchClear.classList.add("visible");
  state.searchQuery = text;
  closePinModal();
  renderCards(false);
  showToast(`Searching: ${text}`, "", "fa-magnifying-glass");
});

/* comment send */
function sendComment() {
  const text = DOM.commentInput.value.trim();
  if (!text) return;
  const item = document.createElement("div");
  item.className = "comment-item";
  item.innerHTML = `
    <img src="https://i.pravatar.cc/32?img=47" alt="You"/>
    <div class="comment-bubble">
      <p class="comment-name">You</p>
      <p class="comment-text">${escapeHTML(text)}</p>
    </div>
  `;
  $("#modalComments").appendChild(item);
  $("#modalComments").scrollTop = 9999;
  DOM.commentInput.value = "";
  showToast("Comment added!", "success", "fa-comment");
}
DOM.commentSend.addEventListener("click", sendComment);
DOM.commentInput.addEventListener("keydown", (e) => { if (e.key === "Enter") sendComment(); });

/* create modal */
DOM.openCreate.addEventListener("click", openCreateModal);
DOM.closeCreate.addEventListener("click", closeCreateModal);
DOM.createModal.addEventListener("click", (e) => {
  if (e.target === DOM.createModal) closeCreateModal();
});

/* file upload */
DOM.createUpload.addEventListener("click", () => DOM.fileInput.click());
DOM.fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/") || file.size > 5*1024*1024) { showToast("Choose an image smaller than 5MB", "error"); return; }
  const reader = new FileReader();
  reader.onload = (ev) => {
    DOM.previewImage.src = ev.target.result;
    DOM.previewImage.style.display = "block";
    DOM.uploadPlaceholder.style.display = "none";
  };
  reader.readAsDataURL(file);
});

/* drag & drop */
DOM.createUpload.addEventListener("dragover", (e) => {
  e.preventDefault();
  DOM.createUpload.classList.add("dragover");
});
DOM.createUpload.addEventListener("dragleave", () => DOM.createUpload.classList.remove("dragover"));
DOM.createUpload.addEventListener("drop", (e) => {
  e.preventDefault();
  DOM.createUpload.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (!file || !file.type.startsWith("image/")) { showToast("Please drop an image file", "error", "fa-xmark"); return; }
  const reader = new FileReader();
  reader.onload = (ev) => {
    DOM.previewImage.src = ev.target.result;
    DOM.previewImage.style.display = "block";
    DOM.uploadPlaceholder.style.display = "none";
  };
  reader.readAsDataURL(file);
});

/* publish */
DOM.publishBtn.addEventListener("click", () => {
  const title = $("#pinTitle").value.trim();
  const board = $("#pinBoard").value;
  if (!title) { showToast("Please add a title", "error", "fa-exclamation"); return; }
  if (board === "Choose a board") { showToast("Please choose a board", "error", "fa-exclamation"); return; }
  if (!DOM.previewImage.src.startsWith("data:image/")) { showToast("Upload an image first", "error"); return; }
  const pin = { id:Date.now(),title,desc:$("#pinDesc").value.trim(),category:"art",img:DOM.previewImage.src,user:"You",avatar:"https://i.pravatar.cc/40?img=47",likes:0,tags:[board.toLowerCase()] };
  PINS_DATA.unshift(pin);
  state.activeCategory="all"; state.searchQuery="";
  DOM.searchInput.value="";
  $(".cat-pill").forEach(p=>p.classList.toggle("active",p.dataset.cat==="all"));
  renderCards(false);
  showToast("Pin published in this browser session!", "success");
  closeCreateModal();
  /* reset form */
  ["pinTitle","pinDesc","pinLink"].forEach(id => { const el = $(` #${id}`); if(el) el.value = ""; });
  $("#pinBoard").value = "Choose a board";
  DOM.previewImage.src = "";
  DOM.previewImage.style.display = "none";
  DOM.uploadPlaceholder.style.display = "";
  DOM.fileInput.value = "";
});

/* ==========================================
   AVATAR DROPDOWN
   ========================================== */
DOM.avatarMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  DOM.profileDropdown.classList.toggle("open");
});
document.addEventListener("click", () => DOM.profileDropdown.classList.remove("open"));

/* ==========================================
   NOTIFICATION BUTTON
   ========================================== */
DOM.notifBtn.addEventListener("click", () => {
  showToast("Notifications coming soon!", "", "fa-bell");
});

/* ==========================================
   BACK TO TOP
   ========================================== */
DOM.backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ==========================================
   KEYBOARD SHORTCUTS
   ========================================== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closePinModal(); closeCreateModal(); }
  if (e.key === "/" && !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)) {
    e.preventDefault();
    DOM.searchInput.focus();
  }
});

/* ==========================================
   INIT
   ========================================== */
window.addEventListener("scroll", onScroll, { passive: true });
renderCards(false);

/* ---- welcome toast ---- */
setTimeout(() => showToast("Welcome to Pinspire! Press / to search 🎨", "", "fa-palette"), 800);