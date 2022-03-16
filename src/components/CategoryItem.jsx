import { Link } from "react-router-dom";


function CategoryItem(props) {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = props;
    console.log(props)

    return (

        <div id={idCategory} className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span class="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0,60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/categoty/${idCategory}`} className="btn">Watch category</Link>
            </div>
        </div>

    )
}

export { CategoryItem }