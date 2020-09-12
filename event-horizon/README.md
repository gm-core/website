# Event Horizon

Custom, memory-managed events for GameMaker: Studio and GameMaker: Studio 2

## Download and Install

Download the [latest release](https://github.com/gm-core/event-horizon/releases/download/2.0.0/event-horizon-2-0-0.yymps) and import into GameMaker Studio.

Browse older releases and source downloads on the [releases page](https://github.com/gm-core/event-horizon/releases)

For instructions on importing yymp files, see [Installing .yymp Packages](/installing.html)

## Usage

First, create an object which will listen to an event. For this example, let's create a "guard" enemy which reacts to the player shooting a weapon.

```gml
// In our Guard object, called obj_guard

// "Create" Event
state = "idle";
var gunshotListenr = event_add_listener("gunshot", function() {
  state = "searching";
});

// "Clean Up" Event
event_remove_listener(gunshotListener);
```

Now we have a guard object which defaults to an "idle" state, but converts to a "searching" state when the "gunshot" event is fired. Now, we just have our player object fire off a "gunshot" event when shooting a gun.

```gml
// In our Player object, obj_player

// Left Mouse Button Clicked Event
instance_create_depth(x, y, depth, obj_bullet);
event_fire("gunshot");
```

## Passing Event Data

You can optionally provide additional data when firing an event. As an example, consider a system that handles a new player joining a multiplayer game lobby.

```gml
// Our lobby manager object, obj_lobby

// "Create" Event
event_add_listener("newPlayer", function(username) {
  show_message("A new player has joined! Their name is " + username);
});

```

```gml
// Our script that run when a new player joins the game
var playerName = argument0;
event_fire("newPlayer", playerName);
```

We read in `playerName` from an argument (presumably something else passes this to our script), and we include it in the event as the second argument in `event_fire`. Now, our lobby manager object will show a message with a player's name when they join.
