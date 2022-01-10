import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";

import '../../css/search.css'

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)
    
    /*
    location: en el search vienen los parametros
    */
    const [ values, handleInputChange] = useForm({ searchText: q});

    const { searchText } = values;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        /* navigate('') -> la ruta actual */
        navigate(`?q=${ searchText }`);
    }

    return (
        <div className="container">
            <h1 className="mt-5">Search</h1>
            <hr />

            <div className="row">
                <div className="col" style={{'textAlign': 'center', 'width': '100%'}}>
                    <h4>Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button 
                            type="submit"
                            className="btn btn-primary mt-3 form-control"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col" style={{'textAlign': 'center', 'width': '100%'}}>
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '') 
                            ? <div className="alert alert-warning animate__animated animate__bounceIn">Please search something</div>
                            : ( heroesFiltered.length === 0) && <div className="alert alert-danger animate__animated animate__fadeInDown">No results for: { q }</div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero } 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
