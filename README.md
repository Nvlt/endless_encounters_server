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


### '/api/user'
The '/api/user' endpoint is designed to create new user account and collect a Token for a registered user.  
The POST command on '/user' accepts a  name, username, and password.  
```json
{
    "name": "Jane Doe",
    "username": "JaneD@example.com",
    "password": "password123!"
}
```
Successful POST's return a `200 OK` response and assign a user_id.  

### '/api/auth'
The '/api/auth' endpoint validates user login allows user access via an auth token.  
The POST command on '/auth' accepts a username and password.  
```json
{
    "username": "JaneD@example.com",
    "password": "password123!"
}
```
Successful POST's return a `200 OK` response and assign a jwt-token. c

### '/api/entity'
The '/api/entity' endpoint takes in an id which represents a character/npc/player in the database. The server will pull down the data representing that character and run it through our entity class to add on additional non-dynamic game data, then it will respond with the resulting data.
```json
    "type": 1,
     "name": "player",
     "desc": "a strong cat",
     "abilities": {"Fire Ball", "Flee"},
     "stats": {"1", "2", "3", "4", "5", "6", "7"},
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

### '/api/story'
Story events account for all instances in the game, everything from the text based start screen, to the level up and combat scenarios are story events.  
The 'api/story' endpoint takes in an id which represents a 'StoryEvent' in the database. The server will pull down the data representing that story event and run it through our StoryEvent class to add on additional non-dynamic game data, then it will respond with the resulting data.
```json
     "type": "Erthgurd",
     "displayText": "Welcome to the town of",
     "combat": false,
     "fromCombat": false,
     "name": "V",
     "lastTavern": "Penuches",
     "lastTown": "Cat Kingdom",
     "desc": "lots and lots of hairballs",
     "choices": {"explore", "tavern"},
     "player": 1,
     "ap": 10,
     "turn": "player",
     "entities": {"2"}
```

## Technologies Used:  
FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.  

BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.