# Gamatas API

### Test Management

#### `test_describe(systemName)`

Initializes a test suite of the given system name, and begins running the first test (User Event 0)

```gml
/// @param {String} systemName
/*
 * example:
 */

test_describe("obj_player");
```

#### `test_it(behaviorDescription)`

Begins a test of the given behavior.

```gml
/// @param {String} behaviorDescription
/*
 * Example:
 */

test_it("dies when health is 0");
```

#### `test_end()`

Ends the current individual test, passing on to the next test or failing and quitting.

#### `test_fail()`

Forces the current test to fail. Mainly used by assert functions, but can be called directly if need be.

#### `test_describe_pass(optionalNextObject)`

Passes the current test suite, to be called on the final user defined event on the test object.

If you pass another test object to this function, it will create that object and destroy this one to continue tests.

Otherwise, if there is a room after the current one, it will move on to that room, otherwise, quits the game with an information dump in the console.

### Assert Types

All assertions can optionally take a custom error message as a third argument.

#### `assert(value, [, customMessage])`

Ensures that the given `value` is true (convenience for `assert_is_true`).

#### `assert_equal(value, expectedValue [, customMessage])`

Ensures that the given `value` is equal to `expectedValue`.

#### `assert_not_equal(value, unexpectedValue [, customMessage])`

Ensures that the given `value` is NOT equal to `unexpectedValue`.

#### `assert_exists(object [, customMessage])`

Ensures that an instance of `object` exists in the room.

#### `assert_does_not_exist(object [, customMessage])`

Ensures that an instance of `object` does not exist in the room.

#### `assert_is_true(value [, customMessage])`

Ensures the given `value` is `true`.

#### `assert_is_false(value [, customMessage])`

Ensures the given `value` is `false`.

#### `assert_is_undefined(value [, customMessage])`

Ensures the given `value` passes `is_undefined()`.

