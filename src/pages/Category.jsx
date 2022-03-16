import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilterByCategories } from '../api'
import { Preloader } from '../components/Preloader';
import { MealsList } from '../components/MealsList';


function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilterByCategories(name)
            .then(data => { data.meals && setMeals(data.meals); })
            .catch((err) => { console.log('Error:', err); })

        // eslint-disable-next-line
    }, [name])


    return <>
        {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
}

export { Category };