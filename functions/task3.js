function genericFunction(func) {
  try {
    func();
  } catch (err) {
    console.log(err.message)
  }
}

function sayHello() {
  console.log("hello");
}

function addOne() {
  const a = 2;
  a++;
  console.log(a);
}

genericFunction(sayHello);
genericFunction(addOne);
genericFunction(5);