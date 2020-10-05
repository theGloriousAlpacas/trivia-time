import React, { Component } from "react";


    // Stretch goal - change color/appearance when at 10 seconds and then at 5 seconds to visually show you're running out of time

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 30
        }
    }

    // Create a timer that counts down from 30 seconds - needs to be tied to the Category Component so once category is picked, timer starts
    componentDidMount(){
        this.myInterval = setInterval( () => {
            this.setState({
                timer: this.state.timer - 1
            })
        }, 1000)
    }

    // ComponentDidUpdate kicks in when state is changed
        // Score state will update which will trigger this - check Category.js
    componentDidUpdate(){
         // What happens when the timer hits 0
         if (this.state.timer === 0) {
            // set timer back to 30
            this.setState({
              timer: 30,
            })

            //Then go to the next question
          }
    }

    render() {
        const timer = this.state.timer
        return (
            <>
                <h1>Hello this is the Timer</h1>
                <p>{timer}</p>
            </>
        )
    }
}

export default Timer;