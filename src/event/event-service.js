const EventService={

  getEventID(db, user_id) {
    return db
      .from('characters')
      .where('characters.user_id', user_id)
      .first();
  },
  hasUserWithID(db, user_id) {
    return db
      .from('user')
      .where({user_id})
      .first()
      .then(user => !!user);
  },

}


module.exports=EventService;
