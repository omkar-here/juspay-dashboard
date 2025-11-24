
## Juspay UI Assignment

# Find video recording here - https://youtu.be/OJXnyxYqA1U
# Hosted link - https://juspay-assignment-omkar-dashboard.netlify.app/

A modern dashboard application built with React, Vite, and Tailwind CSS.

## Features
- Interactive revenue map
- Theme toggle (light/dark)
- Responsive navigation
- Order list and notifications

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
	 ```sh
	 git clone <your-repo-url>
	 cd dashboard-new
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 ```
3. Start the development server:
	 ```sh
	 npm run dev
	 ```
4. Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production
```sh
npm run build
```

## Project Structure
- `src/` - Source code
	- `components/` - Reusable UI components
		- `NavLink.jsx` - Custom navigation link component
		- `ThemeToggle.jsx` - Theme switcher (light/dark)
		- `RevenueMap.jsx` - Interactive world map for revenue
		- `ui/` - UI primitives (button, toast, tooltip, etc.)
	- `pages/` - Application pages
		- `Dashboard.jsx` - Main dashboard layout
		- `OrderList.jsx` - Orders table with search/filter
		- `dashboard/Sidebar.jsx` - Sidebar navigation
	- `hooks/` - Custom React hooks
	- `lib/` - Utility functions
	- `data/` - Sample data for demo
- `public/` - Static assets (maps, robots.txt, etc.)
- `index.html` - Main HTML entry point
- `package.json` - Project metadata and scripts
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Component Documentation

### NavLink.jsx
Custom navigation link using React Router. Accepts `to`, `className`, `activeClassName" props for styling based on route state.

### ThemeToggle.jsx
Theme switcher using `next-themes`. Toggles between light and dark modes.

### RevenueMap.jsx
Displays a world map with markers for key locations. Uses `react-simple-maps` and adapts colors based on theme.

### Sidebar.jsx
Sidebar navigation with expandable menu items and tabs for Favorites/Recently. Accepts state props for menu/tab control.

### OrderList.jsx
Paginated, searchable, and filterable order table. Uses sample data and supports sorting by date/user.

### Utility Functions
`lib/utils.js` provides a `cn` function for merging Tailwind classes.



