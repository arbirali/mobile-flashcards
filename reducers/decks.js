import { GET_DECKS, ADD_DECK, ADD_CARD } from '../helpers/constants'

function decks (state={}, action) {
    switch(action.type) {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    title: [action.deck],
                    questions: []
                }
            }
        case ADD_CARD:
            let { id, question, answer } = action
            return {
                ...state,
                [id]: {
                    ...state[id],
                    questions: state[id].questions.concat({
                        question,
                        answer
                    })
                }
            }
        default:
            return state
    }
}

export default decks
