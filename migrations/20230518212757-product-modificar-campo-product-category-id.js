'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('products', 'products_ibfk_1');
    // await queryInterface.renameColumn('products', 'product_category_id', 'product_category', {
    //   type: Sequelize.UUID,
    //   allowNull: false
    // });
    // await queryInterface.addConstraint('products', {
    //   fields: ['product_category'],
    //   type: 'foreign key',
    //   // name: 'products_ibfk_1',
    //   references: {
    //     table: 'product_categories',
    //     field: 'id'
    //   },
    //   // onDelete: 'cascade',
    //   // onUpdate: 'cascade'
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    // await queryInterface.removeConstraint('products', 'products_ibfk_1');
    // await queryInterface.renameColumn('products', 'product_category', 'product_category_id');
    

  }
};
