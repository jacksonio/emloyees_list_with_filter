import ENDPOINTS from "modules/api/endpoints";
import camelcase from "camelcase";
import {API_ACTIONS} from "./actions";

function createInitialState() {
    return Object.keys(ENDPOINTS).reduce((acc, next) => {
        acc[camelcase(next)] = {
            data: null,
            loading: false,
            error: false
        }

        return acc
    }, {})
}

const initialState = createInitialState()

const apiReducer = (state = initialState, action) => {
    if (action.type.startsWith(API_ACTIONS.FETCH_START)) {
        const inner = camelcase(action.type.replace(API_ACTIONS.FETCH_START, ''))

        return {
            ...state,
            [inner]: {
                ...state[inner],
                loading: true,
                error: null
            }
        }
    }

    if (action.type.startsWith(API_ACTIONS.FETCH_SUCCESS)) {
        const inner = camelcase(action.type.replace(API_ACTIONS.FETCH_SUCCESS, ''))

        return {
            ...state,
            [inner]: {
                ...state[inner],
                data: action.payload,
                loading: false,
                error: null
            }
        }
    }

    if (action.type.startsWith(API_ACTIONS.FETCH_FAILURE)) {
        const inner = camelcase(action.type.replace(API_ACTIONS.FETCH_FAILURE, ''))

        return {
            ...state,
            [inner]: {
                ...state[inner],
                loading: false,
                error: action.payload
            }
        }
    }

    return state

}

export default apiReducer
