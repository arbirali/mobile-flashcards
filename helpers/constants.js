export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const SYNC_STORAGE_KEY = 'MOBILE_FLASHCRADS'

export const colors = {
  primary:      '#990663',
  secondary:    '#022ab3',
  white:        '#ffffff'
}

export const SAMPLE_DECKS = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'Is React a JavaScript library?',
        answer: 'Yes! React is a Library.'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event.'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
