const ItemService = {
  getItems(db) {
    return db('item')
      .then(item => item);
  },
  getItemById(db, id) {
    return db('item')
      .where({ id })
      .first()
      .then(item => !!item);
  },
  getItemByName(db, name) {
    return db('item')
      .where({ name })
      .first()
      .then(item => !!item);
  }
}

module.exports = Item.ItemService;