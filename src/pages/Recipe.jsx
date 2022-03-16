import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api'
import { Preloader } from '../components/Preloader';
import { MealDetails } from '../components/MealDetails';

function Recipe() {
    const { id } = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        getMealById(id)
            .then(data => { data.meals && setMeal(data.meals); })
            .catch((err) => { console.log('Error:', err); })

        // eslint-disable-next-line
    }, [id])


    return <>
        {!meal.length ? <Preloader /> : <MealDetails key={meal.id} {...meal[0]} />}
    </>
}

export { Recipe };