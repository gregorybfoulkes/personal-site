# personal-site

My personal website, built with [Hexo](https://hexo.io/) 8 and the [Landscape](https://github.com/hexojs/hexo-theme-landscape) theme.

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended) and npm

## Getting started

```bash
git clone git@github.com:gregorybfoulkes/personal-site.git
cd personal-site
npm install
npm run server
```

The dev server runs at <http://localhost:4000> and reloads as files change.

## Scripts

| Command          | What it does                                  |
| ---------------- | --------------------------------------------- |
| `npm run server` | Start the local dev server                    |
| `npm run build`  | Generate the static site into `public/`       |
| `npm run clean`  | Remove `public/` and the Hexo cache (`db.json`) |
| `npm run deploy` | Deploy using the `deploy` settings in `_config.yml` |

## Writing content

Create a new post (uses `scaffolds/post.md` as the template):

```bash
npx hexo new post "My post title"
```

Drafts and pages work the same way with `npx hexo new draft "..."` and `npx hexo new page "..."`.
Publish a draft with `npx hexo publish "My post title"`.

## Project layout

```
.
├── _config.yml            # Site configuration
├── _config.landscape.yml  # Theme configuration overrides
├── scaffolds/             # Templates for new posts, pages and drafts
├── source/
│   └── _posts/            # Blog posts (Markdown)
└── themes/                # Local themes (Landscape is installed from npm)
```

`public/`, `db.json` and `node_modules/` are generated and ignored by git.

## Dependencies

Dependabot checks npm dependencies daily (see `.github/dependabot.yml`).
