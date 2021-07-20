import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import rootSaga from "./saga";
import  createSagaMiddleware from "redux-saga";


// Промежуточные слои для Redux DEV TOOLS 
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// Промежуточные слои для создания саги
const sagaMiddleware = createSagaMiddleware()




export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));


// Запускаем сагу
sagaMiddleware.run(rootSaga);




