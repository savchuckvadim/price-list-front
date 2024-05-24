import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk';
import app from './reducers/app/app-reducer.js';

import preloader from './reducers/preloader/preloader-reducer';

import { router } from './reducers/router/router-reducer';
import priceList from './reducers/pricelist/price-list-reducer';




// Создайте общий редуктор один раз при инициализации приложения
export const rootReducer = combineReducers({
    app,
    router,
    priceList,
    preloader,
   

});


export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))

export default store