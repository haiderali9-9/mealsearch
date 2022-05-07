const submit = document.querySelector('#submit'); 
const list = document.querySelector('#list'); 
 
submit.addEventListener('submit',searchMeal); 
 
function uppercase(string){ 
    return string.charAt(0).toUpperCase() + string.slice(1); 
}; 
 
function searchMeal(e){ 
   e.preventDefault(); 
   const input = document.querySelector('#search-i').value.trim(); 
   const baseurl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`; 
   fetch(baseurl).then((response)=>response.json()).then((data)=>{ 
   const  tab = document.querySelector('#tab'); 
   tab.innerHTML =`${uppercase(input)}  
   <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path></svg></span> 
   `; 
   if(data.meals === null){ 
   list.innerHTML= ` 404 Not Found </br> 
   Please Try Again! 
   `; 
   }else{ 
   list.innerHTML = data.meals.map((meal)=>` 
   <div class=meal-item> 
   <div class= meal-img> 
   <img src="${meal.strMealThumb}" alt="${meal.strMeal}"> 
   </div> 
   <div class = "meal-info"> 
   <p>${meal.strMeal}</p> 
   <button class="btn">Get Recipe</button> 
   </div> 
   </div>`).join(""); 
   } 
   }); 
   }; 
    
   for(i = 0; i<12; i++){ 
    setTimeout(function(){ 
    const baseurl = `https://www.themealdb.com/api/json/v1/1/random.php`; 
     
    var newelement = document.createElement("div"); 
    newelement.classList.add("meal-item"); 
    fetch(baseurl).then((response)=>response.json()).then((data)=>{ 
    const meal = data.meals[0]; 
    newelement.innerHTML = ` 
    <div class= meal-img> 
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"> 
    </div> 
    <div class = "meal-info"> 
    <p>${meal.strMeal}</p> 
    <button class="btn">Get Recipe</button> 
    </div>` 
    list.appendChild(newelement); 
    });},0)}; 
 
    const card = document.querySelector('#card'); 
    card.addEventListener('click',function(e){ 
    e.preventDefault(); 
    const target = e.target.parentNode; 
    const baseurl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${target.getAttribute("href")}`; 
    fetch(baseurl).then((response)=>response.json()).then((data)=>{ 
    const  tab = document.querySelector('#tab'); 
    tab.innerHTML =`${uppercase(target.getAttribute("href"))}  
    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path></svg></span> 
    `; 
    if(data.meals === null){ 
    list.innerHTML= ` 404 Not Found </br> 
    Please Try Again! 
    `; 
    }else{ 
    list.innerHTML = data.meals.map((meal)=>` 
    <div class=meal-item> 
    <div class= meal-img> 
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"> 
    </div> 
    <div class = "meal-info"> 
    <p>${meal.strMeal}</p> 
    <button class="btn">Get Recipe</button> 
    </div> 
    </div>`).join(""); 
    } 
    }); 
       
           
    }); 
 
 
 
 
 
