import {APP_ACTIONS} from "modules/app/actions";

function getInitialState() {
    return {
        selectedJob: null
    }
}

const INITIAL_STATE = getInitialState()

const state2actionMapping = {
    [APP_ACTIONS.APP_FILTER_EMPLOYESS]: (state, action) => {
        return {
            ...state,
            selectedJob: action.payload
        }
    }
}

export const appReducer = (state = INITIAL_STATE, action) => {
        return state2actionMapping[action.type] ? state2actionMapping[action.type](state, action) : state
}
