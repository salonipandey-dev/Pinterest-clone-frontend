# Pinspire — Pinterest-inspired frontend

A responsive, interactive visual-discovery frontend built with **HTML, CSS and vanilla JavaScript**. No framework or build step is required.

## Features
- Responsive masonry feed with categories, live search and lazy-loaded images.
- Detail dialog with creator information, tags, likes, saves, follows and demo comments.
- Create a pin with an uploaded image, title, description and board. New pins appear in the active browser session.
- Saved pins, liked pins and followed creators persist through `localStorage`.
- Keyboard shortcut `/` to focus search and `Escape` to close dialogs.
- Reduced-motion support, focus-visible styling, and mobile-friendly layouts.

## Run locally
Clone the repo and open `index.html` in your browser, or use VS Code's Live Server extension. No npm installation needed.

## Project files
- `index.html` — main interface
- `indexstyle.css` — responsive styles
- `script.js` — pin data and UI behavior
- `Frontend-js/` — earlier prototype retained for reference

## Scope and limitations
This is a **frontend-only demonstration**: there is no account system, remote database, public upload service or real social network. Pins published during a session are not persisted across reloads. Likes, follows and saves are stored locally in your browser, not synchronized across devices. Demo images and avatars are fetched from third-party image hosts, so an internet connection is needed.

## Next steps
Add unit/browser tests, an authenticated backend, image storage, user profiles, saved boards and deployment through GitHub Pages.

---
Built as a learning project. Inspired by Pinterest; not affiliated with Pinterest.
