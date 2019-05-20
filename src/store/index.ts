import { createStore, combineReducers, applyMiddleware } from 'redux';
import { layoutReducer } from './layout/layout.reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    combineReducers({
        layout: layoutReducer,
    }),
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);



