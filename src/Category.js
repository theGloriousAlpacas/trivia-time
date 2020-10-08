import React, { Component } from 'react';
import axios from "axios";
class Category extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            category: ""
        }
    }
    generateQuestions(e, playerInfo) {
        const selectedCategory = e.target.value
        const numberOfQuestions = playerInfo.length * 3
        // console.log(e.target[1].children);
        // const categoryName = e.target.text
        axios({
            url: 'https://opentdb.com/api.php',
            params: {
                amount: numberOfQuestions,
                category: selectedCategory,
                difficulty: 'medium',
                type: 'multiple',
                // encode: 'base64'
            }
        }).then(response => {
            const res = response.data.results;
            console.log('this is the data from the api', res);
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
                // console.log(dom)
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
        })
    }

    componentDidMount() {
        document
            .querySelector('.categoryContainer')
            .scrollIntoView({ behavior: 'smooth' });
    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    questionsSubmit = (res, playerInfo) => {
        const questions = res
        console.log(questions)
        const newInfo = playerInfo
        for (let i = 0; i < questions.length / 3; i++) {
            let count = 0;
            const arr = [];
            while (count < 3) {
                let x = i * 3 + count;
                res[x].allAnswers = [...res[x].incorrect_answers, res[x].correct_answer];
                res[x].allAnswers = this.shuffleArray(res[x].allAnswers);
                arr.push(res[x]);
                count++;
            }
            newInfo[i].questions = arr;
        }

        this.setState({
            players: newInfo
        })
    };

    render() {
        return (
            <div className="categoryContainer">
                <form className="categoryForm" onChange={(e) => {
                    this.generateQuestions(e, this.props.playerInfo)
                }}>
                    <fieldset className="categoryFieldset">
                        <label className="categoryLabel" htmlFor="">Select Category: </label>
                        <select>
                            <option disabled selected className="default">Select a Category</option>
                            <option value="9">General Knowledge</option>
                            <option value="27">Animals</option>
                            <option value="29">Comics</option>
                            <option value="11">Movies</option>
                            <option value="17">Science And Nature</option>
                        </select>
                    </fieldset>

                    {this.state.players.length !== 0 ? <button className="categoryName" onClick={(e) => { this.props.getPlayerInformation(e, this.state.players) }}>It's Time For the Showdown!</button> : null}

                    {/* <button className="categoryName" onClick={(e) => { this.props.getPlayerInformation(e, this.state.players) }}>It's Time For the Showdown!</button> */}
                </form>
            </div>
        )
    }
}
export default Category;