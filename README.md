# Micro Frontend Demo

A demonstration of micro-frontend architecture using React, TypeScript, Tailwind CSS, and Module Federation.

## Project Structure

```
micro-frontend-demo/
├── apps/
│   ├── host/                 # Host application (Container)
│   │   ├── src/
│   │   │   ├── components/   # Shared components
│   │   │   │   ├── ui/      # shadcn/ui components
│   │   │   │   │   └── button.tsx
│   │   │   │   └── Navbar.tsx
│   │   │   ├── pages/       # Application pages
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   └── Contact.tsx
│   │   │   ├── lib/         # Utility functions
│   │   │   │   └── utils.ts
│   │   │   ├── App.tsx      # Main application component
│   │   │   └── main.tsx     # Application entry point
│   │   ├── index.html       # HTML template
│   │   ├── package.json     # Host dependencies
│   │   ├── tsconfig.json    # TypeScript configuration
│   │   └── vite.config.ts   # Vite configuration
│   │
│   └── remote/              # Remote application (MFE)
│       ├── src/
│       │   ├── components/   # Shared components
│       │   │   ├── ui/      # shadcn/ui components
│       │   │   │   └── button.tsx
│       │   │   └── Navbar.tsx
│       │   ├── pages/       # Application pages
│       │   │   ├── Home.tsx
│       │   │   └── Products.tsx
│       │   ├── lib/         # Utility functions
│       │   │   └── utils.ts
│       │   ├── App.tsx      # Main application component
│       │   └── main.tsx     # Application entry point
│       ├── index.html       # HTML template
│       ├── package.json     # Remote dependencies
│       ├── tsconfig.json    # TypeScript configuration
│       └── vite.config.ts   # Vite configuration
│
├── package.json             # Root package.json
└── turbo.json              # Turborepo configuration
```

## Key Files Explanation

### Root Level

- `package.json`: Defines workspace configuration and shared scripts
- `turbo.json`: Turborepo configuration for managing the monorepo build system

### Host Application (apps/host)

- `src/App.tsx`: Main application component with routing setup
- `src/components/Navbar.tsx`: Navigation component with links to different pages
- `src/pages/`:
  - `Home.tsx`: Landing page component
  - `About.tsx`: About page with project information
  - `Contact.tsx`: Contact form page
- `src/components/ui/`: shadcn/ui components
- `vite.config.ts`: Vite configuration with Module Federation setup

### Remote Application (apps/remote)

- `src/App.tsx`: Remote application component with routing
- `src/components/Navbar.tsx`: Navigation for remote application
- `src/pages/`:
  - `Home.tsx`: Remote app landing page
  - `Products.tsx`: Products listing page
- `src/components/ui/`: shadcn/ui components
- `vite.config.ts`: Vite configuration with Module Federation setup

## Technology Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Monorepo Management**: Turborepo
- **Module Federation**: For micro-frontend architecture

## Running the Applications

1. Install dependencies:
```bash
npm install
```

2. Start both applications:
```bash
npm run dev
```

This will start:
- Host application on http://localhost:3000
- Remote application on http://localhost:3001

## Application Structure

### Host Application
- Acts as the container application
- Provides the main layout and navigation
- Integrates remote applications
- Contains shared components and styles

### Remote Application
- Standalone application that can be integrated into the host
- Has its own routing and state management
- Shares styling and component libraries with the host
- Can be developed and deployed independently"# react-micro-fe" 
