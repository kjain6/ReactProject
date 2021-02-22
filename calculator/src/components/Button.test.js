import React from 'react-dom';
import ReactDOM from 'react-dom';
import './Button';
import { Button } from './Button';

//  Unit Test for Button Component
it("renders without crashing ", ()=>{
    const div =document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})