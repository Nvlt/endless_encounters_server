const knex = require('knex');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

makeUserArr = () => {
    [
        {
            "id": 1,
            "username": "admin",
            "password": "password",
            "email": "test@gmail.com",
            "entity": 1,
            "access_token": "252f1ad8-da83-4366-9a8b-84259bcb1894"
        },
        {
            "id": 2,
            "username": "test",
            "password": "pizzaparty3",
            "email": "testing2@gmail.com",
            "entity": 1,
            "access_token": "252f1ad8-da83-4366-9a8b-84259bcb1894"
        },
        {
            "id": 3,
            "username": "derek",
            "password": "password3",
            "email": "pizza@gmail.com",
            "entity": 1,
            "access_token": "252f1ad8-da83-4366-9a8b-84259bcb1894"
        },
    ]
}

makeStoryArr = () => {
    [
        {
            "id": 1,
            "type": "Penuches, the rat hole bar",
            "displayText": "Welcome to",
            "combat": false,
            "fromCombat": false,
            "name": "Timmy",
            "lastTavern": "The Draft",
            "lastTown": "Concord",
            "desc": "where the townies hail",
            "choices": ARRAY['explore', 'tavern'],
            "player": 1,
            "ap": 10,
            "turn": "player",
            "entities": ARRAY[2] 
        },
        {
            "id": 2,
            "type": "Crystal Castle",
            "displayText": "Welcome to",
            "combat": false,
            "fromCombat": false,
            "name": "Linda",
            "lastTavern": "Penuches",
            "lastTown": "Concord",
            "desc": "where rats go to drink",
            "choices": ARRAY['explore', 'tavern'],
            "player": 2,
            "ap": 10,
            "turn": "player",
            "entities": ARRAY[2] 
        },
    ]
}

makeEntityArr = () => {
    [
        {
            "type": "player",
            "name": "Tiff",
            "desc": "queer cutie",
            "abilities": ARRAY["Fire Ball", "flee"],
            "stats": [1, 2, 3, 4, 5, 6, 7],
            "job": "Mage",
            "level": 50,
            "speechType": "basic",
            "statPoints": 0,
            "exp": 0,
            "max_exp": 1000,
            "hp": 50,
            "max_hp": 150,
            "mp": 300,
            "max_mp": 300,
            "current_event": 1,
            "hostility": false
        },
        {
            "type": "basic",
            "name": "V",
            "desc": "a cat",
            "abilities": ARRAY["Fire Ball", "flee"],
            "stats": [1, 2, 3, 4, 5, 6, 7],
            "job": "Warrior",
            "level": 50,
            "speechType": "basic",
            "statPoints": 0,
            "exp": 0,
            "max_exp": 1000,
            "hp": 50,
            "max_hp": 150,
            "mp": 300,
            "max_mp": 300,
            "current_event": 1,
            "hostility": true
        },
    ]
}