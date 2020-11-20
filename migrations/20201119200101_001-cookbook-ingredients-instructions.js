
exports.up = function(knex) {
  return knex.schema
      .createTable('cookbook', tbl => {
          tbl.increments();
          tbl.string('recipe_name', 128);
      })
      .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.string('ingredient', 128);
          tbl.integer('cookbook_id')
              .unsigned()
            .notNullable()
              .references('id')
              .inTable('cookbook')
      })
      .createTable('instructions', tbl => {
          tbl.increments();
          tbl.string('step', 128);
          tbl.integer('cookbook_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('cookbook')
      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('cookbook')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('instructions')
};
