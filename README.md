# Tanush | Personal Portfolio

My personal portfolio site: a dark, neon-themed single page that shows my projects, skills, experience and interests. It is built by hand with plain HTML, CSS and JavaScript, with no frameworks and no build step.

**Live site:** https://goldengamer255.github.io/personal-portfolio/

## What's on the page

- **Hero:** a short introduction, links to my projects and contact details, and my availability for internships and graduate roles.
- **Toolbox:** the languages, web frameworks and tools I work with.
- **Featured work:** 11 projects with a custom illustration for each, filterable by category (Web, Backend, Systems, AI).
- **Experience and education:** a timeline of my degree and work history.
- **Beyond code:** hobbies and interests outside of software.
- **Contact:** email, GitHub and LinkedIn.

## Features

- Responsive layout that works from phones to wide desktop screens.
- Project filters that update the grid instantly, with an empty state for categories with no projects.
- Scroll-reveal animations and a navigation bar that highlights the section you are reading.
- Accessibility basics: a skip link, visible keyboard focus styles, semantic HTML, `aria-pressed` on the filter buttons, and `prefers-reduced-motion` support that switches the animations off.
- Hand-built SVG illustrations for every project, so the images stay sharp at any size and are tiny to load.
- Link preview tags (Open Graph) and a favicon.

## Tech

| Area | Choice |
| --- | --- |
| Markup | Semantic HTML5 |
| Styling | Plain CSS with custom properties, Grid and Flexbox |
| Behaviour | Vanilla JavaScript (`IntersectionObserver` for reveals and nav highlighting, a small filter script) |
| Fonts | Space Grotesk, Inter and JetBrains Mono, loaded from Google Fonts |
| Hosting | GitHub Pages |

## Project structure

```
personal-portfolio/
├── index.html          # All page content
├── style.css           # Design tokens, layout and components
├── script.js           # Scroll reveal, nav highlighting, project filters
├── avatar-720.jpg      # Portrait used in the hero
├── favicon.svg         # Browser tab icon
├── og-image.png        # Link preview image (1200 x 630)
└── images/
    └── projects/       # One SVG illustration per project
```

## Run it locally

There is nothing to install. Either open `index.html` in a browser, or serve the folder so it behaves like the live site:

```bash
# from the project folder
python -m http.server 8000
# then visit http://localhost:8000
```

The fonts load from Google Fonts, so you need an internet connection to see the intended typography. Without one the site falls back to your system fonts.

## Customising

- **Colours and fonts:** edit the custom properties at the top of `style.css` (`--accent-glow`, `--accent-highlight`, `--font-display`, and so on).
- **Projects:** each project is an `<article class="project-card">` in `index.html`. The `data-tags` attribute controls which filters it appears under (`web`, `backend`, `systems`, `ai`). Add a matching SVG to `images/projects/` and an `<img class="project-media">` at the top of the card.
- **Link preview:** the `og:url` and `og:image` tags in the `<head>` of `index.html` use the GitHub Pages address. Update them if the site moves to a different domain.

## Deployment

The site is deployed with GitHub Pages straight from the `main` branch:

1. Push to `main`.
2. In the repository, go to **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.

## A note on the projects

Most of the projects shown are university coursework. Their source code is kept private to respect academic integrity rules, so those cards describe the work rather than link to a repository. I am happy to walk through any of them in an interview.

## Contact

- Email: tanush.panu@gmail.com
- GitHub: [Goldengamer255](https://github.com/Goldengamer255)
- LinkedIn: [Profile](https://www.linkedin.com/in/tanush-panuganti-09126b2b0)

## Credits

- Portrait: my own photo.
- Project illustrations: drawn as SVG for this site.
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), all open source via Google Fonts.
