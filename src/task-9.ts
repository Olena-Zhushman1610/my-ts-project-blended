//Задача 9

//Завдання:

//1. Створіть інтерфейс Container, що містить:
interface Container<T> {
  items: T[];
  addItem: (item: T) => void; //метод додавання елемента
  getItem: (index: number) => T; // метод отримання елемента за індексом
}

//масив items однакового типу для зберігання елементів.
//метод addItem, який додає елемент до контейнера.
//метод getItem, який повертає елемент за індексом.
//2. Створіть два контейнери:
//numberContainer, який містить числа та використовує відповідну типізацію.

const numberContainer: Container<number> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
//stringContainer, який містить рядки та також використовує відповідну типізацію.

const stringContainer: Container<string> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
//3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
numberContainer.addItem(10);
numberContainer.addItem(20);
numberContainer.addItem(30);

stringContainer.addItem("Apple");
stringContainer.addItem("Banana");
stringContainer.addItem("Cherry");

console.log("Number container item [1]:", numberContainer.getItem(1)); // 20
console.log("String container item [2]:", stringContainer.getItem(2)); // Cherry
//4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.
function getLastElement<T>(container: Container<T>): T {
  return container.items[container.items.length - 1];
}
//5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
console.log("Last number:", getLastElement(numberContainer));
console.log("Last string:", getLastElement(stringContainer));

//Примітка:

//Контейнер має підтримувати тільки один тип елементів.
