import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "../reducers/root-Reducer";
import createSagaMiddleware from 'redux-saga';
import rootsaga from '../../saga/root-Saga';



const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)(createStore)(rootReducer)


sagaMiddleware.run(rootsaga);

export default store;
