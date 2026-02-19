# Portfolio

Personal portfolio site for Aashutosh Jung Thapa. Built as a static site and deployed via GitHub Pages from the `docs/` folder.

## Live Site

- GitHub Pages: https://aashujt.github.io
- Custom domain (is-a.dev): https://aashutosh.is-a.dev

## Project Structure

- `docs/` - Static site source (this is what GitHub Pages publishes)
  - `index.html`
  - `css/style.css`
  - `js/script.js`
  - `img/avatar.png`

## Local Preview

From the repository root:

```bash
python3 -m http.server 8000
```

Open: http://localhost:8000/docs/

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
4. Save, then wait for the deployment to complete.

## Custom Domain (is-a.dev)

1. Ensure `docs/CNAME` contains your domain (for example, `aashutosh.is-a.dev`).
2. In GitHub Pages settings, set **Custom domain** to the same value.
3. Enable **Enforce HTTPS** after DNS is active.

If your domain changes, update `docs/CNAME` and the Pages settings to match.

## Update Content

- Main content: `docs/index.html`
- Styles: `docs/css/style.css`
- Scripts: `docs/js/script.js`
- Avatar: `docs/img/avatar.png`
