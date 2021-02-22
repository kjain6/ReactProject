import React from 'react';
import ReactDOM from 'react-dom';
import './Input';
import { Input } from './Input';

// Unit Test for Input Component
it("renders without crashing ", ()=>{
    const div =document.createElement("div");
    ReactDOM.render(<Input/>, div)
})