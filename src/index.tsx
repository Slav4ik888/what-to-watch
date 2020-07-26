import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App/app';

import {mockCards} from './mocks/cards';
import {CardType} from './types';


const name = `The Grand Budapest Hotel`;
const genre = `Comedy`;
const released = 2014;


ReactDOM.render(
    <App name={name} genre={genre} released={released} catalogMoviesList={mockCards}/>
    , document.getElementById(`root`));
