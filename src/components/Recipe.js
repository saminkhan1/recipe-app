import React from 'react';

import { Link } from "react-router-dom";

const AppID = "571add26";
const AppKeys = "f92da23c8bcee80bdb03941f1ad781e8";

class Recipe extends React.Component{
  state = {
    activeRecipe:[]
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${AppID}&app_key=${AppKeys}`
    );
    const res = await req.json();
    this.setState({activeRecipe: res.hits[0]});
    console.log(this.state.activeRecipe);
  }
  render(){
    console.log(this.props)
    return (
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={this.state.activeRecipe.recipe.image} alt={this.state.activeRecipe.recipe.label}/>
            <h3 className="active-recipe__title">{ this.state.activeRecipe.recipe.label }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ this.state.activeRecipe.recipe.source }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={this.state.activeRecipe.recipe.url}>{this.state.activeRecipe.recipe.url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
}
  
export default Recipe;