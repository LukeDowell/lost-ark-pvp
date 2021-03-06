# Lost  Ark PVP

### Getting Started

`docker run --name lostarkpvp-redis -p 6379:6379 -d redislabs/rejson:latest --save 60 1 --loglevel warning`

### About 

Discord bot for managing PVP related activities

 * Server Registration
    - in game name and server
    - sync with steam profile

 * Ranked 3v3 team ladder 
    - MMR + Quick Play
    - Stats

 * Creating 3x1v1 custom game practice sessions
    - Enter a discord group of 6 people in pairs of 2
    - Once the group is full, a player is chosen at random to create a lobby in game and invite everyone


### Dev Journal

**2/28/2022**

New day new project, let's keep this dev journal rolling. I started devoting absurd amounts of my free time to 
the greatest drug of all, a cool new MMO. Lost Ark has a pretty interesting PVP setup; you can queue for ranked
pvp only as an individual, yet the mode is 3v3. I think there is demand for a ranked 3v3 premade ladder, and
thus this project was born. 

Another feature that feels conspicuously absent from a game this mechanically demanding is a more fleshed out
training room. Coming from a fighting game background, I'm used to having much more options in a training room.
I'd like to be able to set up specific situations and practice them, and in Lost Ark you can only do that by
sparring with another person. Another roadblock is that you can only create rooms of 3v3; I'm going to try
and create a sparring matchmaker that will allow groups of two to join a queue, and when 3 pairs are ready, it
will notify them all and have them create a custom game together so you can sort of practice 1v1.

I have been using typescript a lot recently and I'm going to continue doing it. Something kind of cool about
discord bots is that they are actually fully fleshed out applications that run. It's kind of fun imagining the 
deployable as an actual entity that is interacting with the discord server. 

My current mission is to come up with some kind of pleasing UI to get people 'registered' with the bot. I'd 
like it to be as simple as possible to join the server, register, and queue. I may even count clicks and try
to optimize that. Another requirement I would like is for anyone to be able to add the bot to their server.
Having the bot be popular in my own standalone server is unlikely, but convincing some other lost ark community
to use it and have it operate within it's own channel category is much more likely.

Stuff like this is pretty neat:

<img src="https://puu.sh/ILX6v/7ece9f8ca9.png" alt="example embed" />

** 2/28/2022 **

I've got a prototype 'embed' to be rendered in the registrations channel

<img src="https://puu.sh/IM8ht/043dee505f.png" alt="example embed" />

It's easy to use the discordjs library to create new posts but I have been finding myself wanting only 
to do a bunch of things as long as it doesn't already exist. Creating channels, categories, emojis and
now embeds. Currently I'm just querying the guild and seeing if a component with the same name already
exists, but I'm wondering if that is the best move.

I'm slowly chewing on how matchmaking is going to work. I'm going to plan for tons of people even though
that isn't likely, it'll be fun to learn a possible solution for that. I should check out Fightcade again
and see if they have some kind of matchmaking system, I can't remember if it was just person-to-person
invitations or not.

Another thing I have been thinking about; why can't every instance of my bot across any number of guilds
use the same matchmaking ladder? I wonder if there is a way I can have anyone queue with anyone else across
servers and just send DMs to all the participants. 
