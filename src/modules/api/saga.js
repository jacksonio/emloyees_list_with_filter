import {API_ACTIONS, apiActions} from 'modules/api/actions'
import api from "modules/api/api";
import {all, put, takeEvery} from "redux-saga/effects";



export function* onApiLoad({payload, type}) {
    const actionType = type.replace(API_ACTIONS.FETCH_START, '').toLowerCase()

    try {
        const response = yield api.fetch(actionType, payload)

        yield put(apiActions.fetchSuccess(actionType, response))

    } catch (e) {
        yield put(apiActions.fetchFailure(actionType, e))
    }

}



export function* watchApiLoad() {
    yield takeEvery(action => action.type.startsWith(API_ACTIONS.FETCH_START), onApiLoad)
}

export function* apiRootSaga() {
    yield all([
        watchApiLoad()
    ])
}
