
# Dashboard New

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
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```sh
npm run build
```

### Linting
```sh
npm run lint
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
Custom navigation link using React Router. Accepts `to`, `className`, `activeClassName`, and `pendingClassName` props for styling based on route state.

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

## Deployment

You can deploy this app on Vercel, Netlify, or GitHub Pages. Example (Netlify):

1. Push your code to GitHub.
2. Go to [Netlify](https://netlify.com/) and connect your repository.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Deploy and copy your live site URL here:

**Demo:** [https://your-demo-url.netlify.app](https://your-demo-url.netlify.app)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

A modern dashboard application built with React, Vite, and Tailwind CSS.

## Features
- Interactive revenue map
- Theme toggle (light/dark)
- Responsive navigation
- Order list and notifications

## Getting Started
1. Install dependencies:
	```sh
	npm install
	```
2. Start development server:
	```sh
	npm run dev
	```

## Project Structure
- `src/` - Source code
- `public/` - Static assets
- `components.json` - Component registry
- `tailwind.config.js` - Tailwind CSS config
- `postcss.config.js` - PostCSS config

## License
MIT
- Navigate to the desired file(s).
