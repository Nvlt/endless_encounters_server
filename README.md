# Endless Encounters API  
[Endless Encounters](https://endless-encounters.vercel.app/ "Endless Encounters") ||
[Client GitHub](https://github.com/EndlessEncounters/client "Client GitHub") ||
[API GitHub](https://github.com/EndlessEncounters/server "API Github")  
By: [John Pendergast](https://github.com/Jpending "John Pendergast"),
[Alexis Felts](https://github.com/Nvlt "Alexis Felts"),
[Scott Whiteman](https://github.com/scottWhiteman "Scott Whiteman"), &
[Tiffany Summerford](https://github.com/breakfastatiffs "Tiffany Summerford")  

## About Endless Encounters:  
Endless Encounters is a text-based RPG ("Role Playing Game") developed by Emotionally Exhausted. Once you're in, you can explore a whole new world in search of ravenous enemies to duel swords with or visit the tavern to discuss rumors. Endless Encounters includes randomly generated events and actions/abilities to respond with.  

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
Successful POST's return a `200 OK` response and assign a jwt-token. 

### '/inventory'

## Technologies Used:  
FrontEnd: JavaScript, React, CSS 3, HTML 5, and Jest.  

BackEnd: Node.js, Express.js, PostgreSQL, and Mocha & Chai.