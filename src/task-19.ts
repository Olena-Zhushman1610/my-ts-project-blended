//Задача 19

//Функція fetchUser повертає проміс, який через axios отримує
// одного користувача з API по userId.

import axios from "axios";
interface SimpleUser {
  id: number;
  name: string;
}
const fetchUser = async (userId: number): Promise<SimpleUser> => {
  const response = await axios.get<SimpleUser>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id: number) => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(2);

//Завдання:

//Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
//Типізуйте функцію fetchUser.
