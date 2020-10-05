import React, { Component } from 'react';
import axios from "axios";

class Category extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            questions: [],
            currentQuestion: 0
        }
    }

    generateQuestions(e, playerInfo) {

        const selectedCategory = e.target.value
        const numberOfQuestions = playerInfo.length * 3

        axios({
            url: 'https://opentdb.com/api.php',
            params: {
                amount: numberOfQuestions,
                category: selectedCategory,
                difficulty: 'easy',
                type: 'multiple',
                // encode: 'base64'
            }
        }).then(response => {
            const res = response.data.results;
            // console.log(res);
            // Use DOMParser to get real string
            //https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
            const parser = new DOMParser();
            res.map( (question) => {
                question.incorrect_answers.forEach((incorrectAnswer, index) => {
                    const dom = parser.parseFromString(incorrectAnswer, "text/html")
                    const newString = dom.body.textContent;
                    question.incorrect_answers[index] = newString;
                });
                const oldString = question.correct_answer
                const dom = parser.parseFromString(oldString, "text/html")
                console.log(dom)
                const newString = dom.body.textContent;
                question.correct_answer = newString
            })
            res.map( (question) => {
                const oldString = question.question;
                const dom = parser.parseFromString(oldString, "text/html")
                const newString = dom.body.textContent;
                question.question = newString
            })
            this.setState({
                players: playerInfo,
                questions: res,
            })
        })
    }

    onAnswerClicked = (question, answer) => {
        console.log(question, answer);
        console.log(answer === question.correct_answer)
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }

    showQuestions = () => {

        if (this.state.questions.length === 0) {
            console.log("No questions yet")
            return <></>
        } else {
            // console.log(this.state.questions)
            const question = this.state.questions[this.state.currentQuestion]
            // console.log(question)
            const allAnswers = [...question.incorrect_answers, question.correct_answer]
            // randomize allAnswers?
            return <div>
                    <h2>{question.question}</h2>
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
        return (
            <div>
                <form onChange={(e) => { this.generateQuestions(e, this.props.playerInfo) }}>
                    <fieldset>
                        <label htmlFor="">Select Category: </label>
                        <select>
                            <option disabled selected className="default">Select a Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="27">Animals</option>
                            <option value="29">Comics</option>
                            <option value="11">Movies</option>
                            <option value="17">Science And Nature</option>
                        </select>
                    </fieldset>
                </form>
                <div>
                    {this.showQuestions()}
                </div>
            </div>
        )
    }
}

export default Category;