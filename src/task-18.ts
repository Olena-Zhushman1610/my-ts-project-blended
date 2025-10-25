//Задача 18

//Функція fetchUsers повертає проміс, який через axios отримує
// список користувачів з API.

import axios from "axios";
// Інтерфейс для геолокації
interface Geo {
  lat: string;
  lng: string;
}

// Інтерфейс для адреси
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// Інтерфейс для компанії
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Основний інтерфейс для користувача
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();

//Завдання:

//Оголосіть інтерфейс User для користувача (перевірте,
// які властивості користувача містяться у відповіді бекенда).
//Типізуйте функцію fetchUsers.
