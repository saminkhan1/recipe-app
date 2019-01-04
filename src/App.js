import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

const AppID = "571add26";
const AppKeys = "f92da23c8bcee80bdb03941f1ad781e8";

class App extends Component {
  state = {
    recipes: []
  }


   
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${AppID}&app_key=${AppKeys}&from=0&to=10`);
    const data = await api_call.json();
    this.setState({recipes: data.hits});
    console.log(this.state.recipes);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        {this.state.recipes.map((indivisual) => {
          return <p key={indivisual.recipe.url}>{indivisual.recipe.label}</p>
        }) }
      </div>
      
    );
  }
}

export default App;