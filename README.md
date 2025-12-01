# Quick Note Taker

A lightweight browser extension for capturing and organizing notes across the web. Part of the [Web Extension Pack](https://github.com/Louis2324/web-extension-pack).

## Features
- **Quick Capture**: Save notes instantly from any webpage
- **Context-Aware**: Automatically captures page URL and title
- **Organization**: Tag and categorize notes for easy retrieval
- **Search**: Find notes quickly with full-text search
- **Sync**: Notes sync across browsers using Chrome Sync
- **Keyboard Shortcuts**: Fast access with customizable shortcuts
- **Dark/Light Theme**: Choose your preferred interface


### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Louis2324/extension-note-taker.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension directory

## Usage

### Quick Note Capture
1. Click the extension icon in your toolbar
2. Type your note in the popup
3. Add tags (optional)
4. Click "Save" or press Ctrl+Enter

### Keyboard Shortcuts
- **Ctrl+Shift+N**: Open quick note popup
- **Ctrl+Shift+S**: Save current note
- **Ctrl+Shift+L**: Open all notes view

### Context Menu
Right-click on any page and select "Save selection as note" to quickly save highlighted text.

## Development

### Project Structure
```
extension-note-taker/
├── manifest.json          # Extension manifest
├── icons/                 # Extension icons
├── popup/                 # Popup interface
├── options/               # Options/settings page
├── background/            # Background service worker
├── content/               # Content scripts
└── utils/                 # Utility functions
```

### Technologies
- Manifest V3
- Vanilla JavaScript
- Chrome Storage API
- HTML/CSS

### Building from Source
```bash
# Clone the repository
git clone https://github.com/Louis2324/extension-note-taker.git

# Navigate to project directory
cd extension-note-taker

# Load in Chrome as unpacked extension
# (See Installation instructions above)
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap
- [ ] Basic note capture
- [ ] Chrome storage integration
- [ ] Rich text editing
- [ ] Advanced search filters
- [ ] Markdown support
- [ ] Cloud backup options
- [ ] Mobile browser support

## Related Projects
Check out other extensions in the Web Extension Pack:
- [Website Theme Switcher](https://github.com/Louis2324/extension-theme-switcher) - Change website themes on the fly

## License
This project is licensed under the MIT License.

## Support
For support, feature requests, or bug reports:
- Open an [issue](https://github.com/Louis2324/extension-note-taker/issues)
- Check the [project discussions](https://github.com/Louis2324/extension-note-taker/discussions)

## Acknowledgments
- Built as part of the Chrome Developer learning path
- Inspired by the need for quick, context-aware note taking
- Thanks to the Chrome Extensions documentation team

---

**Part of the Web Extension Pack** – A collection of browser extensions built to learn, experiment, and publish on the Chrome Web Store.

*Built  by [Louis2324](https://github.com/Louis2324)*