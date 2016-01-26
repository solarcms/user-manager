/**
 * Created by n0m4dz on 11/11/15.
 */

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import TodoApp from './TodoApp';
//import { createStore, renderDevTools } from '../utils/devTools';
import TodoReducer from '../reducers/TodoListReducer';


let store = createStore(TodoReducer);

//const reducer = combineReducers(reducers);
//let store = createStore(reducer);

class App extends React.Component {
    render() {
        return <div>
            <Provider store={store}>
                <TodoApp />
            </Provider>
        </div>;
    }
}
export default App;