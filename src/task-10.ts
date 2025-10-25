//Задача 10

//У вас є масив імен користувачів:

const users = ["alice", "bob", "charlie"];

//Завдання:

//1. Створіть типізовану функцію toUserObjects, яка приймає
// масив рядків (імен користувачів).
//Описуємо інтерфейс для об’єкта користувача
interface User {
  id: number;
  name: string;
}

//2. Усередині функції переберіть масив імен та для
// кожного імені створи об єкт з такими властивостями:

//id — порядковий номер (починаючи з 1),
//name — саме ім я користувача (рядок з масиву).
//3. Функція повинна повертати масив отриманих об єктів.
//Створюємо функцію, що приймає масив рядків і повертає масив User[]
function toUserObjects(userNames: string[]): User[] {
  return userNames.map((name, index) => ({
    id: index + 1,
    name: name,
  }));
}
//4. Переконайтеся, що результат функції має правильну типізацію, а
// TypeScript не видає помилок.
const userObjects = toUserObjects(users);
console.log(userObjects);
//Приклад виклику:

toUserObjects(users);
// Повертає: [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]
