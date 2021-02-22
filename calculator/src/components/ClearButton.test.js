import React from 'react';
import ReactDOM from 'react-dom';
import './ClearButton';
import { ClearButton } from './ClearButton';

// Unit Test for ClearButton Component

it("renders without crashing ", ()=>{
    const div =document.createElement("div");
    ReactDOM.render(<ClearButton></ClearButton>, div)
})