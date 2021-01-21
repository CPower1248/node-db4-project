exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments("recipe_id")
      tbl.string("recipe_name", 128).notNullable()
    })
    .createTable("ingredients", tbl => {
      tbl.increments("ingredients_id")
    })
    .createTable("shoppingList", tbl => {
      tbl.increments("shopping_list_id")
    })
    .createTable("instructions", tbl => {
      tbl.increments("instruction_id")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("shopping-list")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
