# Rui Gonçalves — Portfolio

Personal portfolio site built with **React + Vite + Tailwind CSS**.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── navbar.jsx              # Fixed nav with dark/light toggle
│   ├── hero.jsx                # Landing section with name + CTAs
│   ├── skills.jsx              # Categorised skill pills
│   ├── experience.jsx          # Work history at Critical Techworks
│   ├── achievements.jsx        # Key highlights cards
│   ├── projects.jsx            # Project cards grid
│   ├── about.jsx               # Bio + info table
│   ├── contact.jsx             # Contact methods + CV download
│   ├── footer.jsx              # Footer with socials + quick links
│   ├── floating-cta.jsx        # Scroll-to-top button
│   ├── theme-provider.jsx      # Dark/light theme wrapper
│   └── use-scroll-animation.jsx # Intersection Observer hook
├── styles/
│   └── globals.css             # CSS variables + Tailwind + animations
├── utils.js                    # Shared computed values (age, experience years)
├── App.jsx                     # Root component
└── main.jsx                    # Entry point
```

---

## ✏️ Updating Content

Most content is defined as plain arrays/objects at the top of each component file — no separate data layer.

| What to change | Where |
|---|---|
| Bio text | `src/components/about.jsx` |
| Work experience bullets | `src/components/experience.jsx` |
| Projects | `src/components/projects.jsx` |
| Skills | `src/components/skills.jsx` |
| Achievements | `src/components/achievements.jsx` |
| Contact info / social links | `src/components/contact.jsx` |
| Email, age, experience years | `src/utils.js` |

> **Age and years of experience** are computed automatically from dates in `src/utils.js` — no need to update them manually.

---

## 📄 Documents

Place files under `public/documents/`:

| File | Used for |
|---|---|
| `RuiGoncalves.pdf` | CV download button in Contact section |
| `AI4RealAg.pptx` | Presentation download in Projects section |

---

## 🎨 Theming

Colors and theme variables are in `src/styles/globals.css` under `:root` (light) and `.dark`.

The primary accent is `#00e5a0` (dark mode) / `#00a870` (light mode) — change it there to retheme the whole site.

---

## 🌐 Deploying

Connect the repo to [Vercel](https://vercel.com) for automatic deploys on every push. No config needed.

Or use the CLI:

```bash
npm i -g vercel
vercel --prod
```
