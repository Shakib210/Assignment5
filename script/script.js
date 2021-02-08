const theMeal=()=>{
    
    const name=document.getElementById('name').value

    const foods=document.getElementById('foods')
    foods.style.display='block'
    foods.innerHTML=''
    const details=document.getElementById('details')
    details.style.display='none'
    

    if(name){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => response.json())
        .then(json =>  card(json.meals))
    }else{
        alert('Please enter value ...')
    }
    

}

const card=(data)=>{
   
   let foods=document.getElementById('foods')
    {data ? (data.map((data)=>{
         const div=document.createElement('div')
        const card=`
            <div id='content' class='card'>
                   <img onClick="next(${data.idMeal})" id='image' src=${data.strMealThumb} />
                   <p onClick='next(${data})'>${data.strMeal}</p>
            </div>
        
        `
         div.innerHTML=card;
        foods.appendChild(div);
    }) ) : (
        alert('Nothing found')
    )}
    
}


const next=(data)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`)
    .then(response => response.json())
    .then(json =>  showDetails(json.meals[0]))
}

const showDetails=(data)=>{
    const foods=document.getElementById('foods')
    foods.style.display='none'
    const details=document.getElementById('details')
    details.style.display='block'
    details.innerHTML=''
     const div= document.createElement('div')
    const displayDetails=`
        <img class='detailsImage' src=${data.strMealThumb} alt='pic' />
        <ul>
          <li>${data.strIngredient1 ? data.strIngredient1 : ''}</li>
          <li>${data.strIngredient2 ? data.strIngredient2 : ''}</li>
          <li>${ data.strIngredient3 ? data.strIngredient3 : ''}</li>
          <li>${data.strIngredient4 ? data.strIngredient4 : ''}</li>
          <li>${data.strIngredient5 ? data.strIngredient5 : ''}</li>
          <li>${data.strIngredient6 ? data.strIngredient6 : ''}</li>
          <li>${data.strIngredient7 ? data.strIngredient7 : ''}</li>
          <li>${data.strIngredient8 ? data.strIngredient8 : ''}</li>
          <li>${data.strIngredient9 ? data.strIngredient9 : ''}</li>
          <li>${ data.strIngredient10 ? data.strIngredient10 : ''}</li>
          <li>${data.strIngredient11 ? data.strIngredient11 : ''}</li>
          <li>${data.strIngredient12 ? data.strIngredient12 : ''}</li>
          <li>${data.strIngredient13 ? data.strIngredient13 : ''}</li>
          <li>${data.strIngredient14 ? data.strIngredient14 : ''}</li>
          <li>${data.strIngredient15 ? data.strIngredient15 : ''}</li>
          <li>${data.strIngredient16 ? data.strIngredient16 : ''}</li>
          <li>${ data.strIngredient17 ? data.strIngredient17 : ''}</li>
          <li>${data.strIngredient18 ? data.strIngredient18 : ''}</li>
          <li>${data.strIngredient19 ? data.strIngredient19 : ''}</li>
          <li>${data.strIngredient20 ? data.strIngredient20 : ''}</li>
          
        </ul>
    `
    div.innerHTML=displayDetails
    details.appendChild(div)
}