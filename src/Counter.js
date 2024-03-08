import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

class Counter extends Component
{

    render()
    {
        return(
        <div className='flex-container'>
            <h1 className='col2' >{this.props.count}</h1>
        </div>
        )
        
    }
} 

export default Counter;