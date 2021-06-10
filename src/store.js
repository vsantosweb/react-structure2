import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import LayoutReducer from './app/layouts/reducer';
import storage from 'redux-persist/lib/storage/session';

const reducers = combineReducers({
    layout: LayoutReducer,
});

const persistConfig = {
    key: 'app',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, undefined, applyMiddleware(thunk)  /**applyMiddleware(thunk)*/);

const persistor = persistStore(store);

export { store, persistor };