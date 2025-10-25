//Задача 11

//1. Створіть власний тип User, який має:

//обов'язкове поле username (рядок)
//обов'язкове поле age (число)
//опціональне поле city (рядок)

type User = {
  username: string;
  age: number;
  city?: string;
};

//2. Створіть літеральний тип Role, який може мати значення "admin", "user", "guest".
type Role = "admin" | "user" | "guest";
//3. Оголосіть функцію createUserCard, вона має приймати:
function createUserCard({ username, age, city }: User, role: Role): string {
  const userCity = city ?? "Unknown";
  return `${username} (${age}) — ${role} from ${userCity}`;
}
//перший параметр — об'єкт типу <User>
//другий параметр — роль користувача типу Role
//4. Функція повертає рядок у форматі "[username] ([age]) — [role] from [city]”.

//Hаприклад:

console.log(
  createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin")
);
// Anna (25) — admin from Kyiv

console.log(createUserCard({ username: "Max", age: 30 }, "guest"));
// Max (30) — guest from Unknown

//5. Якщо city немає — виводьте "Unknown"
