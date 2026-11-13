# 海天集團國際有限公司 網站 | Holden Group website

A static website (HTML + CSS + JavaScript). No build step, no installation required.

## Run it in VS Code

1. Unzip this folder and open it in VS Code: **File → Open Folder… → holden-website**.
2. Install the **Live Server** extension (VS Code will suggest it automatically).
3. Right-click `index.html` → **Open with Live Server**.
   The site opens at `http://127.0.0.1:5500` and reloads every time you save.

Alternatives (no extension needed):
- Double-click `index.html` to open it directly in your browser, or
- In the VS Code terminal run `npx serve .` (needs Node.js) or `python -m http.server 8000`, then open the address it prints.

## Files

| File | What it is |
|---|---|
| `index.html` | All page content and sections, in Traditional Chinese (`class="zh"`) and English (`class="en"`) |
| `css/style.css` | All styling: colours, fonts, layout, mobile rules. Section colours are at the end of the file |
| `js/main.js` | Product data, language toggle, enquiry list, WhatsApp/email sending |
| `images/` | Put your photos here. File names are listed in `images/README.txt` |

## Common edits

- **Product text, origins, grades, units:** edit `FEATURES`, `PRODUCTS` and `SOON` at the top of `js/main.js`.
- **WhatsApp number / email for enquiries:** edit `CONTACT` at the top of `js/main.js`.
- **Any other text:** edit `index.html`. Every sentence has a `<span class="zh">…</span>` and a `<span class="en">…</span>`; change both.
- **Colours:** edit the variables in `:root { … }` near the top and bottom of `css/style.css`.
- **Photos:** drop files into `images/` with the names shown on each striped placeholder box; they appear automatically.

## Publishing

Upload the whole folder to any static web host (for example your current hosting's file manager, Netlify, Vercel or GitHub Pages). Keep the folder structure as it is.
