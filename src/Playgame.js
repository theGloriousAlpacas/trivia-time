import React, { Component } from 'react';
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
    handleNextPlayer = () => {
        this.setState({
            cleanTheScreen: true,
            currentPlayer: this.state.currentPlayer + 1,
            answeredQuestionTracker: [false, false, false]
        })
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
  render() {
    return this.showQuestions();
  }
}
export default Playgame;





