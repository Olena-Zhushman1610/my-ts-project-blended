//Задача 12

//Є функція sendDoneStatus:

function sendDoneStatus(callback: (status: string) => void): void {
  callback("done");
}
sendDoneStatus((message) => {
  console.log(`Status: ${message}`);
});

//Завдання:

//Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
