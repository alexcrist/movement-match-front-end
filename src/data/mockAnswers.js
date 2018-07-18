export default [
  {
    groupId: 0,
    title: 'Basic questions',
    questions: [
      {
        questionId: 0,
        title: 'What is your name?',
        answer: [0],
        answers: [
          {
            answerId: 0,
            title: 'alex'
          },
          {
            answerId: 1,
            title: 'not alex'
          }
        ]
      },
      {
        questionId: 1,
        title: 'What is your favorite color?',
        answer: [1],
        answers: [
          {
            answerId: 2,
            title: 'blue'
          },
          {
            answerId: 3,
            title: 'red'
          }
        ]
      }
    ]
  },
  {
    groupId: 1,
    title: 'Food questions',
    questions: [
      {
        questionId: 2,
        title: 'What is your favorite pasta?',
        answer: [1],
        answers: [
          {
            answerId: 4,
            title: 'rigotoni'
          },
          {
            answerId: 5,
            title: 'spaghetti'
          }
        ]
      },
      {
        questionId: 3,
        title: 'Which icecream flavors do you like?',
        multipleChoice: true,
        answer: [0, 1, 2],
        answers: [
          {
            answerId: 6,
            title: 'vanilla'
          },
          {
            answerId: 7,
            title: 'mint'
          },
          {
            answerId: 8,
            title: 'every flavor ever literally all of them'
          }
        ]
      }
    ]
  }
];
