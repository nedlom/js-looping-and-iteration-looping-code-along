// Code your solutions in this file

function writeCards(names, eventName) {
  const customMessages = [];
  for (let i = 0; i < names.length; i++) {
    customMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return customMessages;
}

function countDown(positiveInt) {
  while(positiveInt >= 0) {
    console.log(positiveInt)
    positiveInt--
  };

}
