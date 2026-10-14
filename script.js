/**
 * ==========================================
 * CONFIGURATION & CUSTOMIZATION
 * Edit these values to update the app catalog behavior, branding, and notices.
 * ==========================================
 */
const CONFIG = {
  "owner": "assc0d3r",
  "repo": "artrvb",
  "knownArchs": [
    "arm64-v8a", "arm64", "aarch64", "armeabi-v7a", "arm-v7a", "arm32", "arm", "x86_64", "x86", "universal", "all"
  ],
  "appCategories": {
    "Adobe": [
      "adobe"
    ],
    "Android TV": [
      "primevideo", "plutotv", "moviebox", "disneyplus", "disney", "hbomax", "tubi", "vix", "at4klauncher", "projectivylauncher", "peacock", "netflix", "nuvio"
    ],
    "Browser": [
      "browser", "edge"
    ],
    "Google": [
      "youtube", "google", "gboard"
    ],
    "Launcher": [
      "launcher", "at4klauncher", "projectivylauncher"
    ],
    "Meta": [
      "threads", "instagram", "messenger", "facebook", "!plusmessenger"
    ],
    "Social": ["threads", "instagram", "messenger", "facebook", "twitter", "tiktok", "telegram", "reddit", "pinterest", "tumblr"],
    "VPN": [
      "cloudflarewarp", "vpnify", "vpn"
    ],
    "YouTube": [
      "youtube"
    ],
  },
  "appNotices": [
    {
      "triggers": [
        "youtube",
        "google"
      ],
      "color": "accent",
      "title": "Login Issue",
      "text": "Signing into Google account on APK (not Module) requires MicroG. Please install one from below before trying to sign in.",
      "links": [
        {
          "label": "Morphe",
          "url": "https://github.com/MorpheApp/MicroG-RE/releases/latest"
        },
        {
          "label": "ReVanced",
          "url": "https://github.com/ReVanced/GmsCore/releases/latest"
        }
      ]
    },
    {
      "triggers": [
        "twitter"
      ],
      "color": "warning",
      "title": "Login Issue",
      "text": "Since October 2025, Twitter has started checking whether the app is modified or if phone integrity fails during login.",
      "links": [
        {
          "label": "Workarounds",
          "url": "https://t.me/pikopatches/1/59772"
        }
      ]
    }
  ],
  // Header dropdown menus (GitHub / Donate / Social)
  "links": {
    "github": [
      { "label": "Builder Repo", "url": "https://github.com/assc0d3r/ARTRVB" },
      { "label": "Website Repo", "url": "https://github.com/assc0d3r/artrvb.github.io" },
      { "label": "Report an issue", "url": "https://github.com/assc0d3r/ARTRVB/issues/new/choose" }
    ],
    "donate": [
      { "label": "Patreon", "url": "https://www.patreon.com/cw/fahim_ahmed" },
      { "label": "Skrill", "url": "https://skrill.me/rq/Fahim/5/USD?key=YPLEz71Jl8tmjGe9YjkvwAgpebX" },
      { "label": "Pathao Pay", "url": "https://pathaopay.me/@fahim.ahmed" }
    ],
    "telegram": [
      { "label": "Telegram Group", "url": "https://t.me/nullstoretg" },
      { "label": "Telegram Channel", "url": "https://t.me/nullstore_updates" }
    ],
    "theme": [
      { "label": "System", "action": "system" },
      { "label": "Light", "action": "light" },
      { "label": "Dark", "action": "dark" }
    ]
  }
};


// Sort options for the header-style sort popup
const SORT_ICONS = {
  recent:
    '<svg class="sort-opt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  popular:
    '<svg class="sort-opt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>',
  name:
    '<svg class="sort-opt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>',
};

const SORT_OPTIONS = [
  { value: "recent", label: "Recent", icon: SORT_ICONS.recent },
  { value: "popular", label: "Popular", icon: SORT_ICONS.popular },
  { value: "name", label: "Name", icon: SORT_ICONS.name },
];

// Shared "external link" arrow used on link buttons (dropdown items, patch links)
const EXTERNAL_LINK_ARROW =
  '<svg class="patch-link-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';

// Cached DOM references
const DOM = {};

function initDOM() {
  DOM.builds = document.getElementById("builds");
  DOM.loading = document.getElementById("loading");
  DOM.error = document.getElementById("error");
  DOM.searchInput = document.getElementById("searchInput");
  DOM.searchWrap = DOM.searchInput?.closest(".search-input-wrap");
  DOM.searchClearBtn = document.getElementById("searchClearBtn");
  DOM.sortDropdown = document.getElementById("sortDropdown");
  DOM.sortTrigger = document.getElementById("sortTrigger");
  DOM.sortTriggerIcon = document.getElementById("sortTriggerIcon");
  DOM.sortMenu = document.getElementById("sortMenu");
  DOM.appFilterButtons = document.getElementById("appFilterButtons");
  DOM.catalogCountText = document.getElementById("catalogCountText");
  DOM.lastUpdateText = document.getElementById("lastUpdateText");
  DOM.themeBtn = document.getElementById("themeMenuBtn");
  DOM.headerMenus = ["github", "donate", "telegram", "theme"].map((key) => ({
    key,
    wrap: document.getElementById(`${key}MenuWrap`),
    trigger: document.getElementById(`${key}MenuBtn`),
    menu: document.getElementById(`${key}Menu`),
  }));
  DOM.patchModal = document.getElementById("patchModal");
  DOM.patchModalTitle = document.getElementById("patchModalTitle");
  DOM.patchModalBody = document.getElementById("patchModalBody");
  DOM.appliedPatchesModal = document.getElementById("appliedPatchesModal");
  DOM.appliedPatchesTitle = document.getElementById("appliedPatchesTitle");
  DOM.appliedPatchesMeta = document.getElementById("appliedPatchesMeta");
  DOM.appliedPatchesBody = document.getElementById("appliedPatchesBody");
  DOM.patchSearchInput = document.getElementById("patchSearchInput");
  DOM.patchSearchWrap = DOM.patchSearchInput?.closest(".patch-search-input-wrap");
  DOM.patchSearchClearBtn = document.getElementById("patchSearchClearBtn");
  DOM.patchCountBadge = document.getElementById("patchCountBadge");
  DOM.obtainiumModal = document.getElementById("obtainiumModal");
  DOM.obtainiumTitle = document.getElementById("obtainiumTitle");
  DOM.obtainiumBody = document.getElementById("obtainiumBody");
  DOM.obtainiumBtn = document.getElementById("obtainiumBtn");
  DOM.toastNotification = document.getElementById("toastNotification");
  DOM.themeColorMeta = document.getElementById("themeColorMeta");
}

// Variant & Label Formatting Helpers
function formatVariantLabel(variant, subVariant) {
  const toTitleCase = (str) =>
    str ? str.replace(/\b[a-z]/g, (c) => c.toUpperCase()) : "";
  if (variant && subVariant) return `${variant} • ${toTitleCase(subVariant)}`;
  if (variant) return variant;
  if (subVariant) return toTitleCase(subVariant);
  return "Standard";
}

function getObtainiumAppLabel(appName, brandName, variant, subVariant) {
  const parts = [brandName];
  if (variant) parts.push(variant);
  if (subVariant) {
    const toTitleCase = (str) =>
      str ? str.replace(/\b[a-z]/g, (c) => c.toUpperCase()) : "";
    parts.push(toTitleCase(subVariant));
  }
  return `${appName} (${parts.join(" • ")})`;
}

// State
let cachedFullCatalog = [];
let cachedPatchSets = []; // Shared top-level appliedPatches table (schema v2 dedup)
let cachedChangelogSets = []; // Shared top-level changelogs table (schema v2 dedup)
let cachedPatchSourceSets = []; // Shared top-level patchSources table (schema v2 dedup)
let searchTerm = "";
let appCategoryFilter = "all";
let sortMode = "recent"; // "recent" | "popular" | "name"
let currentAppCatalog = [];
let activeModalAppKey = null;
let activeModalBrandKey = null;
let modalBuildFilter = "all";
let modalSelectedVariant = null;
let modalSelectedSubVariant = null;
let themeMode = "system";
let activeAppliedPatchesList = [];

// Stoplist Threshold


// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initDOM();
  setupTheme();
  setupEventListeners();

  // Pre-fill state from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const urlQuery = urlParams.get("q");
  if (urlQuery) {
    searchTerm = urlQuery.toLowerCase();
    if (DOM.searchInput) {
      DOM.searchInput.value = urlQuery;
      DOM.searchWrap?.classList.add("has-value");
    }
  }

  const urlSort = urlParams.get("sort");
  if (urlSort && ["recent", "popular", "name"].includes(urlSort)) {
    sortMode = urlSort;
    updateSortUI();
  }

  loadReleases();
});

// Theme Management
function setupTheme() {
  const savedTheme = localStorage.getItem("theme");
  themeMode = ["light", "dark", "system"].includes(savedTheme) ? savedTheme : "system";
  applyTheme(themeMode);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  mediaQuery.addEventListener("change", () => {
    if (themeMode === "system") applyTheme("system");
  });
}

function applyTheme(theme) {
  const isLight =
    theme === "light"
      ? true
      : theme === "dark"
        ? false
        : window.matchMedia("(prefers-color-scheme: light)").matches;

  document.body.classList.toggle("light-mode", isLight);
  if (DOM.themeColorMeta) {
    DOM.themeColorMeta.setAttribute("content", isLight ? "#faf8f5" : "#1a1814");
  }

  if (DOM.themeBtn) {
    const label = `Theme: ${theme}`;
    DOM.themeBtn.setAttribute("aria-label", label);
    DOM.themeBtn.setAttribute("title", label);
  }

  updateThemeMenuIndicator(theme);
}

// Mark the active theme option with a pointer on the right
function updateThemeMenuIndicator(theme) {
  document.querySelectorAll("#themeMenu [data-theme]").forEach((el) => {
    const indicator = el.querySelector(".dropdown-item-indicator");
    if (indicator) indicator.textContent = el.dataset.theme === theme ? "👈" : "";
  });
}

// Modal Generic Controller
function showModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove("closing");
  modalEl.classList.add("open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function hideModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add("closing");

  // Prevent accessibility warnings by removing focus from modal elements before hiding
  if (document.activeElement && modalEl.contains(document.activeElement)) {
    document.activeElement.blur();
  }

  setTimeout(() => {
    modalEl.classList.remove("open");
    modalEl.classList.remove("closing");
    modalEl.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal-overlay.open:not(.closing)")) {
      document.body.classList.remove("modal-open");
    }
  }, 180);
}

// Event Listeners
function setupEventListeners() {
  let searchTimeout;

  // Header Dropdown Menus (GitHub / Donate / Telegram / Theme)
  setupHeaderMenus();

  // Search Input (Debounced)
  const syncClearBtn = () => {
    if (DOM.searchWrap && DOM.searchInput) {
      DOM.searchWrap.classList.toggle("has-value", DOM.searchInput.value.length > 0);
    }
  };

  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("input", (e) => {
      syncClearBtn();
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchTerm = e.target.value.toLowerCase().trim();
        syncUrlParams();
        filterAndRenderReleases();
      }, 180);
    });

    DOM.searchInput.addEventListener("focus", (e) => {
      if (window.innerWidth <= 768) {
        // Wait for the virtual keyboard to finish animating (usually ~300ms)
        // Otherwise, the programmatic smooth scroll conflicts with the keyboard scroll,
        // permanently breaking hit-testing areas on mobile Chrome/Safari.
        setTimeout(() => {
          const searchBox = e.target.closest(".search-box") || e.target;
          const y = searchBox.getBoundingClientRect().top + window.scrollY - 85;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 300);
      }
    });
  }

  if (DOM.searchClearBtn && DOM.searchInput) {
    const handleClear = (e) => {
      e.preventDefault(); // Prevent input blur, keeping keyboard open and stopping layout shifts
      if (DOM.searchInput.value === "") return;
      DOM.searchInput.value = "";
      searchTerm = "";
      syncClearBtn();
      syncUrlParams();
      filterAndRenderReleases();
    };
    DOM.searchClearBtn.addEventListener("pointerdown", handleClear);
    DOM.searchClearBtn.addEventListener("click", handleClear);
  }

  // Secondary Category Filter Buttons
  if (DOM.appFilterButtons) {
    DOM.appFilterButtons.addEventListener("click", (e) => {
      const filterBtn = e.target.closest(".filter-btn");
      if (!filterBtn) return;
      appCategoryFilter = filterBtn.dataset.filter || "all";
      filterAndRenderReleases();
    });
  }

  // Sort Dropdown (header-style popup)
  setupSortDropdown();

  // App Cards & Modal Delegate Click
  if (DOM.builds) {
    DOM.builds.addEventListener("click", (e) => {
      const trigger = e.target.closest(".channel-box-btn");
      if (trigger) {
        e.stopPropagation();
        openPatchModal(
          trigger.dataset.appKey,
          trigger.dataset.brandKey,
          trigger.dataset.channel || "all",
          trigger.dataset.variant || null,
          trigger.dataset.subVariant || null
        );
        return;
      }

      const card = e.target.closest(".app-card");
      if (card) {
        const isSummaryClick = e.target.closest(".app-card-summary");
        const isOpen = card.classList.contains("open");

        if (isSummaryClick || !isOpen) {
          if (!isOpen) {
            document.querySelectorAll(".app-card.open").forEach(c => {
              if (c !== card) c.classList.remove("open");
            });
            ensureAppCardBody(card);
            card.classList.add("open");

            setTimeout(() => {
              const rect = card.getBoundingClientRect();
              if (rect.top < 20 || rect.height > window.innerHeight) {
                window.scrollBy({ top: rect.top - 20, behavior: "smooth" });
              } else if (rect.bottom > window.innerHeight) {
                window.scrollBy({ top: rect.bottom - window.innerHeight + 20, behavior: "smooth" });
              }
            }, 360);
          } else {
            card.classList.remove("open");
          }
        }
      }
    });
  }

  // Downloads Modal Filter Delegate
  if (DOM.patchModal) {
    DOM.patchModal.addEventListener("click", (e) => {
      const card = e.target.closest(".modal-build-card");
      if (card) {
        const isHeaderClick = e.target.closest(".modal-build-header");
        const isOpen = card.classList.contains("open");
        const isInteractive = e.target.closest("a, button, .patch-applied-btn");

        if (isHeaderClick || (!isOpen && !isInteractive)) {
          if (!isOpen) {
            const modalBody = card.closest(".modal-body");
            if (modalBody) {
              modalBody.querySelectorAll(".modal-build-card.open").forEach(c => {
                if (c !== card) c.classList.remove("open");
              });
            }
            card.classList.add("open");

            setTimeout(() => {
              const modalBody = card.closest(".modal-body");
              if (modalBody) {
                const containerRect = modalBody.getBoundingClientRect();
                const rect = card.getBoundingClientRect();

                const offsetTop = rect.top - containerRect.top;
                const offsetBottom = rect.bottom - containerRect.bottom;

                if (offsetTop < 0 || rect.height > containerRect.height) {
                  modalBody.scrollBy({ top: offsetTop - 8, behavior: "smooth" });
                } else if (offsetBottom > 0) {
                  modalBody.scrollBy({ top: offsetBottom + 8, behavior: "smooth" });
                }
              }
            }, 360);
          } else if (isHeaderClick) {
            card.classList.remove("open");
          }
          if (isHeaderClick || !isInteractive) return;
        }
      }

      const filterBtn = e.target.closest(".modal-filter-btn");
      if (filterBtn && !filterBtn.disabled) {
        if (filterBtn.classList.contains("variant-pill-btn")) {
          modalSelectedVariant = filterBtn.dataset.variant || null;
          const app = currentAppCatalog.find((item) => item.appKey === activeModalAppKey);
          const brand = app ? (app.brands || []).find((item) => item.brandKey === activeModalBrandKey) : null;
          if (brand && brand.variants) {
            const validSubs = brand.variants
              .filter((v) => (v.variant || null) === modalSelectedVariant)
              .map((v) => v.subVariant || null);
            if (!validSubs.includes(modalSelectedSubVariant)) {
              modalSelectedSubVariant = validSubs[0] || null;
            }
          }
        } else if (filterBtn.classList.contains("subvariant-pill-btn")) {
          modalSelectedSubVariant = filterBtn.dataset.subVariant || null;
        } else {
          modalBuildFilter = filterBtn.dataset.filter;
        }
        renderOpenPatchModal();
        return;
      }

      const appliedTrigger = e.target.closest(".patch-applied-btn");
      if (appliedTrigger) {
        e.preventDefault();
        e.stopPropagation();
        openAppliedPatchesModal(
          appliedTrigger.dataset.appKey,
          appliedTrigger.dataset.brandKey,
          appliedTrigger.dataset.buildId,
          appliedTrigger.dataset.variant || null,
          appliedTrigger.dataset.subVariant || null,
          appliedTrigger.dataset.build || null,
          appliedTrigger.dataset.releaseId || null,
          appliedTrigger.dataset.arch || null
        );
        return;
      }

      if (e.target.id === "patchModal" || e.target.closest(".modal-close")) {
        closePatchModal();
      }
    });
  }

  // Applied Patches Modal
  if (DOM.appliedPatchesModal) {
    DOM.appliedPatchesModal.addEventListener("click", (e) => {
      if (e.target.id === "appliedPatchesModal" || e.target.closest(".modal-close")) {
        closeAppliedPatchesModal();
      }
    });
  }

  if (DOM.patchSearchInput) {
    DOM.patchSearchInput.addEventListener("input", (e) => {
      syncPatchClearBtn();
      filterAppliedPatchesList(e.target.value);
    });
  }

  if (DOM.patchSearchClearBtn && DOM.patchSearchInput) {
    const handlePatchClear = (e) => {
      e.preventDefault();
      if (DOM.patchSearchInput.value === "") return;
      DOM.patchSearchInput.value = "";
      syncPatchClearBtn();
      filterAppliedPatchesList("");
    };
    DOM.patchSearchClearBtn.addEventListener("pointerdown", handlePatchClear);
    DOM.patchSearchClearBtn.addEventListener("click", handlePatchClear);
  }

  // Obtainium Modal
  if (DOM.obtainiumBtn) {
    DOM.obtainiumBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openObtainiumModal();
    });
  }

  if (DOM.obtainiumModal) {
    DOM.obtainiumModal.addEventListener("click", (e) => {
      if (e.target.id === "obtainiumModal" || e.target.closest(".modal-close")) {
        closeObtainiumModal();
      }
    });
  }

  // Global ESC key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePatchModal();
      closeAppliedPatchesModal();
      closeObtainiumModal();
      closeHeaderMenus();
      close
