import * as METHODS from '../methods';

export const ListProducts = async () => {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', METHODS.GET())
        const data = response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const SearchProduct = async (name) => {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`, METHODS.POST())
        const data = response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}