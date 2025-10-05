# 📁 Portfolio Project Structure Analysis & Refactor Plan

## 🧭 Current Structure Overview

### Top-Level (`app/`)
| Type                | Examples                              | Notes |
|---------------------|---------------------------------------|-------|
| **Project Metadata**| `README.md`, `package.json`, `tsconfig.json` | ✅ Standard |
| **Vue/Vite Core**   | `vite.config.ts`, `index.html`        | ✅ Good |
| **Build Artifacts** | `dist`, `tsconfig.tsbuildinfo`        | May want to ignore or separate |
| **Docker/Infra**    | `docker-compose.yaml`, `dev-server`, `openvpn-server`, `ssh` | 💡 Strong separation of deployment; could live in `infra/` |
| **Docs**            | `docs/`                               | 👍 Useful for maintainability |
| **External Configs**| `images/`, `public/`                  | Mixed role — potentially confusing |
| **Misc**            | `external/`, `scripts/`, `vue-server/`| Possibly internal or legacy — needs review |

---

## 📁 `src/` - Main Frontend Code

### ✔️ Well Structured:
- `components/`, `views/`, `layouts/` → standard and modular
- `assets/` organized with sprite sheets and custom art
- `router/`, `directives/`, `theme/` clearly separated
- `styles/` shows real theme system with editor-like support (Gruvbox, Monokai, etc.)

### ⚠️ Possible Concerns:
- `assets/v86/` deeply nested hardware BIOS blobs and WASM — very low-level content inside frontend code
- `public/` includes `bzImage`, `initrd`, etc. → strongly Buildroot/Linux-specific; not typical "public assets"
- `external/`, `images/`, `vue-server/` at root — need clearer semantics

---

## 🎯 High-Level Project Intent

> Full-featured, Vue/Vite developer **portfolio** with persistent **terminal UI**, embedded **Linux VM**, **dynamic themes**, and **project showcases**.

---

## 🔧 Refactor Recommendations

### ✅ 1. Logical Layer Separation

Separate by *responsibility*, not just file type.

```bash
app/
├── frontend/         # All Vue/Vite client-facing code
│   ├── src/
│   ├── public/
│   └── index.html
├── infra/            # DevOps, networking, and docker
│   ├── docker-compose.yaml
│   ├── dev-server/
│   ├── openvpn-server/
│   └── ssh/
├── linux-runtime/    # Portfolinux and VM boot assets
│   ├── initrd
│   ├── bzimage.bin
│   ├── init
│   └── fs.json
├── shared/           # Fonts, images, sprites, shared assets
├── scripts/          # Dev tools and automation
├── docs/
└── package.json
```

**Why**: This aligns each folder to a **mental mode**: frontend dev, system building, infra/devops.

---

### ✅ 2. Move v86 & BIOS Out of `/src/`

Move to something like:

```bash
linux-runtime/v86/
  ├── bios/
  ├── build/
  └── image/
```

**Keep `/src/` purely Vue + UI logic.** Let `linux-runtime/` handle VM boot logic.

---

### ✅ 3. Clean Up `external/`, `images/`, `vue-server/`

- Are these still needed?
  - `images/` might overlap with `assets/`
  - `vue-server/` is ambiguous — SSR? staging server?
  - `external/` sounds like vendor code — clarify or drop

---

### ✅ 4. Domain-Level Grouping (Optional Advanced)

Group by “features” or “concepts” for clarity:

```bash
src/
├── terminal/         # Terminal UI, v86 embed logic, Linux interactions
├── theme/            # Editor-style theme engine
├── views/
├── components/
├── layouts/
└── router/
```

---

## 📌 Suggested Next Steps

- ✅ Apply folder separation?
- ✅ Audit unclear folders (`external`, `vue-server`, `images`)?
- ✅ Rename/move `v86` & Linux boot assets?
- 🧠 Design deeper feature-domain grouping?

We’ll stay focused on **cleaning and aligning the layout** before touching internals.
