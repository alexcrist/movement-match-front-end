# Movement Match Front End

> A React front end for the Movement Match project

## Website

https://alexcrist.github.io/movement-match-front-end/

## Contributing

### Requirements

You'll need this stuff

- `git`
- `npm (3.10.10)`
- `node (6.10.2)`
- `yarn (1.7.0)`

### Initializing the project

Clone this project

- `git clone https://github.com/alexcrist/movement-match-front-end.git`

Navigate to the root directory of the project

- `cd movement-match-front-end`

Install project dependencies

- `yarn`

### Running the Developement Server

Run the developement server

- `yarn start`

The project will be live at

- `http://localhost:3000`

### Deploying

If you have write access to this repository, you can deploy to GitHub pages with

- `yarn run deploy`

## Project Structure

```
├── public/
│   ├── favicon.ico          Favicon
│   └── index.html           Main HTML template for project
│
└── src/
    ├── App/
    │   ├── Contributors/    Contributors page
    │   ├── Home/            Home page
    │   ├── Quiz/            Quiz page
    │   ├── Results/         Results page
    │   ├── App.css          App styles
    │   └── App.js           Highest level component
    │ 
    ├── assets/              Static assets
    ├── data/                Back end mock data
    ├── util/                Miscellaneous utility code
    ├── index.css            Re-usable styles and theme
    └── index.js             Entry point
```

## Interactions with back end

Currently all the back end interactions are mocked out. The front end expects all data to be passed via JSON. There are currently two mocked out interactions, **fetching the question groups**, and **processing the user's answers**.

### Fetching Question Groups


### Processing the Users's Answers


## Code Style

- Indentation: 2 spaces
- Wrap lines at 80 characters
- Component CSS class names always start with `Component-` to avoid collisions
- Opt for descriptive variables names, intentional whitespace, and self-explanatory code over verbose comments

## License

MIT
