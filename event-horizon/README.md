# Event Horizon

Custom, memory-managed events for GameMaker: Studio and GameMaker: Studio 2

## Usage

To use Event Horizon, download [the latest release](https://github.com/gm-core/event-horizon/releases), and add the scripts to your project. At the very beginning of your game, before you use any event code, run `event_system_init()` to initialize the event system.

## Example

First, initialize the event system.

```gml
// First room creation code
event_system_init()
```

Next, create an object which will listen to an event. For this example, let's create a "guard" enemy which reacts to the player shooting a weapon.

```gml
// In our Guard object, called obj_guard

// "Create" Event
state = "idle";
event_add_listener("gunshot", 0);

// User Event 0
state = "searching";

// "Clean Up" Event
event_remove_listener("gunshot", 0);
```

Now we have a guard object which defaults to an "idle" state, but converts to a "searching" state when the "gunshot" event is fired. Now, we just have our player object fire off a "gunshot" event when shooting a gun. Notice that when we call `event_add_listener`, we provide the name of the event, and a number. Here, that number is the number of the "User Event" event we want to run when this event fires.

```gml
// In our Player object, obj_player

// Left Mouse Button Clicked Event
instance_create_depth(x, y, depth, obj_bullet);
event_fire("gunshot");
```

## Passing Event Data

You can optionally provide additional data when firing an event. As an example, consider a system that handles a new player joining a multiplayer game lobby.

```gml
// First room creation code
event_system_init()
```

```gml
// Our lobby manager object, obj_lobby

// "Create" Event
event_add_listener("newPlayer", 1);

// User Event 1
show_message("A new player has joined! Their name is " + eventData);
```

Notice the use of `eventData` in the event handler. That is the name of the variable which will contain our additional event data.

```gml
// Our script that run when a new player joins the game
var playerName = argument0;
event_fire("newPlayer", playerName);
```

We read in `playerName` from an argument (presumably something else passes this to our script), and we include it in the event as the second argument in `event_fire`. Now, our lobby manager object will show a message with a player's name when they join.
