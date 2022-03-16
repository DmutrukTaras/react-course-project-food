import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilterByArea } from '../api'
import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';


function Area() {
    const { name } = useParams();
    const [ingredients, setIngredient] = useState([]);

    useEffect(() => {
        getFilterByArea(name)
            .then(data => { data.meals && setIngredient(data.meals); })
            .catch((err) => { console.log('Error:', err); })

        // eslint-disable-next-line
    }, [name])


    return <>
        {!ingredients.length ? <Preloader /> : <MealsList meals={ingredients} />}
    </>
}

export { Area };