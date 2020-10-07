import React, { Component } from 'react';
import Timer from './Timer';

// Started the current game at current Player at 0 which is the first player.
// The current question for the player is 0 too.
class Playgame2 extends Component {

    // Setting state to understand which player is playing and which question is showing up
    constructor() {
        super();
        this.state = {
            currentPlayer: 0,
            currentQuestion: 0,
            time: '',
            quiz: false
        };
    }

    onAnswerClicked = (question, answer, questionNumber) => {
        if(!this.state.answeredQuestionTracker[questionNumber]) {
            let player = this.props.players[this.state.currentPlayer];
            if (answer === question.correct_answer) {
                console.log("aNSWER IS CORRECT");
                player.score++;
                let answeredQuestionTracker = this.state.answeredQuestionTracker;
                answeredQuestionTracker[questionNumber]= true;
                this.setState({
                    answeredQuestionTracker: answeredQuestionTracker
                });                
            }
        }
    }

    //https://stackoverflow.com/a/12646864
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    showQuestions = () => {
        console.log("players:", this.props.players);
        if (!this.props.players || !this.props.players[0].questions) {
          console.log("Pick your categories");
          return <></>;
        } else if(this.state.cleanTheScreen) {
            this.setState({
                cleanTheScreen: false
            });
            return <></>;
        } else {
          const player = this.props.players[this.state.currentPlayer];
          if (!player) {
            return <div>No player</div>;
          }
          return <div>
                    <p>Player {player.name}</p>
                    {player.questions.map((question, index) => {           
                        return <div>
                                    <h2>{`Question ${index + 1} : ${question.question}`}</h2>
                                    {question.allAnswers.map((answer) => {
                                        return <button onClick={() => this.onAnswerClicked(question, answer, index)}>
                                            {answer}
                                        </button>})}
                                </div>
                    })}
                    <button onClick={this.handleNextPlayer} >Next Player</button>
                </div>
        }
      };

    stopTime = () => {

        this.setState({
            currentPlayer: this.state.currentPlayer + 1,
            quiz: false
        })

        return (
            <p>Time is up</p>
        )
    }

    showQuiz = () => {
        this.setState({
            quiz: true
        })
    }

    render() {
        return (
            <div>

                {this.showQuestions()}
                {/* <button onClick={this.showQuiz}>PLAY</button>

                {this.state.quiz ? (this.showQuestions()
                ) : null} */}

                {/* {this.state.quiz ? (< Timer stopTime={this.stopTime} />) : null} */}
            </div>
        )
    }
}

export default Playgame2;
