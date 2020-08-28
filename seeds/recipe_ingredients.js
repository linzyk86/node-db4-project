exports.seed = async function(knex) {
	await knex("recipe_ingredients").insert([
		{ recipe_id: 1, ingredients_id: 1, quantity: .5 },
    { recipe_id: 1, ingredients_id: 2, quantity: 1 },

		{ recipe_id: 1, ingredients_id: 3, quantity: 2 },

		
	])
}

//finish seeds for ingredients the do data part