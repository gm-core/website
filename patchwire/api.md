# Patchwire-GM API

## Basics / Setup

### `net_init([Real optionalTimeout, Boolean optionalBlocking])`

Initializes Patchwire-GM. Run this before any other script for networking.

Optionally, provide a timeout in milliseconds, and if you want the connection to be blocking or not. Specifying `false` for `optionalBlocking` will connect to the server in the background.

A successful connection fires a `"connected"` event. A failed connection fires a `"connectFailed"` event.

### `net_connect(String ServerIP, Real ServerPort)`

Connects to the given server/port. Upon a successful connection, a `"connected"` command is received.

### `net_disconnect()`

Begins a graceful disconnection from the server. Upon success, a `disconnected` evnet will fire.

### `net_resolve()`

Run this function in your networking controller's `Async - Networking` event to enable networking.

## Receiving Commands

### `net_cmd_add_handler(String CommandType, Function HandlerFunction)`

Adds a command handler to Patchwire-GM which will run when the given command type is received. The function is passed a `ds_map` of the incoming data.

> **NOTE**: Your handler scripts do not need to clean up the data `ds_map`. Patchwire handles this for you.

## Sending Commands

### `net_cmd_init(String CommandType)`

Initializes a command to be sent to the server. Returns a `ds_map` which you can add more data to.

### `net_cmd_send([ds_map Command, Boolean PreventDestroy])`

Sends the given command to the server. If no arguments are provided, sends the most recently created command. `PreventDestroy` can be set to `true` to prevent Patchwire from cleaning up the command map after sending it.

## Built-in Events

### `connected`

This event is fired when a successful connection is made.

### `disconnected`

This event is fired when the client is disconnected gracefully from the server.

### `dropped`

This event is fired when the client is abruptly or errantly disconnected from the server.

### `connectFailed`

This event is fired when the connection to the server times out.

## Globals

The following global variables are set by Patchwire-GM. These are **read-only**, setting them may break your game.

### `global.patchwire_connectedStatus`

`true` when connected to the server, `false` otherwise.

### `global.patchwire_netSock`

The underlying network socket that Patchwire is listening on.

### `global.patchwire_netHandlerMap`

The ds_map that contains all the handlers for networking events.
