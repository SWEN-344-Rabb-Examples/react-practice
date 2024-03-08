import { Component } from "react";
import Headings  from "./Headings";
import Controls from "./Controls";
import Counter from './Counter';

class Page extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {count: 0}
    }

    handleClick=()=>
    {
        this.setState({count: this.state.count+1});
    }
    render()
    {
        return(
            <div>
                <Headings />
                <Controls callback={this.handleClick}/>
                <Counter count={this.state.count}/>
            </div>
        )
    }
}
export default Page;