# Inscribe Extension

Inscribe is a Chrome extension for quick note-taking with a rich text editor, a drawing canvas, sticky notes on webpages, and speech-to-text support.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Guide](#usage-guide)
- [Permissions](#permissions)
- [Data Storage](#data-storage)
- [Localization](#localization)
- [Known Limitations](#known-limitations)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Overview
Inscribe provides an in-browser workspace for writing and organizing notes:
- **Home tab (`index.html`)** for rich text writing and drawing.
- **Notes tab (`note.html`)** for listing, editing, copying, deleting, and exporting notes.
- **Accounts tab (`settings.html`)** for theme selection and subscription status.
- **Floating sticky note** injected into websites from a context menu action.
- **Speech-to-text page (`speech.html`)** used as a dedicated page for speech recognition.

The extension includes free and premium behaviors, with premium/trial checks performed through ExtensionPay.

## Features

### Writing and Formatting
- Content-editable writing area.
- Text formatting actions (bold, italic, underline, lists, links, alignment, undo/redo, and more).
- Save typed content as downloadable files in multiple formats (`.txt`, `.ppt`, `.js`, `.doc`, `.html`).

### Drawing Canvas
- Brush and eraser tools.
- Shape tools (rectangle, circle, triangle, line).
- Color presets and custom color picker.
- Fill toggle for shapes.
- Undo/redo for drawn paths.

### Notes Management
- Save notes to local storage.
- Render saved notes with date metadata.
- Edit existing notes.
- Copy note content to clipboard.
- Delete notes.
- Export notes locally from the Notes page.

### Sticky Notes on Any Site
- Context menu action: **“Add an Inscribe Sticky Note here”**.
- Injected floating note panel with:
  - drag support,
  - theme colors,
  - inline editable note body,
  - delete option,
  - local-save action (premium/trial gated).

### Speech to Text
- Dedicated speech page for dictation.
- Copy recognized text to clipboard.
- Connectivity-aware behavior with error UI when offline.

### Themes
- Multiple UI themes saved in `localStorage`.
- Theme affects controls/buttons across core views.

### Subscription Handling
- ExtensionPay integration in background and UI pages.
- Free vs paid/trial-based feature access checks for selected actions.

## How It Works
1. **Background service worker** starts ExtensionPay and registers a context menu.
2. **Content script** listens for context-menu-triggered messages and injects sticky-note UI.
3. **Popup pages** handle home writing/drawing, notes management, and settings.
4. **Local storage** persists notes and selected theme.
5. **Speech page** handles browser speech recognition in a dedicated tab context.

## Project Structure
```text
.
├── manifest.json           # Extension manifest (MV3)
├── background.js           # Service worker + context menu + payment bootstrap
├── contentOwn.js           # Injected sticky-note experience
├── index.html / index.js   # Main editor + canvas
├── note.html / note.js     # Saved notes management
├── settings.html / settings.js # Theme + subscription view
├── speech.html / speech.js # Speech-to-text page
├── ExtPay.js               # ExtensionPay SDK
├── css/                    # Page styles
├── images/                 # Icons and UI assets
└── _locales/               # i18n message files
```

## Installation

### Load as an unpacked extension
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the repository directory.

## Configuration

### ExtensionPay IDs
The codebase references ExtensionPay IDs in multiple places:
- `background.js` uses `ExtPay("inscribe")`.
- `popup.js` currently contains a sample ID (`ExtPay('sample-extension')`) and comments indicating it should match your ExtensionPay registration.

For payment flows to work correctly in your deployment, ensure IDs are aligned where needed.

## Usage Guide

### Home (`index.html`)
- Write formatted notes in the text area.
- Draw on the canvas using tools/colors.
- Save content as a downloadable file.
- Use **Save as Note** to persist notes for the Notes page.

### Notes (`note.html`)
- Browse saved notes.
- Open note menu actions:
  - edit,
  - copy,
  - delete,
  - save locally.

### Accounts (`settings.html`)
- Change theme.
- View current subscription state.
- Open subscription details.

### Sticky Notes (on webpages)
- Right-click on any page.
- Choose **Add an Inscribe Sticky Note here**.
- Interact with the injected floating note.

### Speech to Text (`speech.html`)
- Start speech recognition.
- Copy generated text.
- Paste or save output as needed in Inscribe.

## Permissions
From `manifest.json`, the extension requests:
- `storage`: for local persistence.
- `activeTab`: for current tab interactions.
- `contextMenus`: for right-click menu integration.

It also injects scripts on:
- `https://extensionpay.com/*` (ExtensionPay integration),
- `<all_urls>` (sticky-note experience).

## Data Storage
Primary local keys used by the extension include:
- `myNotes`: serialized saved notes collection.
- `theme`: selected UI theme.

## Localization
The extension sets `default_locale` to `en` and includes locale files in:
- `_locales/ar`
- `_locales/en`
- `_locales/es`
- `_locales/fr`
- `_locales/hi`
- `_locales/ja`
- `_locales/pt_PT`
- `_locales/ru`
- `_locales/zh_CN`

## Known Limitations
- Speech recognition depends on browser support and internet connectivity.
- Some advanced behaviors are gated by paid/trial subscription checks.
- This repository currently has no automated test or lint configuration.

## Troubleshooting
- **Extension does not load:** validate `manifest.json` and reload from `chrome://extensions`.
- **Payment/subscription issues:** verify ExtensionPay IDs are set correctly and consistent.
- **Speech not working:** check internet connectivity and browser speech-recognition support.
- **Sticky note not appearing:** reload the target tab and retry via context menu.

## Contributing
1. Fork the repository.
2. Create a feature branch.
3. Make and test changes locally by reloading the unpacked extension.
4. Open a pull request with a clear summary and screenshots for UI changes.
