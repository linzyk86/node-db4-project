
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table)=>{
      table.increments("id")
      table.text("name").notNull()
  })
  await knex.schema.createTable("ingredients", (table)=>{
      table.increments("id")
      table.text("name").notNull()
  })
  await knex.schema.createTable("recipe_ingredients", (table)=>{
      table.integer("recipe_id").references("id").inTable("recipies")
      table.integer("ingredients_id").references("ingredients").inTable("ingredients")
      table.integer("quantity").notNull()
      //pass an array of the two ids for primary key
      table.primary(["recipe_id", "ingredients_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
