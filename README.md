# Blog test project using Astro

To create an astro project use:
```
npm create astro@latest -- --template basics
```

## 🚀 Project Structure

This project was create using the normal project structure, adding some extra components, as well as some
configurations using differents integrations like tailwind and react.
```
/
├── public/
│   --- favicon.svg
    --- assets/
        --- 404-apple.png
├── src/
│   ├── components/
│   │   --- atoms/
        --- organisms/
│   ├── layouts/
│   │   --- Layout.astro
        --- MenuContainer.jsx
        --- MenuLinkWrapper.jsx
        --- PostLayout.astro
│   └── pages/
│       --- posts/
            --- bubble-sort-algorithm.md
        --- 404.astro
        --- index.astro
        --- about.astro
└── package.json
```

## 🧞 Commands

Useful commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

