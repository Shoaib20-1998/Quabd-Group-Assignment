
import {combineReducers,applyMiddleware,legacy_createStore} from 'redux'

import { reducer as Auth } from './Authentication/reducer'
import { reducer as jobsData} from  './Jobsdata/reducer'
import thunk from 'redux-thunk'
const rootReducer =  combineReducers({
    Auth,jobsData
})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))