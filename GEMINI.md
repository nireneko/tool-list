# GEMINI.md - Project Instructional Context

## 🚀 Project Overview
**Development Tools List** is a searchable, filterable catalog of software engineering and team collaboration tools. It is built as a fast, static-first web application using the **Astro** framework, styled with **Tailwind CSS** and **DaisyUI**, and utilizes **Preact** for specific interactive elements.

The project follows a data-driven architecture where the entire catalog is managed via a central JSON file, allowing for easy updates without modifying component logic.

## 🏗️ Core Architecture & Tech Stack
- **Framework:** Astro (latest v5+)
- **Styling:** Tailwind CSS + DaisyUI (using `@tailwindcss/vite` plugin)
- **Runtime/UI:** Preact (integrated via `@astrojs/preact`)
- **Adapter:** Cloudflare Pages (via `@astrojs/cloudflare`)
- **Data Source:** `src/data/tools.json` (Static JSON array)
- **Interactivity:** Hybrid approach:
  - **Server-side:** Astro components (`.astro`) for initial layout and static rendering.
  - **Client-side:** Vanilla JS (`src/scripts/categoryFilter.js`) for lightning-fast DOM-based filtering of tool cards.

## 📂 Key Directory Structure
- `src/components/`: Modular UI components (Header, Filters, Grid, Cards).
- `src/data/tools.json`: The source of truth for all tools.
- `src/pages/index.astro`: Main entry point and layout assembler.
- `src/scripts/`: Client-side logic for filtering and interactivity.
- `src/utils/`: Shared utilities like `colorUtils.js` for dynamic category coloring.
- `public/`: Static assets (favicons, etc.).

## 🛠️ Development & Commands
### Local Development
```bash
npm install      # Install dependencies
npm run dev      # Start development server (http://localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

### Infrastructure & Deployment
- **Docker:** Includes `Dockerfile` and `docker-compose.yml` for Nginx-based containerized deployment.
- **Cloudflare:** Configured for Cloudflare Pages via `wrangler.jsonc` and the `@astrojs/cloudflare` adapter.
- **Nginx:** Custom `nginx.conf` handles static file serving and SPA-like routing if needed.

## 👩‍💻 Development Conventions
1. **Adding Tools:** New tools should be added to `src/data/tools.json`. Each entry requires:
   - `name`: String
   - `categories`: Array of Strings (used for filtering)
   - `description`: String
   - `link`: URL String
2. **Styling:** Use Tailwind CSS utility classes and DaisyUI components. Avoid writing custom CSS in `global.css` unless absolutely necessary.
3. **Filtering Logic:** The filtering happens in the browser. Categories are extracted from `tools.json` at build time to generate filter buttons, and `categoryFilter.js` toggles visibility via the `.hidden` class on `.tool-card` elements.
4. **Coloring:** Categories are automatically assigned colors from `src/utils/colorUtils.js` based on their index in the sorted category list.

## 🧪 Testing & Validation
- Currently, the project relies on manual validation and the `astro check` command (if configured).
- To verify changes, run `npm run build` to ensure the static generation completes without errors and `npm run preview` to test client-side filtering.
