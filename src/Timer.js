import React, { Component } from "react";
// Stretch goal - change color/appearance when at 10 seconds and then at 5 seconds to visually show you're running out of time
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 5,
            start: true
        }
    }
    // Create a timer that counts down from 30 seconds - needs to be tied to the Category Component so once category is picked, timer starts
    componentDidMount() {
        let myInterval = setInterval(() => {
            this.setState({
                timer: this.state.timer - 1
            })
        }, 1000)
        this.setState({
            myInterval: myInterval
        })
    }
    // ComponentDidUpdate kicks in when state is changed
    // Score state will update which will trigger this - check Category.js
    componentDidUpdate() {
        // What happens when the timer hits 0
        if (this.state.timer === 0) {
            // set timer back to 30
            this.setState({
                timer: 30,
                start: false
            })
            this.props.stopTime();

            clearInterval(this.state.myInterval);
            //Then go to the next question
            // this.props.stopTime();
        }
    }
    startQuiz = () => {
        this.setState({
            start: true
        })
        this.myInterval = setInterval(() => {
            this.setState({
                timer: this.state.timer - 1
            })
        }, 1000)
    }

    render() {
        // let timer = this.state.timer
        // Setting styles for timer
        let timer = () => {
            if (this.state.timer >= 15) {
                return <p className="timer timerOk">{this.state.timer}</p>
            } else if (this.state.timer >= 10) {
                return <p className=" timer timerWrapUp">{this.state.timer}</p>
            } else {
                return <p className="timer timerDanger">{this.state.timer}</p>
            }
        }
        return (
            <>
                {/* <button onClick={this.startQuiz}>Start Quiz</button> */}
                {/* {this.startQuiz} */}
                <p>{this.state.start === true ? timer() : "Time's Up!"}</p>
            </>
        )
    }
}
export default Timer;