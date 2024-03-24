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
  