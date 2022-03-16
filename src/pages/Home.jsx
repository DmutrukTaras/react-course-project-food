import { useState, useEffect } from 'react';
import { getAllCategories } from '../api'
import { CategoryList } from '../components/CategoryList';
import { Preloader } from '../components/Preloader';

function Home() {

    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then(data => {data.categories && setCatalog(data.categories); })
            .catch((err)=>{console.log('Error:', err);})
    }, [])

    return <>
    {catalog.lenght ? <Preloader /> : (<CategoryList catalog={catalog}/>)}
    </>
}

export { Home };