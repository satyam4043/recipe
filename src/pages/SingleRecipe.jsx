import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SingleRecipe = () => {
    let location=useLocation()
    console.log(location)
    console.log(location.state)
    console.log(location.state.recipe)
    console.log(location.state.recipe.label)
    console.log(location.state.recipe.image)
  return (
    <div>
      <div className='row'>
<div className="col-md-6 d-flex justify-content-center">
{<img className='img' src={location.state.recipe.image} alt="" />}
</div>
<div className="col-md-6  d-flex align-items-center flex-column">
<h3>Title:{location.state.recipe.label}</h3>
<h4 className='mt-3'>Meal type:{location.state.recipe.mealType}</h4>
<div className='row d-flex justify-content-center gap-4 mt-5'>
    <div className='col-3 '>
        <p>{location.state.recipe.totalNutrients.CA.label}</p>
        <p>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}mg</p>
    </div>
    <div className='col-3 '>
<p>{location.state.recipe.totalDaily.FAT.label}</p>
<p>{Math.ceil(location.state.recipe.totalNutrients.FAT.quantity)}mg</p>
    </div>
    <div className='col-3 '>
    <p>{location.state.recipe.totalNutrients.SUGAR.label}</p>
    <p>{Math.ceil(location.state.recipe.totalNutrients.SUGAR.quantity)}mg</p>
    </div>
    <div className='col-3 '>
    <p>{location.state.recipe.totalNutrients.PROCNT.label}</p>
    <p>{Math.ceil(location.state.recipe.totalNutrients.PROCNT.quantity)}mg</p>
    </div>
</div>
<Link to={location.state.recipe.url}className='btn btn-success mt-3'>How to make</Link>
</div>
      </div>

<div className='row d-flex'>
<div className='col-md-6  mt-5  d-flex justify-content-center align-items-center flex-column '>
    <h1>HealthLabels</h1>
    {location.state.recipe.healthLabels.map((obj,index)=>{
      return  <ul><li><p className='p'>{obj}</p></li></ul>
    })}

    {/* <p>.{location.state.recipe.healthLabels[0]}</p>
    <p>.{location.state.recipe.healthLabels[1]}</p>
    <p>.{location.state.recipe.healthLabels[2]}</p>
    <p>.{location.state.recipe.healthLabels[3]}</p>
    <p>.{location.state.recipe.healthLabels[4]}</p>
    <p>.{location.state.recipe.healthLabels[5]}</p>
    <p>.{location.state.recipe.healthLabels[6]}</p>
    <p>.{location.state.recipe.healthLabels[7]}</p>
    <p>.{location.state.recipe.healthLabels[8]}</p>
    <p>.{location.state.recipe.healthLabels[9]}</p>
    <p>.{location.state.recipe.healthLabels[10]}</p>
    <p>.{location.state.recipe.healthLabels[11]}</p>
    <p>.{location.state.recipe.healthLabels[12]}</p>
    <p>.{location.state.recipe.healthLabels[13]}</p>
    <p>.{location.state.recipe.healthLabels[14]}</p>
    <p>.{location.state.recipe.healthLabels[15]}</p>
    <p>.{location.state.recipe.healthLabels[16]}</p>
    <p>.{location.state.recipe.healthLabels[17]}</p>
    <p>.{location.state.recipe.healthLabels[18]}</p> */}
</div>
<div className='col-md-6  mt-5  d-flex justify-content-center align-items-center flex-column'>
   <h1>Ingredients</h1>
   {/* <p>.{location.state.recipe.ingredients[0].text}</p>
   <p>.{location.state.recipe.ingredients[1].text}</p>
   <p>.{location.state.recipe.ingredients[2].text}</p>
   <p>.{location.state.recipe.ingredients[3].text}</p> */}
   {location.state.recipe.ingredients.map((eles,index)=>{
    return  <ul><li><p className='p'>{eles.text}</p></li></ul>  
   })}




 
   
</div>
</div>


    </div>
  )
}

export default SingleRecipe
