# GMTest Examples

## Before and After hooks

You can use the `test_before()`, `test_before_each()`, `test_after()` and `test_after_each()` functions to define code for GMTest to run for setup and teardown. Consider the example of `hurt_player`. We'd want to reset the `health` variable before each test. That way, we don't need to do `health = 100` in every test, and we can standardize things a bit.

```gml
function test_hurt_player() {
  test_describe("hurt_player", function() {

    test_before_each(function() {
      health = 100;
    });

    test_it("subtracts from the health variable", function() {
      hurt_player(10);
      assert_equal(health, 90);
    });

    test_it("does not add to health when negative damage is dealt", function() {
      hurt_player(-10);
      assert_equal(health, 100);
    });

  });
}

test_hurt_player();
test_run_all();
```

If you only need to run setup once for the whole test suite, you can just use `test_before()`. Same for if you need to only run teardown once for the whole test suite.

Consider a test suite that tests functionality of an object, `obj_player`. We can use `test_before()` and `test_after()` to create and destroy the object for our suite.

```gml
function test_obj_player() {
  test_describe("obj_player") {

    test_before(function() {
      instance_create_depth(0, 0, 0, obj_player);
    });

    test_after(function() {
      instance_destroy(obj_player);
    });

    test_it("starts with max health", function() {
      assert_equal(obj_player.hp, 100);
    });

  }
}

test_obj_player();
test_run_all();
```

## Multiple test suites

Our examples so far all only deal with testing one thing at a time, but `test_run_all()` will run every test that has been registered with `test_describe()`.

Let's say that you've written three test scripts: `test_obj_player`, `test_hurt_player` and `test_hurt_enemy`. You can run all of these like so:

```gml
test_obj_player();
test_hurt_player();
test_hurt_enemy();
test_run_all();
```

## Advanced assertions

Assert statements inside of a test will pass when conditions are met, but fail the test when they are not. So far we've only used `assert_equal` in examples. Let's take a look at some more advanced assertions and how they can be used in your tests.

### `assert_exists()`

This assertion is great for checking if an object has been created.

```gml
test_describe("obj_gun", function() {
  test_it("shoots a bullet", function() {
    var gun = instance_create(0, 0, 0, obj_gun);
    gun.fire();

    assert_exists(obj_bullet);
  });
});
```

### `assert_throws()`

This assertion can be used to make sure that things error the right way. Maybe you have a function that cannot handle a specific situation, and you want to make sure its throwing in that situation.

Note well that this assertion takes a _function_ of its own, and runs that function. Do not directly call a function here, but pass the function in.

You can also pass a string which you expect to be the thrown error, so that you can be sure the error being thrown is the one you expect.

Consider a test for `hurt_player`, where we expect `hurt_player` to throw an error when it is passed a negative damage amount:

```gml
test_describe("hurt_player", function() {
  test_it("errors when trying to hurt for a negative amount", function() {

    assert_throws(function() {
      hurt_player(-10);
    }, "Cannot hurt for negative health");

  });
});
```

