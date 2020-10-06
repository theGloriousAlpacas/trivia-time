import React, { Component } from 'react';

// Started the current game at current Player at 0 which is the first player.
// The current question for the player is 0 too.
class Playgame extends Component {

    constructor() {
        super();
        this.state = {
            currentPlayer: 0,
            currentQuestion: 0
        };
    }

    onAnswerClicked = (question, answer) => {
        console.log(question, answer);
        console.log(answer === question.correct_answer)

        let nextPlayer = this.state.currentPlayer;
        let nextQuestionPosition = this.state.currentQuestion + 1;
        if (nextQuestionPosition > 2) {
            nextQuestionPosition = 0;
            nextPlayer = nextPlayer + 1;
        }

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

    showQuestions = () => {
        console.log(this.props.players)
        if (!this.props.players || !this.props.players[0].questions) {
            console.log("Pick your categories")
            return <></>
        } else {
            console.log(this.props.players)
            const player = this.props.players[this.state.currentPlayer];

            if (!player) {
                return <div>No player</div>
            }

            const question = player.questions[this.state.currentQuestion];
            // console.log(question)
            const allAnswers = [...question.incorrect_answers, question.correct_answer]
            this.shuffleArray(allAnswers)
            return <div>
                <p>Player {player.name}</p>
                <h2>{`Question ${this.state.currentQuestion + 1} : ${question.question}`}</h2>
                {allAnswers.map((answer) => {
                    // console.log(this);
                    return <button onClick={() => this.onAnswerClicked(question, answer)}>
                        {answer}
                    </button>
                })}
            </div>
                ;
        }
    }

    render() {
        // return this.showQuestions();
        return (
            <div>

                {this.props.title}
                <h1>PLAYYYYY</h1>
            </div>

        )


    }

}

export default Playgame;
