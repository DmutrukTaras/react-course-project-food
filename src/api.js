import {
    API_URL
} from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + `lookup.php?i=` + mealId)
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + `categories.php`);
    return await response.json();
}

const getFilterByArea = async (aName) => {
    const response = await fetch(API_URL + `filter.php?a=` + aName)
    return await response.json();
}

const getFilterByCategories = async (catName) => {
    const response = await fetch(API_URL + `filter.php?c=` + catName)
    return await response.json();
}

const getMealByName = async (mealName) => {
    const response = await fetch(API_URL + `search.php?s=` + mealName)
    return await response.json();
}

const getRandomMeal = async () => {
    const response = await fetch(API_URL + `random.php`)
    return await response.json();
}


export {
    getMealById,
    getAllCategories,
    getFilterByCategories,
    getFilterByArea,
    getMealByName,
    getRandomMeal
};