# Event Horizon API

### `event_system_init()`

Initializes the event system. Run this before any other code in your game that uses the event system. A great place for this is on the creation code of your first room.

### `event_add_listener(eventName, userEventOrEventCategory [, eventNumber])`

Add an event listener to the object that calls this function.

This can be used two ways. The first is to only pass two arguments: The event to listen for, and the user event to run in response.

The other is to pass three arguments: The event to listen for, the category of event to run, and the number of the event to run. This works just like `event_perform` in response to an event firing. See the [event_perform docs](https://docs.yoyogames.com/source/dadiospice/002_reference/objects%20and%20instances/objects/generating%20events/event_perform.html) for more information on how that can work.

```
@param eventName {String} The event to listen for
@param userEventOrEventCategory {Real or Constant} The user event number to run, OR the category of event to run (see event_perform for more information)
@param eventNumber {Real or Constant} OPTIONAL The specific event to run if you specified the category as the second parameter. (see event_perform for more information)
```

### `event_remove_listener(eventName, userEventOrEventCategory [, eventNumber])`

Removes an event listener. Use this to clean up an event listener added with `event_add_listener()`. It takes the same parameters as you used to set up the listener.

This should run on the `destroy` event of an object, or `clean up` in GameMaker: Studio 2.

```
@param {String} eventName
@param {Real or Constant} userEventOrEventCategory
@param {Real or Constant} optionalEventId
```

### `event_fire(eventName [, eventData])`

Fires an event, running all listeners that are currently set up for the event. Optionally, provide a value which will be available in the `eventData` variable on the action that runs from the event firing.

```
@param {String} eventName
@param {Mixed} optionalData
```

### `event_system_debug()`

Prints out debugging information about the event system to the console.

