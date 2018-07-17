export default [
  {
    groupId: 0,
    title: 'Basic questions',
    icon: 'building',
    questions: [
      {
        questionId: 0,
        title: 'What is your name?',
        answers: [
          {
            answerId: 0,
            title: 'alex'
          },
          {
            answerId: 1,
            title: 'jim'
          }
        ]
      },
      {
        questionId: 1,
        title: 'What is your favorite color?',
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
    icon: 'rocket',
    questions: [
      {
        questionId: 2,
        title: 'What is your favorite pasta?',
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
        answers: [
          {
            answerId: 6,
            title: 'vanilla'
          },
          {
            answerId: 7,
            title: 'mint'
          }
        ]
      }
    ]
  }
];
