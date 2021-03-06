import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import rootReducer from './reducers'


// import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// ReactDOM.render(<App store={store} />, document.getElementById('root'));



const render = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    )
}

store.subscribe(() => {
    render()

})
render()










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
