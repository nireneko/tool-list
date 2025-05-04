# Development Tools List

A comprehensive catalog of development and team tools built with Astro, Tailwind CSS, and DaisyUI. This project displays a searchable, filterable grid of development tools organized by categories.

## 🚀 Project Overview

This project provides an interactive web interface for browsing various development tools across multiple categories. Features include:

- Category-based filtering
- Tool cards with descriptions
- Dark/light theme toggle
- Responsive design
- Dockerized deployment

## 📂 Project Structure

```text
/
├── public/               # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/           # Project assets
│   ├── components/       # UI components
│   │   ├── CategoryFilters.astro
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   ├── ThemeIcon.astro
│   │   ├── ToolCard.astro
│   │   └── ToolsGrid.astro
│   ├── data/             # Data files
│   │   └── tools.json    # Tool definitions
│   ├── layouts/          # Layout templates
│   │   └── Layout.astro
│   ├── pages/            # Routes
│   │   └── index.astro
│   ├── scripts/          # Client-side scripts
│   │   └── categoryFilter.js
│   ├── styles/           # CSS styles
│   └── utils/            # Utility functions
│       └── colorUtils.js
├── astro.config.mjs      # Astro configuration
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile            # Docker configuration
├── nginx.conf            # Nginx configuration
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## 🧞 Running the Project

### Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

Your site will be available at `http://localhost:4321` in development mode.

### Docker Deployment

The project includes Docker configuration for easy deployment:

```bash
# Build and start the Docker container
docker compose up -d

# Stop the container
docker compose down
```

When running with Docker, the site will be available at `http://localhost:80`.

## 🛠️ Technologies Used

- [Astro](https://astro.build/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [DaisyUI](https://daisyui.com/) - UI component library
- [Preact](https://preactjs.com/) - UI library
- [Docker](https://www.docker.com/) - Containerization

## 👩‍💻 Development

To add or modify tools, edit the `tools.json` file. Each tool entry includes:
- Name
- Categories (for filtering)
- Description
- Link to the tool's official page

The UI will automatically update to reflect any changes to the data.