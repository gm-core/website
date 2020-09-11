# GMTest

GMTest is a testing automation suite for GameMaker: Studio 2.3 and above.

## Download and Install

Download the [latest release](https://github.com/gm-core/GMTest/releases/download/v5.0.0/gmtest-5-0-0.yymp) and import into GameMaker Studio.

Browse older releases and source downloads on the [releases page](https://github.com/gm-core/gmtest/releases)

For instructions on importing yymp files, see [Installing .yymp Packages](/installing.html)

## Usage

### 1. Define some tests

In a script function or in an object create script, define a test suite using `test_describe`. This function will contain all of the tests related to a single subject. Let's write tests for a function called `hurt_player` which takes an amount of damage to apply to the player. Begin by defining the test suite. In this case, we'll write our test in a script resource called `test_hurt_player`.

```GML
function test_hurt_player() {
  test_describe('hurt_player', function() {
    // Tests will go here!
  });
}
```


### 2. Write some tests

Now we can write the actual tests. We will describe the behavior of our `hurt_player` function using the `test_it` function. The first parameter we provide is a string describing the expected behavior. It can be written like a statement - `test_it("subtracts health from the player"...`. Read it aloud! "It subtracts health from the player".

The second parameter of `test_it` is a function to be run to test this behavior. We will call the `hurt_player` function and test that the `health` variable has been altered as we expect, using one of the `assert` methods provided by GM Test. We will get into "asserts" later, but for now, just know that `assert_equal` tests that two values are equal.

So, our full script now looks like this:


```GML
function test_hurt_player() {
  test_describe('hurt_player', function() {
    
    test_it("subtracts health from the player", function() {
      health = 100;
      hurt_player(10);
      assert_equal(health, 90);
    });

  });
}
```

Lookin' good. You can have as many `test_it` calls as you want inside of a `test_describe`, and you can have as many `test_describe` calls as you want as well. In general, you should use a new `test_describe` for each new component you want to test, and a `test_it` for each behavior of the component you are testing.

### 3. Run your tests

We've got the test written but now we need to run it. Create an empty room, or a new Object, and in the creation code for either the room or the object, we will write just a few lines of code to run our tests. Reminder: if you are doing this in an object, be sure to place the object in the first room in your game so the code runs!

We just need to call the function that contains our test code to set up the test, then run the tests with `test_run_all()`.

```
// Register our test
test_hurt_player();

// Run the tests!
test_run_all();
```

Now, run your project. In the debug console output, you will see the results of your test:

```
hurt_player
|- It subtracts health from the player

[1/1] Test exeuction end

-----------
All tests passing!
```

You can browse the [API docs](/gmtest/api.html) or [more examples](/gmtest/examples.html) for more info.
