import React, { Component } from 'react';

 const Category = () => {
    return (
        <form>
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

export default Category;