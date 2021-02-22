
import React, { Component } from 'react'; 
import './App.css';
import{ Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton} from './components/ClearButton'
import KeyboardEventHandler from 'react-keyboard-event-handler';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            input: "",
            operator:"",
            output: ""
        }
    }
    
    // addToinput function is used to take the value from user through mouseclick or keyboard
    addToinput=val=>{
        const operators = ['/', '*', '+', '-'];
          if(operators.indexOf(val) !== -1){
	        this.setState({ operator: val });
            }
        this.setState({ input:this.state.input+val});

    };
    
    /* handleEqual function is called when the user clicks the equals button through mouse click. if proper input is prvided
     then the resulted is calculated through eval otherwise alert message is thrown */
    handleEqual=()=>{
        console.log(this.state.input)
          let a=this.state.input;
          console.log("a", typeof(a))
          let b=a.split(this.state.operator);
          console.log("b",b)
          console.log(this.state.operator,b);
if(b.length>1){
	if(parseInt(b[1]) >= 0){
        const result = eval(this.state.input)
        this.setState({output: result})
        this.setState({ input: result.toString()});
    
    } else {
        alert('Invalid Format');
        this.setState({input: ""})
    }
} 
else{
  alert("Please provide next value")
}
    };
    /* onKeyboardEvent is used calculte the result through keyboard pressing of keys*/
    onKeyboardEvent = (key, e) => {
        console.log(key, e);
        const operators = ['/', '*', '+', '-'];
        
let inputVal = "";
if(key >= 0){
  inputVal = key;
} else if(operators.indexOf(key) !== -1){
	this.setState({ operator: key });
	inputVal = key;
 }

 /* Here when the user presses the Enter key through keyboard then result is calculated and
  alert is thrown if invalid input is given*/
 else if(e.key=='Enter'){
    if (this.handleEqual()){
    
    this.setState({ input: eval(this.state.input)});     
 }
}

/* Here when the user presses the = key through keyboard then result is calculated 
and alert is thrown if invalid input is given*/
 else if(key=='='){
    if (this.handleEqual()){
    this.setState({ input: eval(this.state.input)});
    }
  }  

  /* While pressing the backspace key, the input screen is cleared */ 
 else if(e.key=='Backspace'){
   this.setState({ input: " "});
 }else if(key=='.'){
 inputVal=key;
 }
 
if(inputVal !== ""){
	this.setState({ input: this.state.input+key });   
}
    };
    
    render(){


        return (
            <div className="app">
               <KeyboardEventHandler handleKeys={['all','ctrl+a']} 

                 onKeyEvent={(key, e) => this.onKeyboardEvent(key, e)}/>
               
                <div className="calc">

                  {/* Placing our input field*/}
                    <Input input={this.state.input}/>
                    {/* <p>{this.state.output}</p> */}

                    {/* Created a div tag for every  row where we are placing our numbers*/}
                    <div className="row">
                      {/* Created a separted component for Buttons and imported it in App.js
                      And calling addToinput function on button inorder to take the input through the click */}
                      <Button handlClick={this.addToinput}>7</Button>
                      <Button handlClick={this.addToinput}>8</Button>
                      <Button handlClick={this.addToinput}>9</Button>
                      <Button handlClick={this.addToinput}>/</Button>
                        
                    </div>
                    <div className="row">
                      <Button handlClick={this.addToinput}>4</Button>
                      <Button handlClick={this.addToinput}>5</Button>
                      <Button handlClick={this.addToinput}>6</Button>
                      <Button handlClick={this.addToinput}>*</Button>
                        
                    </div>
                    <div className="row">
                      <Button handlClick={this.addToinput}>1</Button>
                      <Button handlClick={this.addToinput}>2</Button>
                      <Button handlClick={this.addToinput}>3</Button>
                      <Button handlClick={this.addToinput}>+</Button>

                        
                    </div>
                    <div className="row">
                      <Button handlClick={this.addToinput}>.</Button>
                      <Button handlClick={this.addToinput}>0</Button>

                      {/* Calling handleWqual function on = Button */}
                      <Button handlClick={this.handleEqual}>=</Button>
                      <Button handlClick={this.addToinput}>-</Button>
                      
                        
                    </div>
                    <div className='row'>
                      {/* Created a separte component for ClearButton and imported it in App.js file. 
                      The button is clearing the text present in the input firld */}
                        <ClearButton handleClear={()=>this.setState({input:" "})}>clear</ClearButton>
                    </div>
                </div>
               
            </div>
        )
    }
}


// exporting the App so that it can be used by the other components
export default App;

