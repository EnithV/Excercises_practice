(function () {
  const grid = document.getElementById("exercises-grid");
  const searchInput = document.getElementById("search-input");
  const filterCategory = document.getElementById("filter-category");
  const filterStatus = document.getElementById("filter-status");
  const statTotal = document.getElementById("stat-total");
  const statDone = document.getElementById("stat-done");
  const resultsLive = document.getElementById("results-live");
  const modalEl = document.getElementById("exerciseModal");
  const modal = modalEl ? new bootstrap.Modal(modalEl) : null;
  let openId = null;

  const catKeys = ["logica", "cadenas", "arreglos", "matematicas"];

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function exText(ex, field) {
    return I18n.field(ex[field]);
  }

  function badgeDifficulty(d) {
    const info = DIFFICULTIES[d] || DIFFICULTIES.facil;
    return `<span class="badge text-bg-${info.class}">${escapeHtml(I18n.t(info.key))}</span>`;
  }

  function categoryLabel(key) {
    return I18n.t(CATEGORY_I18N[key] || "cat_logic");
  }

  function fillCategoryOptions() {
    const val = filterCategory.value;
    filterCategory.innerHTML = `<option value="">${escapeHtml(I18n.t("catAll"))}</option>`;
    catKeys.forEach((k) => {
      const opt = document.createElement("option");
      opt.value = k;
      opt.textContent = categoryLabel(k);
      filterCategory.appendChild(opt);
    });
    filterCategory.value = val;
  }

  function cardHtml(ex) {
    const statusBadge = ex.implemented
      ? `<span class="badge text-bg-primary"><i class="fa-solid fa-play me-1" aria-hidden="true"></i>${escapeHtml(I18n.t("badgeDemo"))}</span>`
      : `<span class="badge text-bg-secondary"><i class="fa-solid fa-clock me-1" aria-hidden="true"></i>${escapeHtml(I18n.t("badgeSoon"))}</span>`;

    const title = exText(ex, "title");
    const desc = exText(ex, "description");

    return `
      <article class="col-md-6 col-lg-4 exercise-card" data-id="${ex.id}"
        data-category="${ex.category}" data-implemented="${ex.implemented}">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="text-muted small fw-semibold" aria-hidden="true">#${String(ex.id).padStart(2, "0")}</span>
              ${badgeDifficulty(ex.difficulty)}
            </div>
            <h3 class="h5 card-title">${escapeHtml(title)}</h3>
            <p class="card-text text-muted small flex-grow-1">${escapeHtml(desc)}</p>
            <div class="d-flex flex-wrap gap-1 mb-3" aria-label="${escapeHtml(categoryLabel(ex.category))}">
              <span class="badge text-bg-light text-dark border">
                <i class="fa-solid ${ex.category === "cadenas" ? "fa-font" : ex.category === "arreglos" ? "fa-table-cells" : ex.category === "matematicas" ? "fa-calculator" : "fa-code-branch"} me-1" aria-hidden="true"></i>
                ${escapeHtml(categoryLabel(ex.category))}
              </span>
              ${statusBadge}
            </div>
            <button type="button" class="btn btn-outline-primary btn-sm w-100 btn-open-exercise"
              data-id="${ex.id}" aria-label="${escapeHtml(I18n.t("cardOpen"))}: ${escapeHtml(title)}">
              ${escapeHtml(I18n.t("cardOpen"))} <i class="fa-solid fa-arrow-right ms-1" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </article>`;
  }

  function renderGrid(list) {
    grid.innerHTML = list.map(cardHtml).join("");
    grid.querySelectorAll(".btn-open-exercise").forEach((btn) => {
      btn.addEventListener("click", () => openExercise(Number(btn.dataset.id)));
    });
    const msg = `${list.length} ${I18n.t("resultsLabel")}`;
    document.getElementById("results-count").textContent = list.length;
    if (resultsLive) resultsLive.textContent = msg;
  }

  function getFiltered() {
    const q = searchInput.value.trim().toLowerCase();
    const cat = filterCategory.value;
    const st = filterStatus.value;
    return EXERCISES.filter((ex) => {
      if (cat && ex.category !== cat) return false;
      if (st === "done" && !ex.implemented) return false;
      if (st === "pending" && ex.implemented) return false;
      if (q) {
        const hay = `${exText(ex, "title")} ${exText(ex, "description")} ${exText(ex, "problem")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function applyFilters() {
    renderGrid(getFiltered());
  }

  function inputLabel(inp) {
    return I18n.field(inp.label) || inp.id;
  }

  function renderInput(ex, inp) {
    const id = `demo-${ex.id}-${inp.id}`;
    const label = escapeHtml(inputLabel(inp));
    if (inp.type === "select") {
      const opts = (inp.options || [])
        .map((o) => {
          const text = I18n.field({ es: o.es, en: o.en }) || o.value;
          const sel = o.value === inp.value ? " selected" : "";
          return `<option value="${escapeHtml(o.value)}"${sel}>${escapeHtml(text)}</option>`;
        })
        .join("");
      return `
        <label class="form-label" for="${id}">${label}</label>
        <select class="form-select mb-2" id="${id}">${opts}</select>`;
    }
    if (inp.type === "number") {
      const min = inp.min != null ? ` min="${inp.min}"` : "";
      const max = inp.max != null ? ` max="${inp.max}"` : "";
      const step = inp.step != null ? ` step="${inp.step}"` : "";
      return `
        <label class="form-label" for="${id}">${label}</label>
        <input type="number" class="form-control mb-2" id="${id}" value="${inp.value ?? ""}"${min}${max}${step}>`;
    }
    return `
      <label class="form-label" for="${id}">${label}</label>
      <input type="text" class="form-control mb-2" id="${id}" value="${escapeHtml(inp.value ?? "")}" autocomplete="off">`;
  }

  function demoPanel(ex) {
    if (!ex.implemented) {
      return `<p class="text-muted mb-0">${escapeHtml(I18n.t("demoSoon"))}</p>`;
    }
    const inputs = (ex.demoInputs || []).map((inp) => renderInput(ex, inp)).join("");
    return `
      ${inputs}
      <button type="button" class="btn btn-primary btn-sm mb-3" id="demo-${ex.id}-run">${escapeHtml(I18n.t("demoRun"))}</button>
      <div id="demo-${ex.id}-out" aria-live="polite"></div>`;
  }

  function readDemoParams(ex) {
    const params = {};
    (ex.demoInputs || []).forEach((inp) => {
      const el = document.getElementById(`demo-${ex.id}-${inp.id}`);
      if (!el) return;
      params[inp.id] = inp.type === "number" ? Number(el.value) : el.value;
    });
    return params;
  }

  function showDemoResult(ex, r) {
    const out = document.getElementById(`demo-${ex.id}-out`);
    if (!out) return;
    if (r.error === "integer") {
      out.innerHTML = `<div class="alert alert-warning py-2 mb-0">${escapeHtml(I18n.t("errInteger"))}</div>`;
      return;
    }
    if (r.error === "numbers") {
      out.innerHTML = `<div class="alert alert-warning py-2 mb-0">${escapeHtml(I18n.t("errNumbers"))}</div>`;
      return;
    }
    if (r.error === "empty") {
      out.innerHTML = `<div class="alert alert-warning py-2 mb-0">${escapeHtml(I18n.t("errEmpty"))}</div>`;
      return;
    }
    if (r.error === "numeric") {
      out.innerHTML = `<div class="alert alert-warning py-2 mb-0">${escapeHtml(I18n.t("errNumeric"))}</div>`;
      return;
    }
    const cls = r.success ? "alert-success" : "alert-info";
    if (r.html) {
      out.innerHTML = `<div class="${cls} py-2 mb-0">${r.html}</div>`;
    } else if (r.text) {
      const pal = ex.demoType === "palindromo";
      if (pal) {
        out.innerHTML = `<div class="alert ${r.ok ? "alert-success" : "alert-danger"} py-2 mb-0">${escapeHtml(r.text)} ${escapeHtml(r.ok ? I18n.t("palYes") : I18n.t("palNo"))}</div>`;
      } else {
        out.innerHTML = `<div class="alert ${cls} py-2 mb-0">${escapeHtml(r.text)}</div>`;
      }
    }
  }

  function runDemo(ex) {
    const fn = Demos[ex.demoType];
    if (!fn) return;
    const r = fn(readDemoParams(ex));
    showDemoResult(ex, r);
  }

  function bindDemoHandlers(ex) {
    if (!ex.implemented) return;
    const btn = document.getElementById(`demo-${ex.id}-run`);
    if (btn) btn.addEventListener("click", () => runDemo(ex));
    if (ex.demoAutoRun) runDemo(ex);
  }

  function setCodeTab(lang, code, ex) {
    const block = document.getElementById("modal-code-block");
    const note = document.getElementById("modal-code-note");
    let text = "";
    if (lang === "java") {
      text = ex.javaCode || "";
      note.textContent = ex.javaClass ? `${I18n.t("classJava")} ${ex.javaClass}` : I18n.t("noJava");
    } else if (lang === "js") {
      text = ex.jsCode || "";
      note.textContent = ex.jsCode ? "" : I18n.t("noJs");
    } else {
      text = ex.pythonCode || "";
      note.textContent = ex.pythonCode ? "" : I18n.t("noPython");
    }
    if (!text) text = `// ${I18n.t(lang === "java" ? "noJava" : lang === "js" ? "noJs" : "noPython")}`;
    block.textContent = text;
    block.className = `language-${lang === "js" ? "javascript" : lang}`;
    if (window.hljs) hljs.highlightElement(block);
  }

  function openExercise(id) {
    const ex = EXERCISES.find((e) => e.id === id);
    if (!ex) return;
    openId = id;

    document.getElementById("modal-title").textContent = `#${ex.id} — ${exText(ex, "title")}`;
    document.getElementById("modal-badges").innerHTML = `
      ${badgeDifficulty(ex.difficulty)}
      <span class="badge text-bg-light text-dark border ms-1">${escapeHtml(categoryLabel(ex.category))}</span>
      <span class="badge text-bg-${ex.implemented ? "primary" : "secondary"} ms-1">
        ${escapeHtml(ex.implemented ? I18n.t("badgeDemo") : I18n.t("badgeSoon"))}
      </span>`;

    document.getElementById("modal-description").textContent = exText(ex, "description");
    document.getElementById("modal-problem").textContent = exText(ex, "problem");
    document.getElementById("modal-demo").innerHTML = demoPanel(ex);

    setCodeTab("java", ex.javaCode, ex);
    document.querySelectorAll(".code-lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === "java");
      btn.setAttribute("aria-pressed", btn.dataset.lang === "java" ? "true" : "false");
    });

    const demoTab = document.getElementById("tab-demo");
    if (ex.implemented) {
      demoTab.classList.remove("disabled");
      demoTab.removeAttribute("aria-disabled");
      demoTab.removeAttribute("tabindex");
    } else {
      demoTab.classList.add("disabled");
      demoTab.setAttribute("aria-disabled", "true");
      demoTab.setAttribute("tabindex", "-1");
      bootstrap.Tab.getOrCreateInstance(document.getElementById("tab-desc")).show();
    }

    modal.show();
    modalEl.addEventListener("shown.bs.modal", () => bindDemoHandlers(ex), { once: true });
  }

  function refreshUI() {
    fillCategoryOptions();
    const statusVal = filterStatus.value;
    filterStatus.querySelectorAll("option").forEach((o, i) => {
      if (i === 0) o.textContent = I18n.t("statusAll");
      if (o.value === "done") o.textContent = I18n.t("statusDone");
      if (o.value === "pending") o.textContent = I18n.t("statusPending");
    });
    filterStatus.value = statusVal;
    statTotal.textContent = EXERCISES.length;
    statDone.textContent = EXERCISES.filter((e) => e.implemented).length;
    applyFilters();
    if (openId && modalEl.classList.contains("show")) openExercise(openId);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => I18n.setLang(btn.dataset.lang));
  });

  document.querySelectorAll(".code-lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const ex = EXERCISES.find((e) => e.id === openId);
      if (!ex) return;
      document.querySelectorAll(".code-lang-btn").forEach((b) => {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      setCodeTab(btn.dataset.lang, null, ex);
    });
  });

  [searchInput, filterCategory, filterStatus].forEach((el) => {
    el.addEventListener("input", applyFilters);
    el.addEventListener("change", applyFilters);
  });

  window.onLanguageChange = refreshUI;

  I18n.init();
  refreshUI();
})();
