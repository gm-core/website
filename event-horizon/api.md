# Event Horizon API

## `event_add_listener(eventName, eventMethod)`

Add an event listener which will call `eventMethod` when the provided `eventName` event is fired with `event_fire()`.

This function returns a struct to be passed to `event_remove_listener()` to clean up later.

```
@desc Add a listener to an event. Provide the event name, and either a number representing the user event number, or a combo of event category and type. See examples for info.
@param {String} eventName    The name of the event to add a listener to
@param {Method} eventMethod  The method/function to run when the event is fired
@returns {Struct}            A struct describing the listener for use with event_remove_listener()
@example

// Listen for the "hurtPlayer" event and subtract 1 from health when it fires
var listener = event_add_listener("hurtPlayer", function() {
  health -= 1;
});
```

## `event_remove_listener(listener)`

Removes an event listener. Use this to clean up an event listener added with `event_add_listener()`. `listener` is the returned value from `event_add_listener()`.

This should run on the `destroy` or `clean up` event of an object, or when you no longer want the listener to run.

```
@param {Struct} listener  The listener to remove as returned from event_add_listener
@example

// Create and then remove a listener
var listener = event_add_listener("hurtPlayer", function() {
  health -= 1;
});

event_remove_listener(listener);
```

## `event_fire(eventName [, eventData])`

Fires an event, running all listeners that are currently set up for the event. Optionally, provide a value which will be passed in to the method for all listeners as the first argument.

```
@param {String} eventName
@param {Mixed} optionalData
```

## `event_system_debug()`

Prints out debugging information about the event system to the console.

