
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
