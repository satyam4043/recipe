import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar'

const Home = () => {
  let inputRef=useRef()
  const [searchValue, setsearchValue] = useState("icecream");
 
const [allFood, setallFood] = useState([]);
console.log(allFood)
  let getData=async()=>{
    let res=await fetch(`https://api.edamam.com/search?q="${searchValue}"&app_id=71d0de47&app_key=29df2676ce5b6a3a028e7a15630d0cc7`)
    let data=await res.json()
    // console.log(data)
    setallFood(data.hits)


  }

  useEffect(()=>{
    getData()
  },[searchValue])
  // function handleclick(ans){
  //   console.log(ans)

  // }
  function hanldeClick(e){
   e.preventDefault()
   let Value=inputRef.current.value
 
   console.log(Value)
   
   setsearchValue(Value)
   
  }
  
 
 

  return (
<div>
  
<div className='col-md-6 my-3 m-auto'>
    <input ref={inputRef}  type="text" placeholder='Search'/>
    <button  onClick={hanldeClick} className='btn btn-success'>Search</button>
    </div>

    <div className='row d-flex justify-content-center gap-2
    '>
    
      
       
{allFood.map((ele,index)=>{
  return <div key={index} className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    <p className={ele.recipe.label}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link state={ele} to="/single" className="btn btn-primary">Go somewhere</Link>
    {/* <button onClick={()=>handleclick(ele)}>Clik me</button> */}
  </div>
</div>

})}

    </div>
</div>
  )
}

export default Home
