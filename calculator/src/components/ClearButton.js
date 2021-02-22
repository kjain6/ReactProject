import React from'react';
import './ClearButton.css';

// Functional Component for ClearButton
export const ClearButton=(props)=>(
    <div className='clear-button' onClick={props.handleClear}>
        {props.children}
    </div>


);