import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 30,
            start: true
        }
    }

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

    componentDidUpdate() {

        if (this.state.timer === 0) {

            this.setState({
                timer: 30,
                start: false
            })
            this.props.stopTime();

            clearInterval(this.state.myInterval);
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
        let timer = () => {
            if (this.state.timer >= 15) {
                return <p className="timer timerOk">{this.state.timer}</p>
            } else if (this.state.timer >= 10) {
                return <p className="timer timerWrapUp">{this.state.timer}</p>
            } else {
                return <p className="timer timerDanger">{this.state.timer}</p>
            }
        }
        return (
            <>
                <p>{this.state.start ? timer() : "Time's Up!"}</p>
            </>
        )
    }
}
export default Timer;