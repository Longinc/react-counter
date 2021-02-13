import React, { Component } from 'react';
import SubtractButton from './SubtractButton';
import AddButton from './AddButton';

class Counter extends Component {
    constructor(props) {
        super(props);
        // this.logName = this.logName.bind();
        this.state = { count: 0}
        // this.logName = this.logName.bind();
    }

    
    logName () {

        //console.log('Billy', this.state.count)
        
    }
    increment = () => {
        const {count} = this.state
        console.log(count)
        this.setState({count: count + 1})
        // console.log(this.state.count)
    }
    subtract = () => {
        const {count} = this.state
        console.log('working')
        this.setState({count: count - 1})
    }
    reset = () => {
        console.log('working')
        this.setState({count: 0})
    }


    render() {
        return (
            <div>
                <div className="App">

                    <p className="counter">Counter: {this.state.count}</p>
                    <SubtractButton subtract={this.subtract} />
                    <AddButton increment={this.increment} />
                    
                    
                    
                    <button 
                        className="buttons"
                        onClick={() => this.reset()}>Reset</button>

                </div>
            </div>
        );
    }
}

export default Counter;