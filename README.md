# create-svelte

Everything you need to build a Svelte library, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

Read more about creating a library [in the docs](https://svelte.dev/docs/kit/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
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

# Installation
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

