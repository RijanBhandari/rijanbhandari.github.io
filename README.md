# My Personal Website

Hey there! Welcome to the codebase for my personal website. I saw this [heilcheng/heilcheng.github.io](https://github.com/heilcheng/heilcheng.github.io) and got so amazed that i forked it made one for myself.

This portfolio is built with Next.js, styled with Tailwind CSS, and brought to life with Three.js and Framer Motion. It's automatically deployed to GitHub Pages, so it's always up-to-date.

## Table of Contents

- [Features: The Fun Stuff](#features-the-fun-stuff)
- [Tech Stack: What's Under the Hood?](#tech-stack-whats-under-the-hood)
- [How to Make This Your Own](#how-to-make-this-your-own)
- [Quick Start](#quick-start)
- [Deployment Magic](#deployment-magic)

## Features: The Fun Stuff

This site has:
### Dynamic & UI Features:

- **Aquarium Mode** (`/src/components/aquarium.tsx`): it is just cool.

- **Smooth Animations** (`/src/components/magicui/`): The beautiful, fluid animations are powered by Magic UI. These are not installed as a package but are included directly in the `src/components/magicui` directory, allowing for full customization. This includes the Dock navigation and the BlurFade effects.

- **MDX Blog** (`/src/app/blog/`): The blog is powered by MDX, which lets me write in Markdown and embed React components right into my posts.

## Tech Stack: What's Under the Hood?

It has a modern, performant, and enjoyable tech stack to build this portfolio.

- **Framework**: Next.js 14 (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & shadcn/ui
- **3D & Animation**: Three.js, React Three Fiber, & Framer Motion
- **Maps**: React Leaflet & react-simple-maps
- **Deployment**: GitHub Pages with GitHub Actions
- **Package Manager**: pnpm

## How to Make This Your Own

If you like what you see and want to build your own version, feel free to use this as a template!

### 1. Get the Code

Fork the repository and clone it to your local machine.

```bash
git clone https://github.com/YOUR_USERNAME/heilcheng.github.io.git
cd heilcheng.github.io
```

### 2. Install Dependencies

I use npm, but you can use pnpm or yarn as well.

```bash
npm install
```

### 3. Personalize It

**Your Info**: All the personal data (name, description, experience, projects, etc.) is in one place: `src/data/resume.tsx`. Just open it up and replace my info with yours. Look around you will find things modify make your own.

## Quick Start

Ready to run it locally?

```bash
npm dev
```

This will start the development server at http://localhost:3000.

## Deployment Magic

This portfolio is set up for automatic deployment to GitHub Pages. The workflow in `.github/workflows/deploy.yml` handles everything. Once you've set up your repository, every push to the main branch will automatically trigger the GitHub Action, which will build the site and deploy it to your GitHub Pages URL. Just make sure to add your GitHub PAT as a repository secret named `PERSONAL_ACCESS_TOKEN`.

---

Feel free to explore the code, and I'd love to see what you create with it!

