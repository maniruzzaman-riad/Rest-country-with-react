import PropTypes from 'prop-types';
import SingleVisited from '../SingleVisited/SingleVisited';

const VisitCountry = ({visitBtn}) => {
    // console.log(typeof visitBtn);
    return (
        <>
            <div className="w-1/4 p-2 border-2 border-lime-400 rounded-lg bg-white h-1/2 mt-7">
                <h2 className="text-2xl font-bold">My Visited Country</h2>
                <h2 className="text-xl font-semibold mb-6 mt-4">Total Visit : {visitBtn.length}</h2>
                <div className='space-y-7'>
                    {
                        visitBtn.map(singleVisit=><SingleVisited 
                            key={singleVisit.cca3}
                            singleVisit={singleVisit}
                            ></SingleVisited>)
                    }
                </div>
            </div>
        </>
    );
};

VisitCountry.proptypes={
    visitBtn:PropTypes.object
}
export default VisitCountry;