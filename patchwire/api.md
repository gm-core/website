# Patchwire-GM API

## Basics / Setup

#### `net_init([Real optionalTimeout, Boolean optionalBlocking])`

Initializes Patchwire-GM. Run this before any other script for networking.

Optionally, provide a timeout in milliseconds, and if you want the connection to be blocking or not. Specifying `false` for `optionalBlocking` will connect to the server in the background.

A successful connection fires a `"connected"` command. A failed connection fires a `"connectFailed"` command.

#### `net_connect(String ServerIP, Real ServerPort)`

Connects to the given server/port. Upon a successful connection, a `"connected"` command is received.

#### `net_cmd_resolve()`

Run this function in your networking controller's `Async - Networking` event to enable networking.

## Receiving Commands

#### `net_cmd_add_handler(String CommandType, Script HandlerScript)`

Adds a command handler to Patchwire-GM which will run when the given command type is received. The script is passed a `ds_map` of the incoming data.

> **NOTE**: Your handler scripts do not need to clean up the data `ds_map`. Patchwire handles this for you.

## Sending Commands

#### `net_cmd_init(String CommandType)`

Initializes a command to be sent to the server. Returns a `ds_map` which you can add more data to.

#### `net_cmd_send([ds_map Command, Boolean PreventDestroy])`

Sends the given command to the server. If no arguments are provided, sends the most recently created command. `PreventDestroy` can be set to `true` to prevent Patchwire from cleaning up the command map after sending it.

## Built-in Commands

#### `connected`

This command is fired when a successful connection is made.

#### `disconnected`

This command is fired when the client is disconnected from the server.

#### `connectFailed`

This command is fired when the connection to the server times out.

## Globals

The following global variables are set by Patchwire-GM. These are **read-only**, setting them may break your game.

#### `global.patchwire_connectedStatus`

`true` when connected to the server, `false` otherwise.

#### `global.patchwire_netSock`

The underlying network socket that Patchwire is listening on.

#### `global.patchwire_netHandlerMap`

The ds_map that contains all the handlers for networking events.

## Internal functionality

> **NOTE**: These are for internal use, and should probably never be used otherwise

#### `net_handle_command()`

#### `net_cmd_parse()`
