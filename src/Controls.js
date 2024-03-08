import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

class Controls extends Component
{
    handleIt=()=>
    {
       // alert("Ouch - you clicked me!");
        this.props.callback();
    }
    render()
    {
        return(
        <div className='flex-container'>
            <div className='col1' >Here's one thing</div>
        <input className='col2' value="Another thing"></input>
        <button className='col3' onClick={this.handleIt}>Click Me</button>
        </div>
        )
        
    }
} 

export default Controls;