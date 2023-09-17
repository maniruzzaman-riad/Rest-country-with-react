
import { useState } from 'react'
import './App.css'
import Countries from './assets/Components/Countries/Countries'
import VisitCountry from './assets/Components/VisitCountry/VisitCountry'

function App() {
  const [visitBtn,setVisitBtn]=useState([])
  

  const visitedBtn=(visitDesh,isVisited)=>{
    // console.log(visitDesh,isVisited);
    const newVisit = [...visitBtn,visitDesh]

    if(isVisited){
      setVisitBtn(newVisit)
    }else if(!isVisited){
      const findNonVisit =visitBtn.filter(nonVisited => nonVisited.cca3 !== visitDesh.cca3)
      setVisitBtn(findNonVisit)
    }
  }
  // console.log(visitBtn);

  return (
    <>
      <div className='mx-10 mt-8'>
        <h2 className='text-3xl font-semibold text-center my-6'>All Country is here</h2>
        <div className='flex gap-4'>
          <Countries
          visitedBtn={visitedBtn}
          ></Countries>
          <VisitCountry
          visitBtn={visitBtn}
          ></VisitCountry>
        </div>
      </div>
    </>
  )
}

export default App
