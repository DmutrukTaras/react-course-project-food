import { Link } from "react-router-dom";
import { BtnGoBack } from "./GoBack";

function MealDetails(props) {
    const { idMeal, strMealThumb, strMeal, strCategory, strArea, strInstructions, strYoutube, strTags } = props;

    return (
        <>
            <BtnGoBack />
            <div className="recipe">
                <div className="image">
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="header-block">
                    <h1 className="title">{strMeal}</h1>
                    <h5 className="category">
                        Category:
                        <span>
                            <Link to={`/categoty/${strCategory}`} > {strCategory}</Link>
                        </span>
                    </h5>
                    {strArea ? (
                        <h5 className="area">Area:
                            <span>
                                <Link to={`/area/${strArea}`} > {strArea}</Link>
                            </span>

                        </h5>) : null}
                    {strTags ? (
                        <h5 className="tags">Tags:
                            <span className="teal-text text-darken-4"> {strTags}</span>
                        </h5>) : null}
                </div>
                <div className="description">
                    <p>{strInstructions}</p>
                    <table className="centered highlight">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(props).map(key => {
                                    if (key.includes('Ingredient') && props[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{props[key]}</td>
                                                <td>
                                                    {
                                                        props[`strMeasure${key.slice(13)}`]
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }

                            <tr>
                                <td>Alvin</td>
                                <td>Eclair</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="video">
                    {strYoutube ?
                        (<div className="row">
                            <h4 style={{margin: '2rem 0 1.5rem'}}>Video Recipe:</h4>
                            <iframe title={idMeal} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowFullScreen />
                        </div>
                        )
                        : null}
                </div>
                <h1>{idMeal}</h1>
            </div>
        </>


    )
}

export { MealDetails }