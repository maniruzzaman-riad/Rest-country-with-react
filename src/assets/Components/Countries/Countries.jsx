import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import PropTypes from 'prop-types';


const Countries = ({visitedBtn}) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <>
            <div className="w-3/4">
                <h2 className="text-xl font-semibold">Total Country : {countries.length}</h2>
                <div className="grid grid-cols-3 gap-5">
                    {
                        countries.map(country=><Country
                        key={country.cca3}
                        country={country}
                        visitedBtn={visitedBtn}
                        ></Country>)
                    }
                </div>
            </div>
        </>
    );
};

Countries.propTypes = {
    visitedBtn: PropTypes.func
}
export default Countries;