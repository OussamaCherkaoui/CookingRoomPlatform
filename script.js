
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
  


let recipes = [
    {title:"Lemon Dijon Vina igrette Kale Quinoa",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover in the fridge for a 3 hours","add an extra 1/2 tsp salt","Preheat oven to 220C for 7 Minutes"],image:"../Images/recette1.jpg",category:"Salad",commentaire:["Wooow c' est une belle repas !!","combien de miel faut ajouter ?"],rating:10},
    {title:"Pizza Bar Mozzarella",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a", ingredients:["500 gm Cheese","200 gm Flower","2 1/4 teaspoons Active dry yeast","3 3/4 cups Bread Flour","3 piece Bell peppers"],steps:["simply dummy text of the printing","Lorem Ipsum has been the industry's standard","It has survived not only five centuries"," but also the leap into electronic typesetting","remaining essentially unchanged"],image:"../Images/recette2.jpg",category:"Pizza",commentaire:["Wooow beautifull recipe !!","s' il vous plait eexppliquer moi la méthode"],rating:10},
    {title:"Sunday Best Fruit Salad",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette3.jpg",category:"Dinner",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:10},
    {title:"Kale Quinoa and Avocado",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette4.jpg",category:"Breakfast",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:10},
    {title:"Apple Salad with Lemon",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette5.jpg",category:"Salad",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:10},
    {title:"Spiced Pork and Pasta",description: "The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly on a vertical rotisserie", ingredients:["1 kg lamb","4 gm Garlic","1 gm coriander","1 gm paprika","1/2 spoon salt"],steps:["Mix Marinade in a large bowl","Add chicken and mix to coat well","Cover and marinate in the fridge for a minimum of 3 hours, 24 hours is ideal","If only 3 hours, add an extra 1/2 tsp salt","Preheat oven to 220C / 430F (standard) or 200C / 390F (fan / convection) for 7 Minutes"],image:"../Images/recette6.jpg",category:"Pasta",commentaire:["Wooow c' est une belle recipe !!","combien de miel faut ajouter ?"],rating:10},
];
let category =["Salad","Pizza","Dinner","Breakfast","Pasta"];
///////function Submit a Recipe
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
    displayRecipes();
    document.querySelector('#recipeTitle').value = '';
    document.querySelector('#recipeDescription').value = '';
    document.querySelectorAll('.form-control-ingredient').forEach(input => input.value = '');
    document.querySelectorAll('.form-control-step').forEach(input => input.value = '');
    document.querySelector('#imageUpload').value = ''; 
    document.querySelector('#category').value = '';
}
// Function display RecipeDetails
function displayRecipeDetails(recipe){
    const recipeDetailsContainer = document.querySelector('.recipe-details-container');
    const recipeDetailsElement = document.createElement('div');
    recipeDetailsElement.classList.add('recipe-details');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = recipe.title;
    recipeDetailsElement.appendChild(titleElement);
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = recipe.description;
    recipeDetailsContainer.appendChild(descriptionElement);

    const ingredientsTitleElement = document.createElement('h3');
    ingredientsTitleElement.textContent = 'Ingredients';
    recipeDetailsContainer.appendChild(ingredientsTitleElement);

    const ingredientsListElement = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        ingredientsListElement.appendChild(ingredientItem);
    });
    recipeDetailsElement.appendChild(ingredientsListElement);

    const stepsTitleElement = document.createElement('h3');
    stepsTitleElement.textContent = 'Steps';
    recipeDetailsElement.appendChild(stepsTitleElement);

    const stepsListElement = document.createElement('ol');
    recipe.steps.forEach(step => {
        const stepItem = document.createElement('li');
        stepItem.textContent = step;
        stepsListElement.appendChild(stepItem);
    });
    recipeDetailsElement.appendChild(stepsListElement);

    const imageElement = document.createElement('img');
    imageElement.src = recipe.image;
    imageElement.alt = recipe.title;
    recipeDetailsElement.appendChild(imageElement);

    const categoryElement = document.createElement('p');
    categoryElement.textContent = 'Category: ' + recipe.category;
    recipeDetailsElement.appendChild(categoryElement);

    if(recipe.commentaire && recipe.commentaire.length > 0){
        const commentsTitleElement = document.createElement('h3');
        commentsTitleElement.textContent = 'comments';
        recipeDetailsContainer.appendChild(commentsTitleElement);

        const commentsListElement = document.createElement('ul');
        recipe.commentaire.forEach(comment =>{
            const commentItem = document.createElement('li');
            commentItem.textContent = comment;
            commentsListElement.appendChild(commentItem);

        });
        recipeDetailsElement.appendChild(commentsListElement);     
    }

    const ratingElement = document.createElement('p');
    ratingElement.textContent = 'Rating :'+ recipe.rating + '/10';
    recipeDetailsElement.appendChild(ratingElement);

    recipeDetailsContainer.innerHTML = '';
    recipeDetailsContainer.appendChild(recipeDetailsElement);
}

displayRecipeDetails();

