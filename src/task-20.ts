//Задача 20

//Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.

import axios from "axios";

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
fetchPosts();
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function logThreePosts(posts: Post[]): void {
  console.log(`ghjnx`);
  posts.slice(0, 3).forEach((post) => {
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
    console.log("  --  ");
  });
}

//Виклик — отримуємо пости і передаємо у logThreePosts
fetchPosts().then((posts) => logThreePosts(posts));
//Завдання:

//Оголосіть інтерфейс Post для поста (перевірте, які властивості
// користувача містяться у відповіді бекенда).
//Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс,
// який містить масив об'єктів типу Post.
//Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів,
//
// виводячи їхні title та body.
