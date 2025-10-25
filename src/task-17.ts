//Задача 17

//Функція fetchUsers повертає проміс, який через fetch отримує
// список користувачів з API.
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await response.json()) as User[];
  return data;
};

fetchUsers().then((users) => console.log(users));
// Безпосередній запит у консолі браузера
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("Перший користувач:", users[0]);
    console.log("Всі властивості:", Object.keys(users[0]));
  });

//Завдання:

//Оголосіть інтерфейс User для користувача (перевірте,
// які властивості користувача містяться у відповіді бекенда).
//Типізуйте функцію fetchUsers.
