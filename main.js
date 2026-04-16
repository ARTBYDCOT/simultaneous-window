// =========================================
// SIMULTANEOUS WINDOW — D.C.O.T.
// main.js
// =========================================

// ---- DATA ----
const entries = [
  {
    id: 1,
    type: "video",
    title: "Septimazo — Walking the Séptima",
    desc: "Daily commute along Carrera Séptima. Video archive capturing the simultaneity between physical flow and digital presence in Bogotá's main artery.",
    geo: "4.6351° N · 74.0657° W",
    date: "2023",
    ipfs: true,
    voxels: false
  },
  {
    id: 2,
    type: "audio",
    title: "TransMilenio Sur — Sound Walk",
    desc: "Field recordings from the afternoon commute along the southern corridor. Portal Sur to Banderas. Ambient urban textures.",
    geo: "4.5917° N · 74.1534° W",
    date: "2023",
    ipfs: true,
    voxels: false
  },
  {
    id: 3,
    type: "video",
    title: "La Candelaria — Historic Center",
    desc: "Walking through the historic center. Simultaneous window between colonial architecture and the digital layer built above it.",
    geo: "4.5981° N · 74.0757° W",
    date: "2022",
    ipfs: true,
    voxels: false
  },
  {
    id: 4,
    type: "meta",
    title: "Voxels Space — Septimazo",
    desc: "Enter the digital twin of the walk. A Voxels metaverse space that mirrors the physical experience of Carrera Séptima, Bogotá.",
    geo: "Voxels · Space ID 3a1173bc",
    date: "2023",
    ipfs: false,
    voxels: true,
    voxelsUrl: "https://www.voxels.com/spaces/3a1173bc-9f73-457d-a567-20f9d849702c/play"
  },
  {
    id: 5,
    type: "audio",
    title: "Chapinero — Evening Frequencies",
    desc: "Audio snapshot of Chapinero during evening rush. A text file address on IPFS preserves the exact geographic coordinates and timestamp.",
    geo: "4.6473° N · 74.0653° W",
    date: "2022",
    ipfs: true,
    voxels: false
  },
  {
    id: 6,
    type: "video",
    title: "Usaquén — Weekend Market Walk",
    desc: "Slow walk through Usaquén's weekend market. Layered temporal experience: the analog market and its digital counterpart coexist.",
    geo: "4.6944° N · 74.0321° W",
    date: "2022",
    ipfs: true,
    voxels: false
  }
];

const exhibitions = [
  {
    date: "2023",
    name: "Simultaneous Window — Digital Exhibition",
    place: "Online · simultaneouswindow.xyz",
    type: "Digital"
  },
  {
    date: "2023",
    name: "Metaverse Experience — Voxels",
    place: "Voxels Metaverse · Septimazo Space",
    type: "Metaverse"
  },
  {
    date: "2022–23",
    name: "Experimental Cartography · Bogotá",
    place: "uMap · OpenStreetMap",
    type: "Web"
  },
  {
    date: "2022",
    name: "DCOT · NFT Collection on Objkt",
    place: "objkt.com · Tezos Blockchain",
    type: "NFT"
  },
  {
    date: "2018–",
    name: "Simultaneous Window · Project Origin",
    place: "Bogotá, Colombia",
    type: "Physical"
  }
];

// ---- POPULATE SIDEBAR ENTRIES ----
function populateSidebar() {
  const container = document.getElementById('sidebarEntries');
  if (!container) return;
  const recent = [...entries].slice(0, 4);
  container.innerHTML = recent.map(e => `
    <div class="sidebar-entry" onclick="scrollToSection('experiences')">
      <div class="entry-dot ${e.type}"></div>
      <div>
        <div class="sidebar-entry-title">${e.title}</div>
        <div class="sidebar-entry-meta">${e.date} · ${e.type}</div>
      </div>
    </div>
  `).join('');
}

// ---- POPULATE EXPERIENCES GRID ----
function populateExperiences() {
  const grid = document.getElementById('experiencesGrid');
  if (!grid) return;
  grid.innerHTML = entries.map(e => `
    <div class="entry-card">
      <span class="entry-tag ${e.type}">${e.type}</span>
      <div class="entry-card-title">${e.title}</div>
      <div class="entry-card-desc">${e.desc}</div>
      <div class="entry-card-footer">
        <span class="geo">${e.geo}</span>
        ${e.ipfs ? '<span class="ipfs-tag">IPFS</span>' : ''}
        ${e.voxels ? `<a href="${e.voxelsUrl}" target="_blank" class="ipfs-tag" style="color:#ff4a4a;border-color:rgba(255,74,74,0.3);text-decoration:none">Voxels ↗</a>` : ''}
      </div>
    </div>
  `).join('');
}

// ---- POPULATE EXHIBITIONS ----
function populateExhibitions() {
  const list = document.getElementById('exhibitionsList');
  if (!list) return;
  list.innerHTML = exhibitions.map(ex => `
    <div class="exhibition-item">
      <div class="exhibition-date">${ex.date}</div>
      <div>
        <div class="exhibition-name">${ex.name}</div>
        <div class="exhibition-place">${ex.place}</div>
      </div>
      <div class="exhibition-type">${ex.type}</div>
    </div>
  `).join('');
}

// ---- CONTRIBUTION SYSTEM ----
// Submissions are saved to localStorage and shown in admin panel
function loadContributions() {
  const raw = localStorage.getItem('sw_contributions');
  return raw ? JSON.parse(raw) : [];
}

function saveContribution(data) {
  const contributions = loadContributions();
  const entry = {
    id: Date.now(),
    ...data,
    status: 'pending',
    submitted: new Date().toISOString()
  };
  contributions.push(entry);
  localStorage.setItem('sw_contributions', JSON.stringify(contributions));
  return entry;
}

function handleContributionSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contributeForm');
  const btn  = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');

  const data = {
    title:       form.querySelector('[name="title"]').value.trim(),
    type:        form.querySelector('[name="type"]').value,
    lat:         form.querySelector('[name="lat"]').value.trim(),
    lng:         form.querySelector('[name="lng"]').value.trim(),
    description: form.querySelector('[name="description"]').value.trim(),
    mediaUrl:    form.querySelector('[name="mediaUrl"]').value.trim(),
    ipfsUrl:     form.querySelector('[name="ipfsUrl"]').value.trim(),
    authorName:  form.querySelector('[name="authorName"]').value.trim(),
    authorEmail: form.querySelector('[name="authorEmail"]').value.trim()
  };

  // Basic validation
  if (!data.title || !data.lat || !data.lng || !data.description) {
    showToast('Please fill in all required fields.');
    return;
  }

  saveContribution(data);

  btn.disabled = true;
  btn.textContent = 'Sending…';
  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Submit for review →';
    success.style.display = 'block';
    showToast('Contribution submitted! Pending review.');
    setTimeout(() => { success.style.display = 'none'; }, 6000);
  }, 800);
}

// ---- TOAST ----
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---- NAV + SCROLL ----
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

function initNav() {
  const toggle = document.getElementById('menuToggle');
  const menu   = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }

  // Active sidebar link on scroll
  const sections = ['experiences','exhibitions','metaverse','market','contribute','about'];
  const links     = document.querySelectorAll('.sidebar-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.sidebar-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  populateSidebar();
  populateExperiences();
  populateExhibitions();
  initNav();

  const form = document.getElementById('contributeForm');
  if (form) form.addEventListener('submit', handleContributionSubmit);
});
