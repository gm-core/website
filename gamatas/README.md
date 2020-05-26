# GaMaTas - Testing automation for GameMaker: Studio

Gamatas is a collection of GML scripts to add automated testing to GameMaker.

## Installation

Download the latest [gamatas.zip from releases](https://github.com/gm-core/gamatas/releases) and import the scripts
into your project.

## GameMaker: Studio 2 Polyfills

If you are using GameMaker: Studio 2, you must have the `instance_create` script imported to your game as well from the `polyfills` folder of the [git repo](https://github.com/gm-core/gamatas). GameMaker: Studio 1.4 does not need this script, as it will cause an error. If you imported your project from GM:S 1.4, you may already have this script from the compatability scripts.

## Usage

### 1. Define the test suite

Create an object to house the tests for a suite. You can have as many test
suites as you want. Each suite is represented by an object.

In the `create` event of your object, use the `test_describe()` function to define
your test:

```GML
test_describe("Player takes damage");
```

### 2. Write some tests

Gamatas will run through tests in order based on your User Defined events. On
your test object, add a `User Defined 0` event. This is the first user defined
event, and therefore will be the first test to run.

Now, define a specific test with `test_it()`:

```GML
test_it("causes the health variable to be lower")
```
Next, write the actual test code. Write some code to ensure that
there is a player object in the game, then hurt it, then check that it has
lower health than before with an assertion:

```GML
instance_create(100, 100, obj_player);
var oldHP = obj_player.hp;
var damageAmount = 10;
hurt_player(damageAmount); // A script to cause damage to the player.

assert_equal(obj_player.hp, oldHP - damageAmount);

test_end();
```

`assert_equal(x, y)` ensures that `x` and `y` are equal. See the [API](#api) for all
documentation on assertions.

`test_end()` finishes the test and moves on to the next `User Defined` event.

When you have written the tests, your last User Defined event should contain:

```GML
test_describe_pass();
```

This will alert Gamatas that the entire test suite for that test object has
passed, and to either continue on to the next test suite, or end the game with
a status report of all your tests.

> **Note:** When a test suite passes, Gamatas moves to the next room to begin the next test.
> make a room for each test suite that you need, containing the test runner object for that suite.

