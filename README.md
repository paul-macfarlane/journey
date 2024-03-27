# Journey

This is a personal project to help my Girlfriend out with her Trauma Informed Care project for Medical School.

Hosted at https://paul-macfarlane-journey.netlify.app/

## Description

Journey is a site to help inform Medical Professionals about the trauma their patients may face.

Journeys are activities meant to cultivate empathy for the situations that patients may endure.

Some examples of a Journey include:

- A migrant crossing the U.S./Mexican Border
- A homeless person leaving the hospital without any shoes

## Technology

This all currently SSG since the content changes very infrequently, but could be updated to SSR if the need arose. The
core pieces of technology used here are

- [Astro](https://astro.build/)
- [Tailwind](https://tailwindcss.com/)
- A TINY bit of [TypeScript](https://www.typescriptlang.org/)

Astro is a nice tool for static or contentful sites that allows you to reuse components, create layouts, and render
Markdown without the overhead of using a SPA Framework if you don't need one. You can actually embed SPA frameworks like
React (I get that its technically a Library, but at this point it 2023 its essentially a framework) into an Astro App
in "Islands" that require user interactivity. However, the only piece of this app that requires user interactivity is
the Navbar, so I just added an inline script for this one area rather than reaching for something like React or Svelte.

## Data Setup

Note both Python and Node are required to run the scripts in this project. It is also recommended to use Pipenv to
manage the Python dependencies.

The actual data for the Journeys come from the output of an app called [Twine](https://twinery.org/).

To get the twine data to a useable is a journey in it of itself. The raw twine data is exported into
the [./scraping/twineHTML](./scraping/twineHTML) directory.

The [./scraping/parseTwineHTML.cjs](./scraping/parseTwineHTML.cjs) script is then run to parse the HTML into a JSON
format that can be used by the app by placing it in [./src/data/raw-cases](./src/data/raw-cases), where each file is a
different case.

As of right now there are more steps needed to get the data into a useable format. First, the raw case data will
sometimes have decisions with a value of "*", which needs to be removed manually. The script for parsing twine probably
just needs to be fixed to resolve that.

Then, the raw case data needs to have the images array of each page replaced with a new href and caption for citation.
That is done automatically via the [replace_images.py](scripts/replace_images.py) script.

From here, the data is now usable and the app can be built for deployment using `npm run build` and run locally
using `npm start`. This GitHub repo is setup to deploy to netlify on push to the main branch, so the site will be
updated automatically.

However, there is 1 final piece, which is allowing the app to be used locally without running the dev server. This is
needed because the Academic Journal that is submitted to requires the ability to open the app on their local component
and not on the web.

To support this, first make sure the app is built locally using `npm run build`. Then run the
script [build_local.py](scripts/build_local.py) which will copy the built app to the [local](local) directory, but with
paths adjusted so anyone can download the directory and use the app locally.

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