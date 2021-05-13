function concat(a: string, b: string): string {
  return a + b;
}

const result1: string = concat('Porsche ', 'Cayenne');

console.log(result1);

interface MyHomeTaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData?: MyHomeTaskInterface[];
}

const myHomeTask: MyHomeTaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

console.log(myHomeTask);

interface MyArray<T> {
  [n: number]: T;
  reduce<U>(fn: (acc: U, curr: T, index?: number, arr?: T[]) => U, initialValue: U): U;
}

const newArr: MyArray<number> = [1, 2, 3, 4, 5];

const res = newArr.reduce((acc, curr) => acc.toString() + curr, '');

console.log(res);
