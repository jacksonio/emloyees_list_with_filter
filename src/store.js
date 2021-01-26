import {combineReducers, applyMiddleware, compose, createStore} from 'redux'
import apiReducer from "./modules/api/reducer";
import createSagaMiddleware from 'redux-saga'
import {apiRootSaga} from "./modules/api/saga";
import {appReducer} from "./modules/app/reducers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const rootStore = combineReducers({
    api: apiReducer,
    app: appReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootStore, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(apiRootSaga)


export default store
