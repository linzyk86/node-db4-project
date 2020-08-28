
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name: "Avocado toast", instructions: "Cut avocado. Mash with fork. Add to toast. Enjoy."}
  ])
};
