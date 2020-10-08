import React, { Component } from 'react';

class HowManyPlayers extends Component {
    handleChange = (event) => {
        this.props.numberOfPlayers(event.target.value);
    }
    render() {
        return (
          <form>
            <fieldset>
              <label htmlFor="">How many are playing?! </label>
              <select onChange={this.handleChange}>
                <option value="">Number of Friends!</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </fieldset>
          </form>
        );
    }
}
export default HowManyPlayers;