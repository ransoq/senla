import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from './reducers';

const logMiddleware = ({getState}: {getState:Function}) => (next: Function) => (action: {type: string}): Function => {
    console.log(action.type, getState());

    return next(action);
}

const stringMiddleware = () => (next: Function) => (action: {}): Function => {
    if (typeof action === "string") {
        return next({
            type: action
        });
    }

    return next(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));

const delayActionCreator = (timeout: number) => (dispatch: Function) => {
    setTimeout(() => dispatch({
        type: 'DELAY_ACTION'
    }), timeout);
};

store.dispatch(delayActionCreator(3000));

export default store;