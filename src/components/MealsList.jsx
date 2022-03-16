import { MealItem } from "./MealItem";
import { BtnGoBack } from './GoBack';


function MealsList(props) {
    const { meals } = props;
    return (
        <div className="list">
            <BtnGoBack />
            {meals.map((item) => (
                <MealItem key={item.idMeal} {...item} />
            ))}
        </div>
    )
}

export { MealsList }