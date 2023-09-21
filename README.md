# Journey

This is a tiny personal project to help my Girlfriend out with her Trauma Informed Care project for Medical School.

Hosted at https://paul-macfarlane-journey.netlify.app/

## Description

Journey is a site to help inform Medical Professionals about the trauma their patients may face.

Journeys are activities meant to cultivate empathy for the situations that patients may endure.

Some examples of a Journey include:
- A migrant crossing the U.S./Mexican Border
- A homeless person leaving the hospital without any shoes


## Technology

This all currently SSG, but could be updated to SSR if the need arose. The core pieces of technology used here are
- [Astro](https://astro.build/)
- [Tailwind](https://tailwindcss.com/)
- A TINY bit of [TypeScript](https://www.typescriptlang.org/)

Astro is a nice tool for static or contentful sites that allows you to reuse components, create layouts, and render Markdown without the overhead of using a SPA Framework if you don't need one. You can actually embed SPA frameworks like React (I get that its technically a Library, but at this point it 2023 its essentially a framework) into an Astro App in "Islands" that require user interactivity. However, the only piece of this app that requires user interactivity is the Navbar, so I just added an inline script for this one area rather than reaching for something like React or Svelte.

## Running Locally

Make sure Node is installed on your machine. You can then run

```shell
npm i
```

to install dependencies and then run

```shell
npm start
```

to run the app locally at http://localhost:4321/
