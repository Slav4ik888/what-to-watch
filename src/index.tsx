import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App/app';

import reducer from './reducers/reducer';
import {createAPI} from './api';
import {Operation as UserOperation, ActionCreator, AuthStatus} from './reducers/user/user';
import {Operation as WatchOperation} from './reducers/watch/watch';

import {titleFilm} from './consts';


// Выносим код в отдельную функцию, чтобы развязать циклическую зависимость:
// `store` зависит от `api`, а `api` зависит от `store`.
const onError = (err) => { // Если будет поймана ошибка 401 "нет авторизации", то будет вызвана эта функция
console.log('INDEX err: ', err);

  if (err === 400) {
    console.log('INDEX 400 Bad request');
    store.dispatch(ActionCreator.requireAuthorization(AuthStatus.NO_AUTH));
    store.dispatch(ActionCreator.setActiveAuth({}));
  }
  if (err === 401) {
    console.log('INDEX onUnauthorized');
    store.dispatch(ActionCreator.requireAuthorization(AuthStatus.NO_AUTH));
    store.dispatch(ActionCreator.setActiveAuth({}));
    // history.push(AppRoute.SIGN_IN);
  }
};


const api = createAPI(onError);


const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api))
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

store.dispatch(WatchOperation.loadFilms());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        titleFilm={titleFilm}
      />
    </Provider>
  , document.getElementById(`root`));
