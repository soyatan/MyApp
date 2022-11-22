import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction, combineReducers} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {default as usersReducer} from './usersReducer';

const reducers = combineReducers({
  users: usersReducer,
});

//const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: reducers,

  middleware: [thunk],
});

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootStore, any, AnyAction>;

export const useAppDispatch = () => useDispatch<TypedDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
