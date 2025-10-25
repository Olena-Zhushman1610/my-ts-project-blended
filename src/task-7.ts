//Задача 7
interface User {
  name: string;
  age: number;
}
const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

users.push({ name: "Charlie", age: 28 });

// users.push({ name: "Dave" }); // Помилка — відсутнє поле "age"
// users.push({ age: 40 }); // Помилка — відсутнє поле "name"

console.log(users);

//Завдання:

//Створіть інтерфейс User, який описує структуру об’єкта з іменем і віком.
//Типізуйте змінну users.
//Додайте ще одного користувача до масиву, дотримуючись структури.
//Переконайтеся, що TypeScript не дозволяє додати об’єкт без обов’язкових полів (name, age).
