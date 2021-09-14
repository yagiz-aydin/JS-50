const objWithIterator = {
  [Symbol.iterator]() {
    return {
      next: function () {
        console.log("do next");
        return { done: false, value: "foo" };
      },
      return: function () {
        console.log("do return");
        return { done: true, value: "foo" };
      },
      throw: function () {
        console.log("do throw");
        throw new Error("foo");
      },
    };
  },
};

objWithIterator[Symbol.iterator]().next();
objWithIterator[Symbol.iterator]().return();
objWithIterator[Symbol.iterator]().throw();
// do next
// {done: false, value: "foo"}

