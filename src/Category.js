import React, { Component } from 'react';
import axios from "axios";

class Category extends Component {
    constructor() {
        super();
        this.state = {
            players: [],
            questions: [],
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
            }
        }).then(response => {
            const res = response.data.results;
            this.setState({
                players: playerInfo,
                questions: res,
            })
        })
    }

    render() {
        return (
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
        )
    }
}

export default Category;