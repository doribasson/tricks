function foo(a) {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

function runOnce(fn) {
  var didRun = false;

  return function(...args) {
    if (!didRun) {
      didRun = true;
      fn(args);
    }
  };
}

const fooOnce = runOnce(foo);

fooOnce(); // foo
fooOnce();
fooOnce();
fooOnce();
