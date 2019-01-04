import React from "react";

const Recipes = props => (
    <div className="container">
    <div className="row">
    { props.recipes.map((indivisual) => {
      return (
        <div key={indivisual.recipe.url} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="recipes__box">
            <img 
              className="recipe__box-img" 
              src={indivisual.recipe.image} 
              alt={indivisual.recipe.url} />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {indivisual.recipe.label.length < 20 ? `${indivisual.recipe.label}` : `${indivisual.recipe.label.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                    {indivisual.recipe.source}
                </span></p>
              </div>
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Recipes;