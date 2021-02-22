import React from'react';
import './Button.css';

// function for telling whether it is an operator
// it will return if is not a number or . or =
const isOperator=val=>{
    return !isNaN(val) || val==="." || val==="=";
};

// functional component for Button 

export const Button = props=>(
    <div
    className={`button ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handlClick(props.children)}
  >
    {/* passing data through props children */}
    {props.children}
  </div>
    
);




