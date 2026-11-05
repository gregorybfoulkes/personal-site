# personal-site

My personal blog, built with [Hexo](https://hexo.io/) 8 and a small local theme.

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

## Running with Docker

Start the site at <http://localhost:3000> with:

```bash
docker compose up --build
```

For the debug configuration, run `docker compose -f compose.debug.yaml up --build`.

## VS Code Dev Container

Reopen the repository in a Dev Container to use Node.js LTS. Dependencies are installed with `npm ci`, and port `3000` is forwarded for `npm start`.

## Scripts

| Command          | What it does                                  |
| ---------------- | --------------------------------------------- |
| `npm run server` | Start the local dev server                    |
| `npm start`      | Start the site on port `3000`                  |
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

Posts support `title`, `date`, `categories`, and `tags` in their YAML front matter. Add post-specific images or other files to the folder Hexo creates beside the post; reference Markdown images by their filename.

The About page is at `source/about/index.md`. Its title and layout are ready; add your own content below the front matter.

## Pages

The theme provides a recent-post homepage, individual post pages, archives by year and month, category and tag listings, and a tag index. Lists are paginated using the settings in `_config.yml`.

## Project layout

```
.
├── _config.yml            # Site configuration
├── scaffolds/             # Templates for new posts, pages and drafts
├── source/
│   ├── _posts/            # Blog posts (Markdown)
│   └── about/             # About page
└── themes/
    └── blank/             # Site layouts and stylesheet
```

`public/`, `db.json` and `node_modules/` are generated and ignored by git.

## Dependencies

Dependabot checks npm dependencies daily (see `.github/dependabot.yml`).
