const InventoryService = {
  getUserInventory(db, user_id) {
    return db
      .from('inventory')
      .where('inventory.user_id', user_id)
      .first();
  },
  getInventoryItems(db, inventory_id) {
    return db
      .from('item')
      .select(
        //item key columns go here
      )
      .where( {inventory_id} );
  },
  updateInventory(db, inventory_id, item) {
    //Should replace values of id
  }
}

module.exports = InventoryService;