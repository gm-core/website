# GMTest API

## Test Management

### `test_describe(suiteName, suiteMethod)`

Wraps a suite of tests

```gml
@param {string} testName         The name of the test suite
@param {method} testSuiteMethod  A method containing the individual tests

test_describe("hurt_player", function() {
  // ...
});
```

### `test_it(description, testMethod)`

Defines an individual test.

```gml
@param {string} description  The description of the functionality being tested
@param {method} testMethod   A method containing the test

test_it("subtracts from the health variable", function() {
  // ...
});
```

### `test_before(beforeMethod)`

Defines a setup function for a suite of tests. This function is run once before the any tests in the test suite runs.

```gml
@param {method} setupMethod  A method containing the setup for a test suite

test_before(function() {
  health = 100;
});
```

### `test_before_each(beforeEachMethod)`

Defines a setup function for each test in a suite. This function is before each test defined in a suite.

```gml
@param {method} setupMethod  A method containing the setup for eachtest in a suite.

test_beforeEach(function() {
  health = 100;
});
```

### `test_after(afterMethod)`

Defines a cleanup function for a suite of tests. This function is run once after all tests in the suite have finished.

```gml
@param {method} cleanupMethod  A method containing the cleanup for a test suite

test_after(function() {
  score = 0;
});
```

### `test_after_each(afterMethod)`

Defines a cleanup function for each test in a suite of tests.

```gml
@param {method} cleanupMethod  A method containing the cleanup for a test suite

test_after_each(function() {
  score = 0;
});
```

### `test_run_all(optionalAutoEnd)`

Runs every test that has been defined within a `test_describe` before calling.

```gml
@param autoEnd {boolean}  If GM Test should close the game upon completion of the tests. Defaults to false.

test_run_all(true);
```

## Asserts

All assertions can optionally take a custom error message as a third argument.

### `assert(value, [, customMessage])`

Ensures that the given `value` is true (convenience for `assert_is_true`).

### `assert_equal(value, expectedValue [, customMessage])`

Ensures that the given `value` is equal to `expectedValue`.

### `assert_not_equal(value, unexpectedValue [, customMessage])`

Ensures that the given `value` is NOT equal to `unexpectedValue`.

### `assert_exists(object [, customMessage])`

Ensures that an instance of `object` exists in the room.

### `assert_does_not_exist(object [, customMessage])`

Ensures that an instance of `object` does not exist in the room.

### `assert_is_true(value [, customMessage])`

Ensures the given `value` is `true`.

### `assert_is_false(value [, customMessage])`

Ensures the given `value` is `false`.

### `assert_is_undefined(value [, customMessage])`

Ensures the given `value` passes `is_undefined()`.

### `assert_throws(function [, expectedErrorMessage])`

Ensures the given function throws an error message. Optionally specify `expectedErrorMessage` to validate the error message.

```gml
assert_throws(function() {
  throw "test";
}, "test");
```

