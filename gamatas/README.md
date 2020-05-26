# Gamatas

Gamatas is a collection of GML scripts to add automated testing to GameMaker.

## Download and Install

Download the [latest release](https://github.com/gm-core/gamatas/releases/download/v4.1.0/gamatas-4-1-0.yymp) and import into GameMaker Studio.

Browse older releases and source downloads on the [releases page](https://github.com/gm-core/gamatas/releases)

For instructions on importing yymp files, see [Installing .yymp Packages](/installing.html)

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

Gamatas will run through tests in order based on your User Events. On
your test object, add a `User Event 0` event. This is the first user defined
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

`assert_equal(x, y)` ensures that `x` and `y` are equal. See the [API](/gamatas/api.html) for all
documentation on assertions.

`test_end()` finishes the test and moves on to the next `User Event` event.

When you have written the tests, your last User Event should contain:

```GML
test_describe_pass();
```

This will alert Gamatas that the entire test suite for that test object has
passed, and to either continue on to the next test suite, or end the game with
a status report of all your tests.

> **Note:** When a test suite passes, Gamatas moves to the next room to begin the next test.
> make a room for each test suite that you need, containing the test runner object for that suite.

