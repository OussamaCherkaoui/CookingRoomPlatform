

//tables recipes et category
let recipes = [
    {title:"Lemon Dijon Vina igrette Kale Quinoa",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover in the fridge for a 3 hours","add an extra 1/2 tsp salt","Preheat oven to 220C for 7 Minutes"],image:"../Images/recette1.jpg",category:"Salad",commentaire:["Wooow c' est une belle repas !!","combien de miel faut ajouter ?"],rating:10},
    {title:"Pizza Bar Mozzarella",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a", ingredients:["500 gm Cheese","200 gm Flower","2 1/4 teaspoons Active dry yeast","3 3/4 cups Bread Flour","3 piece Bell peppers"],steps:["simply dummy text of the printing","Lorem Ipsum has been the industry's standard","It has survived not only five centuries"," but also the leap into electronic typesetting","remaining essentially unchanged"],image:"../Images/recette2.jpg",category:"Pizza",commentaire:["Wooow beautifull recipe !!","s' il vous plait eexppliquer moi la méthode"],rating:30},
    {title:"Sunday Best Fruit Salad",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette3.jpg",category:"Dinner",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:20},
    {title:"Kale Quinoa and Avocado",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette4.jpg",category:"Breakfast",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:50},
    {title:"Apple Salad with Lemon",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette5.jpg",category:"Salad",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:40},
    {title:"Spiced Pork and Pasta",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette6.jpg",category:"Pasta",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:0},
    {title:"Lemon Dijon Vina igrette Kale Quinoa",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover in the fridge for a 3 hours","add an extra 1/2 tsp salt","Preheat oven to 220C for 7 Minutes"],image:"../Images/recette1.jpg",category:"Salad",commentaire:["Wooow c' est une belle repas !!","combien de miel faut ajouter ?"],rating:10},
    {title:"Pizza Bar Mozzarella",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a", ingredients:["500 gm Cheese","200 gm Flower","2 1/4 teaspoons Active dry yeast","3 3/4 cups Bread Flour","3 piece Bell peppers"],steps:["simply dummy text of the printing","Lorem Ipsum has been the industry's standard","It has survived not only five centuries"," but also the leap into electronic typesetting","remaining essentially unchanged"],image:"../Images/recette2.jpg",category:"Pizza",commentaire:["Wooow beautifull recipe !!","s' il vous plait eexppliquer moi la méthode"],rating:30},
    {title:"Sunday Best Fruit Salad",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette3.jpg",category:"Dinner",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:10},
    {title:"Kale Quinoa and Avocado",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette4.jpg",category:"Breakfast",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:50},
    {title:"Apple Salad with Lemon",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette5.jpg",category:"Salad",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:20},
    {title:"aaaaaaaaaaaaaaaaaaaaaaaa",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette6.jpg",category:"Pasta",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:30}
];

let category = ["Salad","Pizza","Dinner","Breakfast","Pasta"];


let currentPage = 1;
const recipesPerPage = 6;
const totalRecipes = recipes.length;
const totalPages = Math.ceil(totalRecipes / recipesPerPage);

const paginationContainer = document.querySelector('.pagination');
const dropdownMenu = document.getElementById('icon_category');
const dropdowncategorySubmit = document.getElementById('category-submit');
const btnReadMoreRecipe =document.querySelectorAll('#btn-readMore');




const searchInput = document.getElementById('search-Input');
const searchButton = document.querySelector('.input-group-text');



// Filter recipes with top 3 ratings
function getTopRatedRecipes(recipes) {
    const sortedRecipes = recipes.slice().sort((a, b) => b.rating - a.rating);
    // Return the top 3 recipes
    return sortedRecipes.slice(0, 3);
  }
  
  // Function to display top rated recipes on the home page
  function displayTopRatedRecipes(recipes) {
    const topRatedRecipes = getTopRatedRecipes(recipes);
  
    const topRatedContainer = document.getElementById('topRatedContainer');
    topRatedContainer.innerHTML = ''; 
  
    topRatedRecipes.forEach(recipe => {
      const card = createRecipeCard(recipe);
      topRatedContainer.appendChild(card);
    });
  }
  
  // Call the function to display top rated recipes on page load
  displayTopRatedRecipes(recipes);
  


//creation des link des paginations
function createPaginationLink(pageNumber, isActive = false) {
  const li = document.createElement('li');
  li.classList.add('page-item');
  if (isActive) {
    li.classList.add('active');
  }

  const link = document.createElement('a');
  link.classList.add('page-link');
  link.href = '#';
  link.textContent = pageNumber;

  li.appendChild(link);
  return li;
}

function createPagination(totalPages) {
  paginationContainer.innerHTML = ''; 

  const prevLink = createPaginationLink('Previous');
  paginationContainer.appendChild(prevLink);

  for (let page = 1; page <= totalPages; page++) {
    const isActive = page === currentPage; 
    const pageLink = createPaginationLink(page, isActive);
    paginationContainer.appendChild(pageLink);
  }

  const nextLink = createPaginationLink('Next');
  paginationContainer.appendChild(nextLink);
}

//remplir drop-down par des catégorie



function filterRecipesByCategory(category) {
  const filteredRecipes = recipes.filter(recipe => recipe.category === category);
  currentPage=1;
  displayRecipeCards(filteredRecipes,currentPage);

  const totalFilteredRecipes = filteredRecipes.length;
  const totalPagesFiltered = Math.ceil(totalFilteredRecipes / recipesPerPage);
  createPagination(totalPagesFiltered);
}

//création les cartes des recipes 

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.classList.add('card', 'recipe', 'px-0', 'py-0');
  
  card.innerHTML = `
              <img class="card-img-top" src="${recipe.image}" width="100%" height="180" alt="${recipe.title}">
              <div class="card-body">
                <h5 class="card-title text text-center title fs-12 fw-semibold">${recipe.title}</h5>
                <div class="etoile">
                ${displayrating(recipe)}
                </div>
                <button type="button" class="btn px-3" id="btn-readMore">Read more</button>
              </div>
`;

// Ajoutez un gestionnaire d'événements au bouton "Read more" pour chaque recette

const btnReadMore = card.querySelector('#btn-readMore');
  btnReadMore.addEventListener('click', () => {
  window.location.href = `./RecipesDetails.html`;
  displayRecipeDetails(recipe);
  });


return card;
}


//Affichages des étoiles necessaires
function displayrating(recipe){
  const filledStar = `
  <svg fill="#FFD700" width="35px" height="35px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon" stroke="#FFD700"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path> </g></svg>
  `;

  const emptyStar = `
  <svg fill="#FFD700" class="empty" width="35px" height="35px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon" stroke="#FFD700"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path> </g></svg>
`;

let starsHtml = '';

if (recipe.rating === 0) {
  starsHtml = emptyStar.repeat(5);
} else if (recipe.rating === 10) {
  starsHtml = filledStar + emptyStar.repeat(4);
} else if (recipe.rating === 20) {
  starsHtml = filledStar.repeat(2) + emptyStar.repeat(3);
} else if (recipe.rating === 30) {
  starsHtml = filledStar.repeat(3) + emptyStar.repeat(2);
} else if (recipe.rating === 40) {
  starsHtml = filledStar.repeat(4) + emptyStar.repeat(1);
} else {
  starsHtml = filledStar.repeat(5);
}
 return starsHtml;
}

//Affichage des cartes des recettes 
function displayRecipeCards(recipes,page) {
  const recipeContainer = document.getElementById('recipeContainer');
  recipeContainer.innerHTML = '';

  const startIndex = (page - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToDisplay = recipes.slice(startIndex, endIndex);

  recipesToDisplay.forEach(recipe => {
    const card = createRecipeCard(recipe);
    recipeContainer.appendChild(card);
  });
  const totalDisplayedRecipes = recipes.length;
  const totalPagesDisplayed = Math.ceil(totalDisplayedRecipes / recipesPerPage);
  
  
  createPagination(totalPagesDisplayed);
  paginationSwitched(recipes);

}

//affichage des recettes selon la pagination
function handlePageClick(page) {
  currentPage = page;
  displayRecipeCards(recipes,currentPage);
}



function paginationSwitched(recipes){
  const paginationLinks = document.querySelectorAll('.page-link');
  paginationLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const page = parseInt(this.textContent); 
    if (!isNaN(page)) {
      handlePageClick(page);
    } else if (this.textContent === 'Previous' && currentPage > 1) {
      handlePageClick(currentPage - 1);
    } else if (this.textContent === 'Next' && currentPage < Math.ceil(recipes.length / recipesPerPage)) {
      handlePageClick(currentPage + 1);
    }
  });
});
}

//chercher des recettes
function searchRecipes() {
  const searchTerm = searchInput.value.trim().toLowerCase(); 
  const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
  currentPage=1;
  displayRecipeCards(filteredRecipes,currentPage);
}



//function Submit a Recipe
function submitRecipe() {
    const recipeTitle = document.querySelector('#recipeTitle').value;
    const recipeDescription = document.querySelector('#recipeDescription').value;
    const ingredients = [...document.querySelectorAll('.form-control-ingredient')].map(input => input.value);
    const steps = [...document.querySelectorAll('.form-control-step')].map(input => input.value);
    const recipeImage = document.querySelector('#imageUpload').value; 
    const recipeCategory = document.querySelector('#category').value;

    const newRecipe = {
        title: recipeTitle,
        description: recipeDescription,
        ingredients: ingredients,
        steps: steps,
        image: recipeImage,
        category: recipeCategory,
        
    };
    recipes.push(newRecipe);

    document.querySelector('#recipeTitle').value = '';
    document.querySelector('#recipeDescription').value = '';
    document.querySelectorAll('.form-control-ingredient').forEach(input => input.value = '');
    document.querySelectorAll('.form-control-step').forEach(input => input.value = '');
    document.querySelector('#imageUpload').value = ''; 
    document.querySelector('#category').value = '';
}


// Function display RecipeDetails
function displayRecipeDetails(recipe){

  const imageRecipe = document.getElementById('img-1');
  imageRecipe.style.background = `url("${recipe.image}") no-repeat top center/cover`;
    
    const titledetail = document.getElementById('titleDetail');
    titledetail.textContent = recipe.title;
    
    const descriptiondetail = document.getElementById('description');
    descriptiondetail.textContent = recipe.description;


    const ingredient1 = document.getElementById('ingredient1');
    ingredient1.textContent=recipe.ingredients[0];
    const ingredient2 = document.getElementById('ingredient2');
    ingredient2.textContent=recipe.ingredients[1];
    const ingredient3 = document.getElementById('ingredient3');
    ingredient3.textContent=recipe.ingredients[2];
    const ingredient4 = document.getElementById('ingredient4');
    ingredient4.textContent=recipe.ingredients[3];
    const ingredient5 = document.getElementById('ingredient5');
    ingredient5.textContent = recipe.ingredients[4];
    

    const step1 = document.getElementById('step1');
    step1.textContent=recipe.steps[0];
    const step2 = document.getElementById('step2');
    step2.textContent=recipe.steps[1];
    const step3 = document.getElementById('step3');
    step3.textContent =recipe.steps[2];
    const step4 = document.getElementById('step4');
    step4.textContent =recipe.steps[3];
    const step5 = document.getElementById('step5');
    step5.textContent =recipe.steps[4];

    const stars = document.querySelector(".stars");
    stars.innerHTML=`${displayrating(recipe)}`;
}


displayRecipeCards(recipes,currentPage);



searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchRecipes();
  }
});

searchButton.addEventListener('click', function () {
  searchRecipes();
});






category.forEach(cat => {
  const link = document.createElement('a');
  link.classList.add('dropdown-item');
  link.href = '#';
  link.textContent = cat;
  link.setAttribute('data-category', cat);
  
  link.addEventListener('click', function() {
    searchInput.value=""; 
    const selectedCategory = this.getAttribute('data-category');
    filterRecipesByCategory(selectedCategory);
  });
    dropdownMenu.appendChild(link);
});

//remplir categorie pour la page submit

 
category.forEach(cat => {
  const link = document.createElement('a');
  link.classList.add('dropdown-item');
  link.href = '#';
  link.textContent = cat;
  link.setAttribute('data-category', cat);
  
  link.addEventListener('click', function() {
    const selectedCategory = this.getAttribute('data-category');
  });

  dropdowncategorySubmit.appendChild(link);
  
});

