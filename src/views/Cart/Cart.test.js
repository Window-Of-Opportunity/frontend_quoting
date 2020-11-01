import Cart from './Cart';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

it('test test case', () => {
    expect(3).toEqual(3);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    act(() => {ReactDOM.render(<Cart />, div)});
});

it('Session Storage store test', () => {
    const myStorage = sessionStorage;
    myStorage.setItem('Cookie', 'Sugar');
    expect('Sugar').toEqual(myStorage.getItem('Cookie'));
    myStorage.removeItem('Cookie');
});

it('Session Storage removal test', () => {
    const myStorage = sessionStorage;
    myStorage.setItem('Cookie', 'sugar');
    myStorage.removeItem('Cookie');
    expect(null).toEqual(myStorage.getItem('Cookie'));
});