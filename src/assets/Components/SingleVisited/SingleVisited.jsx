import PropTypes from 'prop-types';

const SingleVisited = ({ singleVisit }) => {
    console.log(singleVisit);
    const { name,flags } = singleVisit
    return (
        <>
            <div className='flex justify-between p-2 border-2 border-red-500 rounded-lg items-center'>
                <h2 className='text-2xl font-bold'>{name.common}</h2>
                <img className='w-14 h-14 ' src={flags.svg} alt="" />
            </div>
        </>
    );
};

SingleVisited.propTypes = {
    singleVisit: PropTypes.object
}
export default SingleVisited;