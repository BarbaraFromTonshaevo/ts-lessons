// ТЕМА: ОБЪЕКТЫ И МАССИВЫ

let dogName: string = 'Bob';
let dogAge: number = 7;

// Объявление типа
type Dog = {
    name: string,
    age: number,
};

// Присвоение типа к переменной
let dog: Dog = {
    name: 'Bob',
    age: 7,
    // hehe: 'hehe' // здесь будет подсвечиваться ошибка, так как такой ключ не объявлен в типе
}

// Присвоение типа к массиву
// Вариант 1
let dogs: Dog[] = [
    {
        name: 'Bob',
        age: 7,
        // name2: '' // здесь будет подсвечиваться ошибка, так как такой ключ не объявлен в типе
    },
    {
        name: 'Alice',
        age: 10,
    }
]

dogs.push({
    name: 'Charly',
    age: 5,
})

// Вариант 2
let dogsArray: Array<Dog> = [
    {
        name: 'Bob',
        age: 7,
    },
    {
        name: 'Alice',
        age: 10,
    }
]

dogsArray.push({
    name: 'Charly',
    age: 5,
})

// Тип декларации массива: только для чтения
let dogsReadonlyArray: ReadonlyArray<Dog> = [
    {
        name: 'Bob',
        age: 7,
    },
    {
        name: 'Alice',
        age: 10,
    }
]

// Выведет ошибку так как ReadonlyArray можно использовать только для получения данных, но не записи
// dogsReadonlyArray.push({
//     name: 'Charly',
//     age: 5,
// })

// Как добавить в новый массив элементы из массива Readonly

// let dogsReadonlyArray2: Dog[] = [ ...dogsReadonlyArray, {
//     name: 'Charly',
//     age: 5,
// }]

// вариант лучше
let newDog: Dog = {
    name: 'Charly',
    age: 5,
}
let dogsReadonlyArray2: ReadonlyArray<Dog> = [...dogsReadonlyArray, newDog];

// декларация массивов для примитивных типов

let uids: number[] = [1, 2, 3]
// let uids: number[] = [1, 2, 3, null] // будет жаловаться на null
