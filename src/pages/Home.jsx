import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getAllCategories } from '../api'
import { CategoryList } from '../components/CategoryList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

function Home() {

    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setfilteredCatalog] = useState([]);
    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleSearch = (str) => {
        setfilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories()
            .then(data => {
                data.categories && setCatalog(data.categories);
                data.categories && setfilteredCatalog( search?
                    data.categories.filter(item=>item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
                    ):data.categories);
            })
            .catch((err) => { console.log('Error:', err); })
    }, [search])

    return <>
        <Search cb={handleSearch} />
        {!catalog.length ? <Preloader /> : (<CategoryList catalog={filteredCatalog} />)}
    </>
}

export { Home };