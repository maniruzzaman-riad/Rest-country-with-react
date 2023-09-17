import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiBank } from "react-icons/ci";

const Country = ({ country,visitedBtn }) => {
    // console.log(country);
    const {flags,name,region} = country;
    const [visit,setVisit]=useState(false)

    const visitBtnClicked =()=>{
        setVisit(!visit)
        visitedBtn(country,!visit)
    }
    return (
        <>
            <div className={visit ? 'bg-orange-300 p-4 border-2 border-lime-400 rounded-lg': 'bg-white p-4 border-2 border-lime-400 rounded-lg'}>
                <img className='w-full h-40' src={flags.png} alt="" />
                <h2 className='my-3 text-xl font-bold h-10'>{name.common}</h2>
                <p className='text-lg font-semibold'>region : {region}</p>
                <span onClick={visitBtnClicked} className={visit ? 'text-4xl text-green-500' :'text-4xl' }><CiBank></CiBank></span>
            </div>
        </>
    );
};

Country.propTypes = {
    country: PropTypes.object,
    visitedBtn: PropTypes.func
}
export default Country;