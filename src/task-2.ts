//Задача 2

//Опис: Є функція, яка приймає суму (число) та тип валюти.

function convertCurrency({
  amount,
  currency,
}: {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({ amount: 100, currency: "USD" });
//Завдання:

//Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
//Типізуйте повернення функції.

//  2 вазіант

interface CurreencyData {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}
function convertCurrencyy({ amount, currency }: CurreencyData): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrencyy({ amount: 1000, currency: "EUR" });
