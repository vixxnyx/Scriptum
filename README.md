# Scriptum
Scriptum lets you read, annotate, and create — all in one elegant space. Highlight, write, and take side-by-side notes with a lightweight, modern app built for serious readers and creators.

# Features
* Read PDFs (view content)
* Edit PDFs (modify, underline, highlight, copy/paste, write into the pdf)
* Add a blank doc next to the pdf so that you can write notes as you go
* Write and Export PDFs (save changes, create new files)

# Build
This project is build as so:
| Backend | Frontend | App Shell |
|:--------|:--------:|:---------:|
| RUST    |SvelteKit | Tauri     |

* Installation
Below is how to install of the tools and dependencies. 
* Rust
* Node.js
* pnpm
* Tauri CLI

``` 
cargo install tauri-cli
``` 
```bash
git clone https://github.com/yourusername/pdf-write-reader-editor.git
cd pdf-write-reader-editor

# Install frontend dependencies
pnpm install

# Run the app in development mode
pnpm tauri dev

```

# Project Structure
* src-tauri/    # Rust backend (Tauri commands, PDF processing)
* src/          # SvelteKit frontend (UI)
* public/       # Static assets
* README.md     # Project documentation
* package.json  # Project metadata and scripts
* tauri.conf.json # Tauri configuration

