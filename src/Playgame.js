import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard';
import Timer from './Timer';

// Started the current game at current Player at 0 which is the first player.
// The current question for the player is 0 too.
class Playgame extends Component {

    // Setting state to understand which player is playing and which question is showing up
    constructor() {
        super();
        this.state = {
            currentPlayer: 0,
            currentQuestion: 0
        };
    }

    // Checking if the answer is right or wrong
    onAnswerClicked = (question, answer) => {
        console.log(question, answer);
        // The API has a correctanswer property so we are checking if the answer they clicked is === to the correctanswer
        console.log(answer === question.correct_answer)
        // Need to push correct answer to score in state

        let nextPlayer = this.state.currentPlayer;
        // increments the questions up by 1 index number
        let nextQuestionPosition = this.state.currentQuestion + 1;
        // if this.state.currentQuestion is greater than an index of 2, reset this.state.currentQuestion to 0 and increment to the next player index (go to the next player)
        if (nextQuestionPosition > 2) {
            nextQuestionPosition = 0;
            nextPlayer = nextPlayer + 1;
        }

        // 
        this.setState({
            currentPlayer: nextPlayer,
            currentQuestion: nextQuestionPosition
        })
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

    // This function is called right on page load
    showQuestions = () => {
        // console.log(this.props.players)

        // ERROR HANDLING: If there are no players (this.state.players) OR no questions in the players state, don't render anything
        if (!this.props.players || !this.props.players[0].questions) {
            console.log("Pick your categories")
            return <></>

        } else {
            // console.log(this.props.players)
            // ELSE look in the players array for the current player's index number
            const player = this.props.players[this.state.currentPlayer];

            // If there is no player number, display "no player"
                // This is at the end of the game when there are no more players to play - this where we'll route to the scoreboard
            if (!player) {
                return <ScoreBoard playerNumber={this.props.players} handleReset={this.props.reset}/>
            }

            // question = the player's current question
            const question = player.questions[this.state.currentQuestion];
            // console.log(question)

            // This show all 4 answers brought back from the API - 3 incorrect and 1 correct
                // 3 incorrect answers are in an array so we are spreading it
            const allAnswers = [...question.incorrect_answers, question.correct_answer]

            // Shuffling the answers using the shuffleArray method so the last answer isn't always the right one
            this.shuffleArray(allAnswers)

            return <div>
                {/* Shows current player's name they entered */}
                <p>Player {player.name}</p> 

                {/* Question #: question text from API call */}
                <h2>{`Question ${this.state.currentQuestion + 1} : ${question.question}`}</h2>

                {/* Rendering all answers on the page as buttons */}
                {allAnswers.map((answer) => {
                    // console.log(this);
                    // When a button is clicked, run onAnswerClicked function which checks if it's right or wrong
                        // first param is the question, second is an answer param
                    return <button onClick={() => this.onAnswerClicked(question, answer)}>
                        {answer}
                    </button>
                })}
            </div>
                ;
        }
    }

    render() {
        return (
            <div>
                {this.showQuestions()}
            </div>
        )


    }

}

export default Playgame;
