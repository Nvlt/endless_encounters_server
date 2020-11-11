# Endless Encounters API  
[Endless Encounters](https://endless-encounters-chi.vercel.app/ "Endless Encounters") ||
[Client GitHub](https://github.com/EndlessEncounters/client "Client GitHub") ||
[API GitHub](https://github.com/EndlessEncounters/server "API Github")  
By: [Alexis Felts](https://github.com/Nvlt "Alexis Felts"), 
[John Pendergast](https://github.com/Jpending "John Pendergast"), 
[Scott Whiteman](https://github.com/scottWhiteman "Scott Whiteman"), & 
[Tiffany Summerford](https://github.com/breakfastatiffs "Tiffany Summerford")  

## About Endless Encounters:  
Endless Encounters is a text-based RPG ("Role Playing Game") developed by EE. Once you're in, you can explore a whole new world in search of ravenous enemies to duel swords with or visit the tavern to discuss rumors. Endless Encounters includes randomly generated events and actions/abilities to respond with.  

** API's base URL: 'postgresql://dunder_mifflin@localhost/endless-encounters' **  

## API Endpoints:  


### '/user'
The '/user' endpoint is designed to create new user account and collect a Token for a registered user.  
The POST command on '/user' accepts a  name, username, and password.  
```json
{
    "name": "Jane Doe",
    "username": "JaneD@example.com",
    "password": "password123!"
}
```
Successful POST's return a `200 OK` response and assign a user_id.  

### '/auth'
The '/auth' endpoint validates user login allows user access via an auth token.  
The POST command on '/auth' accepts a username and password.  
```json
{
    "username": "JaneD@example.com",
    "password": "password123!"
}
```
Successful POST's return a `200 OK` response and assign a jwt-token. c

### '/entity'
The '/entity' endpoint receives an object from the database containing the 7 abilities, the type, name, description, stats, level, speechType, hostility, and job. The entity object is used with the story object to create a full encounter.  
```json
    "type": 1,
     "name": "player",
     "desc": "a strong cat",
     "abilities": {Fire Ball, Flee},
     "stats": {1, 2, 3, 4, 5, 6, 7},
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
```

### '/story'
The '/story' endpoint recieves an object from the database that pieces together the text based encounter. By tying together the entity object, a setting, combat, and the players' stats, the user will then recieve a randomly generated encounter.  
```json
     "type": "Erthgurd",
     "displayText": "Welcome to the town of",
     "combat": false,
     "fromCombat": false,
     "name": "V",
     "lastTavern": "Penuches",
     "lastTown": "Cat Kingdom",
     "desc": "lots and lots of hairballs",
     "choices": {explore, tavern},
     "player": 1,
     "ap": 10,
     "turn": "player",
     "entities": {2}
```

## Technologies Used:  
FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.  

BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.