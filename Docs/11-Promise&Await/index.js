// Example 1 
// ! Carefull to use, Callstack can't handle whick scope is refered after finishing the await function !

async function nameCallIt(name, surname){
    return setTimeout(() =>  console.log(`My name is ${name} ${surname}`), 2000)
}

const yagizAydin = await nameCallIt("Yağız", "Aydın");

// Example 2
// Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value.

async function optionalHandler() {
  const result = Promise.resolve(3000)
  return console.log(result)
}

optionalHandler();

// Example 3
// Promise rejection is rejected, the rejected value is thrown.

async function handleIt(handle) {
  try {
    switch(handle){
      case true: 
        await Promise.resolve(300);
        return console.log("I can Handle");
      case false: 
      case undefined:
      default:
        await Promise.reject(30);
    }
  } catch(e) {
    console.log("I cant Handle");
  }
}

const iCanHandle = await handleIt(true);
// I can Handle

const iCantHandle = await handleIt(false);
// I cant Handle