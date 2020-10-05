import React, { Component } from 'react';
import axios from "axios";

class Category extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
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
            res.map((question) => {
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
            res.map((question) => {
                const oldString = question.question;
                const dom = parser.parseFromString(oldString, "text/html")
                const newString = dom.body.textContent;
                question.question = newString
            })

            this.questionsSubmit(res, this.props.playerInfo)
            // this.setState({
            //     players: playerInfo,
            //     questions: res,
            // })
        })
    }

    questionsSubmit = (res, playerInfo) => {

        const questions = res

        const newInfo = playerInfo

        if (questions.length === 3) {
            newInfo[0].questions = questions

        } else if (questions.length === 6) {
            newInfo[0].questions = [questions[0], questions[1], questions[2]]
            newInfo[1].questions = [questions[3], questions[4], questions[5]]

        } else if (questions.length === 9) {
            newInfo[0].questions = [questions[0], questions[1], questions[2]]
            newInfo[1].questions = [questions[3], questions[4], questions[5]]
            newInfo[2].questions = [questions[6], questions[7], questions[8]]

        } else {
            newInfo[0].questions = [questions[0], questions[1], questions[2]]
            newInfo[1].questions = [questions[3], questions[4], questions[5]]
            newInfo[2].questions = [questions[6], questions[7], questions[8]]
            newInfo[3].questions = [questions[9], questions[10], questions[11]]
        }

        this.setState({
            players: newInfo
        })
    };

    render() {
        return (
            <div>
                <form onChange={(e) => {
                    this.generateQuestions(e, this.props.playerInfo)
                }}>
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
                    <button onClick={(e) => { this.props.getPlayerInformation(e, this.state.players) }}>Continue</button>
                </form>
            </div>
        )
    }
}

export default Category;