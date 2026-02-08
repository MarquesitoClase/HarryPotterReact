# HarryPotterReact

Example project built with React and Vite that displays Harry Potter character cards.

This repository contains a small React application that fetches character data and renders reusable components.

## Features

- UI built with React and Vite.
- Components organized by folder (`components/`) and subfolders.
- Fetch data to display character cards.
- Simple CSS styles.

## Technologies

- Node.js
- React
- Vite
- Fetch API
- ESLint (basic config)

## Requirements

- Node.js (>=16) and npm or yarn

## Installation and running

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Project structure

- public/ - Static files
- src/ - Source code
  - assets/ - Images and resources
  - components/ - React components
    - Card/HarryPotterCard.jsx
    - FetchCards/FetchCard.jsx
    - Header/Header.jsx, Header/Header.css
    - Footer/Footer.jsx, Footer/Footer.css
  - App.jsx - Root component
  - main.jsx - App entry point

## Main components

- `HarryPotterCard`: Card component to display character information.
- `FetchCard`: Component that performs the fetch and renders the cards.
- `Header` / `Footer`: App header and footer.

## API notes

The app uses client-side fetch requests to retrieve character data. If the external endpoint requires an API key or has CORS restrictions, adjust the data source or add a development proxy.

## Contributing

If you'd like to improve the project:

1. Fork the repo
2. Create a branch for your changes
3. Open a pull request describing your improvement

## License

This project is licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0).

See the `LICENSE` file for the full text of the license or visit https://creativecommons.org/licenses/by/4.0/.
