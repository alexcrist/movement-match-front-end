# Movement Match (front end)

> A React front end for the Movement Match project

## 📚 Contents

- [🐈 Website](#-website)
- [🤲 Contributing](#-contributing)
- [🏗️ Project Structure](#-project-structure)
- [📡 Interactions with Back End](#-interactions-with-back-end)
- [⛲ Code Style](#-code-style)

## 🐈 Website

https://alexcrist.github.io/movement-match-front-end/

## 🤲 Contributing

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

## 🏗️ Project Structure

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

## 📡 Interactions with Back End

Currently all the back end interactions are mocked out. The front end expects all data to be passed via JSON. There are currently two mocked out interactions, [fetching groups of questions](#fetching-groups-of-questions), and [processing the user's answers](#processing-the-userss-answers).

### Fetching groups of questions

The front end expects that it will recieve a **QuestionGroup** JSON array with the following schema:

```
Array of QuestionGroups

[
    {
        groupId: Number,
        title: String,
        questions: [
            {
                questionId: Number,
                title: String,
                multipleChoice: Boolean (optional)
                answers: [
                    {
                        answerId: Number,
                        title: String
                    }
                ]
            }
        ]
    }
]
```

In english, each **QuestionGroup** has an ID, a title, and an array of **Questions**. Each **Question** also has an ID and a title, as well as an optional field `multipleChoice` which, when true, will allow the user to select multiple answers. Each **Question** also has an array of **Answers** which each have an ID and a title.

An example of a **QuestionGroup** array can be found [here](./src/data/mockQuestions.js).

### Processing the users's answers

When the user completes the quiz, they post an array of **AnswerGroups** back to the sever. An **AnswerGroup** is identical to a **QuestionGroup** except that there is an additional field `answer` on each question whose value is an array of the indices of the chosen answers.

An example of an **AnswerGroup** array can be found [here](./src/data/mockAnswers.js).

After posting to the back end, the front end will expect a JSON array of **Results** where each **Result** represents an activist movement as a response from the back end with the following schema:

```
Array of Results

[
    {
        resultId: Number,
        name: String,
        description: String (optional),
        websiteLink: String (url) (optional),
        donateLink: String (url) (optional),
        image: String (url) (optional)
    }
]
```

An example of a **Result** array can be found [here](./src/data/mockResults.js).

## ⛲ Code Style

- Indentation: 2 spaces
- Wrap lines at 80 characters
- Component CSS class names always start with `Component-` to avoid collisions
- Opt for descriptive variables names, intentional whitespace, and self-explanatory code over verbose comments
