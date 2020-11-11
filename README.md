# Endless Encounters API  
[Endless Encounters](https://endless-encounters-chi.vercel.app/ "Endless Encounters") ||
[Client GitHub](https://github.com/EndlessEncounters/client "Client GitHub") ||
[API GitHub](https://github.com/EndlessEncounters/server "API Github")  
By: [Alexis Felts](https://github.com/Nvlt "Alexis Felts"), 
[John Pendergast](https://github.com/Jpending "John Pendergast"), 
[Scott Whiteman](https://github.com/scottWhiteman "Scott Whiteman"), & 
[Tiffany Summerford](https://github.com/breakfastatiffs "Tiffany Summerford")  

## About Endless Encounters:  
Endless Encounters is a text-based RPG ("Role-Playing Game") developed by EE. Once you're in, you can explore a whole new world in search of ravenous enemies to duel swords with or visit the tavern to discuss rumors. Endless Encounters includes randomly generated events and actions/abilities to respond with.  

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

### '/api/entity/:id'
**non-authenticated GET**  
The '/api/entity/:id' endpoint takes in an id that represents a character/npc/player in the database. The server will pull down the data representing that character and run it through our entity class to add on additional non-dynamic game data, then it will respond with the resulting data.
```json
"serverData": {
        "id": "36"
    },
```

### '/api/story/:id'
**non-authenticated GET**  
*Story events account for all instances in the game, everything from the text-based start screen, to the level up and combat scenarios are story events.*  
The '/api/story/:id' endpoint takes in an id that represents a 'StoryEvent' in the database. The server will pull down the data representing that story event and run it through our StoryEvent class to add on additional non-dynamic game data, then it will respond with the resulting data.

```json{style="background: pink;"}
{
    "serverData": {
        "id": "36"
    },
    "type": "explore",
    "name": "field of gold",
    "lastTown": "",
    "lastTavern": "",
    "desc": "a new place",
    "player": {
        "serverData": {
            "id": "1066"
        },
        "name": "V",
        "desc": "Meow",
        "job": {
            "name": "Mage",
            "desc": "a wispy wizard person",
            "key": "Mage",
            "base_stats": {
                "str": 2,
                "dex": 12,
                "int": 20,
                "stam": 5,
                "will": 10,
                "agi": 13,
                "cha": 10
            },
            "abilities": {
                "Attack": {
                    "name": "Attack",
                    "desc": "A basic attack.",
                    "cost": 0,
                    "type": "offense"
                },
                "Wizard Slap": {
                    "name": "Unarmed Attack",
                    "desc": "An attack with a bare fist.",
                    "cost": 0,
                    "type": "harmless"
                },
                "Fire Ball": {
                    "name": "Fire Ball",
                    "desc": "Cast a Fire Ball.",
                    "cost": 5,
                    "type": "offense"
                },
                "heal": {
                    "name": "heal",
                    "desc": "Heal yourself for int * 5 hp.",
                    "cost": 0,
                    "type": "harmless"
                },
                "End Turn": {
                    "name": "End Turn",
                    "desc": "end your turn.",
                    "cost": 0,
                    "type": "harmless"
                },
                "flee": {
                    "name": "town",
                    "desc": "Go to a town.",
                    "cost": 0,
                    "type": "harmless"
                }
            }
        },
        "base_hp": 200,
        "level": 0,
        "speechType": "general",
        "pronoun": "They",
        "upgradeAbilities": {
            "str": {
                "name": "Level Up Str.",
                "desc": "Level up your str stat.",
                "cost": 0,
                "type": "harmless"
            },
            "dex": {
                "name": "Level Up Dex.",
                "desc": "Level up your Dex stat.",
                "cost": 0,
                "type": "harmless"
            },
            "int": {
                "name": "Level Up Int.",
                "desc": "Level up your Int stat.",
                "cost": 0,
                "type": "harmless"
            },
            "stam": {
                "name": "Level Up stam.",
                "desc": "Level up your stam stat.",
                "cost": 0,
                "type": "harmless"
            },
            "will": {
                "name": "Level Up Will.",
                "desc": "Level up your will stat.",
                "cost": 0,
                "type": "harmless"
            },
            "agi": {
                "name": "Level Up agi.",
                "desc": "Level up your agi stat.",
                "cost": 0,
                "type": "harmless"
            },
            "cha": {
                "name": "Level Up cha.",
                "desc": "Level up your cha stat.",
                "cost": 0,
                "type": "harmless"
            }
        },
        "statPoints": 0,
        "abilities": {
            "Attack": {
                "name": "Attack",
                "desc": "A basic attack.",
                "cost": 0,
                "type": "offense"
            },
            "Wizard Slap": {
                "name": "Unarmed Attack",
                "desc": "An attack with a bare fist.",
                "cost": 0,
                "type": "harmless"
            },
            "Fire Ball": {
                "name": "Fire Ball",
                "desc": "Cast a Fire Ball.",
                "cost": 5,
                "type": "offense"
            },
            "heal": {
                "name": "heal",
                "desc": "Heal yourself for int * 5 hp.",
                "cost": 0,
                "type": "harmless"
            },
            "End Turn": {
                "name": "End Turn",
                "desc": "end your turn.",
                "cost": 0,
                "type": "harmless"
            },
            "flee": {
                "name": "town",
                "desc": "Go to a town.",
                "cost": 0,
                "type": "harmless"
            }
        },
        "stats": {
            "str": 2,
            "dex": 12,
            "int": 20,
            "stam": 5,
            "will": 10,
            "agi": 13,
            "cha": 10
        },
        "gold": 0,
        "exp": 0,
        "max_exp": 100,
        "max_hp": 250,
        "hp": 250,
        "max_mp": 200,
        "mp": 200,
        "hostility": false,
        "type": "player",
        "current_event": 36,
        "intro": false,
        "dataType": "entity"
    },
    "combat": false,
    "displayText": "You escape the cave.\n\nYou come across a queer cutie.\n\nTiff: brb, I just gotta grab something to eat\n\nhp:250/250\nmp:200/200\nap:10/10\nexp:0/100\n\nChoices: explore, inspect, Attack, Wizard Slap, Fire Ball, heal, End Turn, or flee",
    "choices": {
        "explore": {
            "name": "town",
            "desc": "Go to a town.",
            "cost": 0,
            "type": "harmless"
        },
        "inspect": {
            "name": "town",
            "desc": "Go to a town.",
            "cost": 0,
            "type": "harmless"
        },
        "Attack": {
            "name": "Attack",
            "desc": "A basic attack.",
            "cost": 0,
            "type": "offense"
        },
        "Wizard Slap": {
            "name": "Unarmed Attack",
            "desc": "An attack with a bare fist.",
            "cost": 0,
            "type": "harmless"
        },
        "Fire Ball": {
            "name": "Fire Ball",
            "desc": "Cast a Fire Ball.",
            "cost": 5,
            "type": "offense"
        },
        "heal": {
            "name": "heal",
            "desc": "Heal yourself for int * 5 hp.",
            "cost": 0,
            "type": "harmless"
        },
        "End Turn": {
            "name": "End Turn",
            "desc": "end your turn.",
            "cost": 0,
            "type": "harmless"
        },
        "flee": {
            "name": "town",
            "desc": "Go to a town.",
            "cost": 0,
            "type": "harmless"
        }
    },
    "max_ap": 10,
    "ap": 10,
    "fromCombat": false,
    "activeEntity": "player",
    "turn": "player",
    "entities": [
        {
            "serverData": {
                "id": "1067"
            },
            "name": "Tiff",
            "desc": "a queer cutie",
            "job": {
                "name": "an enemy",
                "desc": "an enemy",
                "key": "Test_Enemy",
                "base_stats": {
                    "str": 2,
                    "dex": 12,
                    "int": 20,
                    "stam": 5,
                    "will": 200,
                    "agi": 13,
                    "cha": 10
                },
                "abilities": {
                    "Fire Ball": {
                        "name": "Fire Ball",
                        "desc": "Cast a Fire Ball.",
                        "cost": 5,
                        "type": "offense"
                    },
                    "Attack": {
                        "name": "Attack",
                        "desc": "A basic attack.",
                        "cost": 0,
                        "type": "offense"
                    },
                    "Heavy": {
                        "name": "Heavy Attack",
                        "desc": "An heavy attack with a melee weapon.",
                        "cost": 0,
                        "type": "harmless"
                    },
                    "Quick": {
                        "name": "Quick Attack",
                        "desc": "An quick attack.",
                        "cost": 0,
                        "type": "harmless"
                    },
                    "Punch": {
                        "name": "Unarmed Attack",
                        "desc": "An attack with a bare fist.",
                        "cost": 0,
                        "type": "harmless"
                    }
                }
            },
            "base_hp": 200,
            "level": 100,
            "speechType": "tiff",
            "pronoun": "They",
            "upgradeAbilities": {
                "str": {
                    "name": "Level Up Str.",
                    "desc": "Level up your str stat.",
                    "cost": 0,
                    "type": "harmless"
                },
                "dex": {
                    "name": "Level Up Dex.",
                    "desc": "Level up your Dex stat.",
                    "cost": 0,
                    "type": "harmless"
                },
                "int": {
                    "name": "Level Up Int.",
                    "desc": "Level up your Int stat.",
                    "cost": 0,
                    "type": "harmless"
                },
                "stam": {
                    "name": "Level Up stam.",
                    "desc": "Level up your stam stat.",
                    "cost": 0,
                    "type": "harmless"
                },
                "will": {
                    "name": "Level Up Will.",
                    "desc": "Level up your will stat.",
                    "cost": 0,
                    "type": "harmless"
                },
                "agi": {
                    "name": "Level Up agi.",
                    "desc": "Level up your agi stat.",
                    "cost": 0,
                    "type": "harmless"
                },
                "cha": {
                    "name": "Level Up cha.",
                    "desc": "Level up your cha stat.",
                    "cost": 0,
                    "type": "harmless"
                }
            },
            "statPoints": 0,
            "abilities": {
                "Fire Ball": {
                    "name": "Fire Ball",
                    "desc": "Cast a Fire Ball.",
                    "cost": 5,
                    "type": "offense"
                },
                "Attack": {
                    "name": "Attack",
                    "desc": "A basic attack.",
                    "cost": 0,
                    "type": "offense"
                },
                "Heavy": {
                    "name": "Heavy Attack",
                    "desc": "An heavy attack with a melee weapon.",
                    "cost": 0,
                    "type": "harmless"
                },
                "Quick": {
                    "name": "Quick Attack",
                    "desc": "An quick attack.",
                    "cost": 0,
                    "type": "harmless"
                },
                "Punch": {
                    "name": "Unarmed Attack",
                    "desc": "An attack with a bare fist.",
                    "cost": 0,
                    "type": "harmless"
                }
            },
            "stats": {
                "str": 5000000,
                "dex": 12,
                "int": 20,
                "stam": 5,
                "will": 200,
                "agi": 13,
                "cha": 10
            },
            "gold": 0,
            "exp": 0,
            "max_exp": 10100,
            "max_hp": 10000,
            "hp": 10000,
            "max_mp": 2100,
            "mp": 2100,
            "hostility": false,
            "type": "basic",
            "current_event": 36,
            "intro": true,
            "dataType": "entity"
        }
    ],
    "dataType": "StoryEvent"
}
```  
### '/api/user/story'
**autheticated GET**  
The '/api/user/story' endpoint is an authenticated GET endpoint. The server grabs all of the currently logged in user's saved game data from the database, runs it through our class library to add additional non-dynamic game data, and responds with it.  
```json
"serverData": {
        "id": "36"
    },
```

### '/api/choice'
**authenticated POST**  
The '/api/choice' endpoint is an authenticated POST endpoint.
The server grabs all of the currently logged in user's saved game data from the database, preps it for use in the game class library we wrote. After successfully constructing a StoryEvent with that data on the server-side, the server then runs the makeChoice() method of the StoryEvent class, passing in the choice that was sent in the body of the post. This method returns new and progressed story event data, which then gets formatted and saved to the database before the server responds with that same data so that it can be displayed to the client.
```json
     "body": {"choice": "explore"}
````

## Technologies Used:  
FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.  

BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.