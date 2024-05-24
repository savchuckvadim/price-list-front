const initialState = {
    inProgress: true
}

const PRELOADER = 'PRELOADER'

export const setPreloader = (bool) => ({ type: PRELOADER, bool })

const preloader = (state = initialState, action) => {

    switch (action.type) {
        case PRELOADER:
            return state.inProgress !== action.bool
                ? { ...state, inProgress: action.bool }
                : state

        default:
            return state;
    }
}

export default preloader

