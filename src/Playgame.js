import React, { Component } from "react";
import Timer from "./Timer.js";
import ScoreBoard from "./ScoreBoard.js"

// Started the current game at current Player at 0 which is the first player.
    // The current question for the player is 0 too.
class Playgame extends Component {
    constructor() {
        super();
        this.state = {
            cleanTheScreen: false,
            currentPlayer: 0,
            answeredQuestionTracker: [false, false, false],
        };
    }

    componentDidMount = () => {
        this.setState({
            players: this.props.players
        })
        document
            .querySelector(".gameScreen")
            .scrollIntoView({ behavior: "smooth" });
    }

    handleNextPlayer = () => {
        this.setState({
            cleanTheScreen: true,
            currentPlayer: this.state.currentPlayer + 1,
            answeredQuestionTracker: [false, false, false],
        })
        const div1 = document.querySelector(".answer1")
        const div2 = document.querySelector(".answer2")
        const div3 = document.querySelector(".answer3")
        const divArray = [div1, div2, div3]

        divArray.forEach((div) => {
            div.classList.toggle("parentHide")
        })
        const questionDiv = document.querySelector(".questionDiv")
        questionDiv.classList.toggle("questionDivHide")
    }

    onAnswerClicked = (e, question, answer, questionNumber) => {
        const parentDiv = e.target.parentNode
        if (!this.state.answeredQuestionTracker[questionNumber]) {
            let player = this.props.players[this.state.currentPlayer];
            if (answer === question.correct_answer) {
                player.score++;
                let answeredQuestionTracker = this.state.answeredQuestionTracker;
                answeredQuestionTracker[questionNumber] = true;
                this.setState({
                    answeredQuestionTracker: answeredQuestionTracker,
                });
            }
        }
        parentDiv.classList.toggle("parentHide")
    }

    timerFunction = () => {
        const questionDiv = document.querySelector(".questionDiv")
        questionDiv.classList.toggle("questionDivHide")
    }

    showQuestions = () => {
        if (!this.props.players || !this.props.players[0].questions) {
            return <></>;
        } else if (this.state.cleanTheScreen) {
            this.setState({
                cleanTheScreen: false
            });
            return <></>;
        } else {
            const player = this.props.players[this.state.currentPlayer];
            if (!player) {
                return <ScoreBoard playerInformation={this.props.players} handleReset={this.props.reset} />
            }
            return (
                <section className="gameScreen">
                    <div className="wrapper">
                        <div className="questionDiv">
                            <div className="turnDetails">
                                <p className="playerName">Player Up to Bat: {player.name}</p>
                                <div className="timerBackground">
                                    <Timer stopTime={this.timerFunction} />
                                </div>
                            </div>

                            <div className="questionContainer">

                                {player.questions.map((question, index) => {
                                    return (
                                        <div className="questions" key={index}>
                                            <p className="questionText" key={index}>{`Question ${index + 1} : ${question.question}`}</p>
                                            <div className={`answer${index + 1}`}>
                                                {question.allAnswers.map((answer, indexA) => {
                                                    return (
                                                        <button className="answerButton" key={`${index}${indexA}`} onClick={(e) => this.onAnswerClicked(e, question, answer, index)}>
                                                            {answer}</button>
                                                    )
                                                })}
                                            </div>
                                        </div>)
                                })}
                            </div>
                        </div>

                        <div className="nextButton">
                            <button className="nextPlayer answerButton" onClick={this.handleNextPlayer}>Continue</button>
                        </div>

                    </div>

                </section>
            )
        }
    };

    render() {
        return this.showQuestions();
    }
}
export default Playgame;