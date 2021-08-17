import React from 'react'

const Recipe = ({title, cuisineType, ingredients, image}) => {

    return(
        <div>
            <h1>{title}</h1>
            <p>{cuisineType}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe