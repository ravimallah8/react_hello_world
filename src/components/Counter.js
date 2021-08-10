import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState(
            (prevState) => ({
                count: prevState.count + 1
            }),
            () => {
                console.log("Callback value : ", this.state.count)
            }
        )
        console.log(this.state.count)
    }
    incrementThree(){
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <h2>Count - {this.state.count}</h2>
                <button onClick={() => this.incrementThree()}>increment</button>
            </div>
        )
    }
}

export default Counter
