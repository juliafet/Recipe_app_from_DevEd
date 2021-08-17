import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, cuisineType, ingredients, image}) => {

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{cuisineType}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe