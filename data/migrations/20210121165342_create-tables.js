exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments()
      tbl.string("recipe_name", 128).notNullable()
    })
    .createTable("ingredients", tbl => {
      tbl.increments()
      tbl.string("ingredient_name", 128).notNullable().unique()
    })
    .createTable("recipes_ingredients", tbl => {
      tbl.increments()
      tbl.integer("ingredient_id").notNullable().unique().unsigned()
        .references("id").inTable("ingredients")
        .onDelete("CASCADE")
      tbl.integer("recipe_id").notNullable().unsigned()
        .references("id").inTable("recipies")
        .onDelete("CASCADE")
    })
    .createTable("instructions", tbl => {
      tbl.increments()
      tbl.integer("recipes_ingredients_id").unsigned()
        .references("id").inTable("recipies_ingredients")
        .onDelete("RESTRICT")
      tbl.integer("quantity")
      tbl.integer("step").notNullable()
      tbl.string("text").notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipies_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
