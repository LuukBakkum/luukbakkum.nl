# luukbakkum.nl

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fluukbakkum.nl)](https://luukbakkum.nl)
![GitHub Stars](https://img.shields.io/github/stars/LuukBakkum/luukbakkum.nl?style=social)
![GitHub Forks](https://img.shields.io/github/forks/LuukBakkum/luukbakkum.nl?style=social)
![GitHub last commit](https://img.shields.io/github/last-commit/LuukBakkum/luukbakkum.nl)
![GitHub contributors](https://img.shields.io/github/contributors/LuukBakkum/luukbakkum.nl)

Welcome to the repository for luukbakkum.nl! Firstly I would like to thank
[Sem Plaatsman](https://github.com/SemPlaatsman/semplaatsman.nl) with profiding the blueprint for
this beautiful portfolio. This project showcases a modern, fully responsive personal portfolio
website built with React. It has built-in support for emails, multilinguality, multiple themes, and
free hosting.

![luukbakkum.nl Mockup](./docs/assets/about-mockup.webp)

<p align="center">
   <img src="./docs/assets/lighthouse-results.png" alt="luukbakkum.nl Lighthouse results" style="width: 75%" />
</p>

> 💡 This project draws significant inspiration from
> [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio).
> A heartfelt thank you to the original authors for their outstanding work, which served as a
> foundation for this portfolio. If you're looking for an HTML/CSS/JS alternative, please checkout
> their repository! For a full list of acknowledgments, please see the
> [Acknowledgements](#acknowledgements) section.

## 📃 Table of Contents

- [🎥 Demo](#🎥-demo)
- [🌟 Features](#🌟-features)
- [🛠️ Tech Stack](#🛠️-tech-stack)
- [📋 Prerequisites](#📋-prerequisites)
- [🚀 Quick Start Guide](#🚀-quick-start-guide)
- [🎨 Customization](#🎨-customization)
- [🚢 Deployment](#🚢-deployment)
- [📖 Documentation](#📖-documentation)
- [🤝 Contributing](#🤝-contributing)
- [📜 Code of Conduct](#📜-code-of-conduct)
- [⚖️ License](#⚖️-license)
- [📫 Contact](#📫-contact)
- [🙏 Acknowledgements](#🙏-acknowledgements)

## 🎥 Demo

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">About</summary>

[![About mockup of luukbakkum.nl](./docs/assets/about-mockup.webp)](https://luukbakkum.nl/)

</details>

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">Resume</summary>

[![Resume mockup of luukbakkum.nl](./docs/assets/resume-mockup.webp)](https://luukbakkum.nl/resume)

</details>

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">Projects</summary>

[![Projects mockup of luukbakkum.nl](./docs/assets/projects-mockup.webp)](https://luukbakkum.nl/projects)

</details>

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">Contact</summary>

[![Contact mockup of luukbakkum.nl](./docs/assets/contact-mockup.webp)](https://luukbakkum.nl/contact)

</details>

Visit the live site: [luukbakkum.nl](https://luukbakkum.nl/)

## 🌟 Features

- 📱 Fully responsive for all devices
- 🧩 Component-based architecture for reusable and maintainable code
- 🎨 Support for multiple themes
- 🌍 Built-in multilingual support
- ⚡ Excellent
  [Google Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=nl&pli=1)
  performance
- 📧 Multilingual email integration with address obfuscation
- 🌐 Free hosting via [GitHub Pages](https://pages.github.com/)

## 🛠️ Tech Stack

- ⚛️ [React](https://react.dev/)
- 🏗️ [Vite](https://vitejs.dev/)
- 📘 [TypeScript](https://www.typescriptlang.org/)
- 🎨 [SCSS](https://sass-lang.com/)
- 🌍 [reacti18next](https://react.i18next.com/)
- 🧭 [React Router](https://reactrouter.com/en/main)
- ⛑️ [React Helmet](https://www.npmjs.com/package/react-helmet)
- 🔣 [React Icons](https://react-icons.github.io/react-icons/)
- 🔍 [ESLint](https://eslint.org/)
- 🪓 [axe-core](https://www.npmjs.com/package/axe-core)
- 💅 [Prettier](https://prettier.io/)

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/en) and npm (comes with
  Node.js)
- You have a Windows/Linux/Mac machine with [Git](https://git-scm.com/downloads) installed

## 🚀 Quick Start Guide

To get started with this project:

1. Installation:

   ```bash
   git clone https://github.com/LuukBakkum/luukbakkum.nl.git
   cd luukbakkum.nl
   npm install
   ```

2. Configuration:

   - Copy [`.env.example`](./.env.example) to [`.env`](./.env) and update the values as needed

3. Running locally:

   ```bash
   npm run dev
   ```

## 🎨 Customization

To customize to project for your own use:

1. Fork this repository to your GitHub account

2. Update configuration files in [`src/config/`](./src/config/)

3. Modify content in [`public/locales/`](./public/locales/)

4. Adjust styles in [`src/styles/_variables.scss`](./src/styles/_variables.scss)

5. Update personal information in various files (see
   [Configuration and Customization](https://github.com/LuukBakkum/luukbakkum.nl/wiki/Configuration-and-Customization)
   in the wiki for details)

## 🚢 Deployment

This project uses [GitHub Pages](https://pages.github.com/) for hosting, with
[Cloudflare](https://www.cloudflare.com/) for CDN and DNS management. The deployment process is
automated through [GitHub Actions](https://github.com/features/actions). When changes are merged to
the `main` branch, the application is automatically built and deployed.

For detailed setup instructions, refer to the
[Hosting and Deployment](https://github.com/LuukBakkum/luukbakkum.nl/wiki/Hosting-and-Deployment)
section in the wiki.

## 🤝 Contributing

If you like this project and feel like contributing, you can find the documentation on how to do so
on [Sem Plaatsman's](https://github.com/SemPlaatsman/semplaatsman.nl) GitHub page.

## 📫 Contact

Luuk Bakkum - [LinkedIn](https://www.linkedin.com/in/luuk-bakkum/) -
[dev@luukbakkum.nl](mailto:dev@luukbakkum.nl)

Project Link: [LuukBakkum/luukbakkum.nl](https://github.com/LuukBakkum/luukbakkum.nl)

## 🙏 Acknowledgements

Mockups were generated through the
[Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php) from
[TechSini.com](https://techsini.com/).

This project is based on the work of [codewithsadee](https://github.com/codewithsadee) and
[Sem Plaatsman](https://github.com/SemPlaatsman/semplaatsman.nl). The
[original repository](https://github.com/codewithsadee/vcard-personal-portfolio) provided the
foundation and inspiration for this portfolio website. I express my gratitude for their excellent
work and for making it available under the [MIT license](https://opensource.org/license/mit).
