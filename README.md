---
home: true
tagline: "Foundational utilities for GameMaker: Studio"
actionText: Get Started
actionLink: /browse/
features:
- title: Lightweight
  details: "GM Core utilities come packaged as simple importable yymp files or scripts and create no overhead on your project."
- title: Documented
  details: "GM Core scripts all come with extenisve in-script documentation and auto-complete/code suggestion support."
- title: "Free & Open Source"
  details: "All GM Core code is completely free and licensed under the MIT License so you can use them without worry."

footer: MIT Licensed | Copyright 2020 Michael Barrett
---

## Functional Utilities with gdash

Use [gdash](/gdash/) to make your everyday scripting a little easier...

```gml
// Reverse the items in your inventory
var items = ["bag of holding", "ancient gem", "annoying dog"];
var reversed = _backward(items);
_log(reversed) // ["annoying dog", "ancient gem", "bag of holding"]

// Get all the nearby enemies
var enemies = _collect(obj_enemy);
var nearbyEnemies = _filter(enemies, is_near_player);

// Or just type a little less...
var playerData = _map_of(
  "health", 30,
  "mana", 20
);

_free(playerData);
```

## Custom Global Events with Event Horizon

Use [Event Horizon](/event-horizon/) to add an event pub/sub setup to your project...

```gml
event_fire("gunshot");

// Elsewhere...
event_add_listener("gunshot", function() {
  guard.alert();
});
```

## Simple Online Networking with Patchwire

Use [Patchwire](/patchwire/) to make a simple online game...

```gml
net_init();

net_cmd_add_handler("connected", function() {
  show_debug_message("Connected to server");
});

net_cmd_add_handler("newPlayer", function(data) {
  show_debug_message(data[? "name"] + " has joined!");
});

net_connect("127.0.0.1", 3000);
```

## Easy Timing with Delta

Use [Delta](/delta/) to easily scale everything to real time...

```gml
moveSpeed = 5;

// Scale my speed up or down depending on how much real time has passed.
speed = d(moveSpeed);
```

## Painless Particles with Particore

Use [Particore](/particore/) to improve the ergonomics of building particles in code...

```gml
partType = pt_new();
pt_color(c_red);
pt_speed(2, 5);
pt_sprite(spr_particle);
pt_direction(PT.Any);
pt_orientation(PT.Relative);
pt_life(60, 120);
```

## Test Your Code with GMTest

Use [GMTest](/gmtest/) to write tests for your code...

```gml
test_describe("hurt_player", function() {
  test_it("subtracts from the health of the player", function() {
    health = 100;
    hurt_player(10);
    assert_equal(health, 90);
  });
});
```
