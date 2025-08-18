// ТЕМА КОРТЕЖИ
// function volume([weight, height, depth]: number[]): number {
//     return weight * height * depth;
// }

// volume([1, 2, 3]) // 6
// volume([1, 2]) // NaN
// volume([1, 2, 3, 4]) // 6

function volume2([weight, height, depth]: [number, number, number ]): number {
    return weight * height * depth;
}

volume2([1, 2, 3]) // 6
// volume2([1, 2]) // NaN сразу видит ошибку
// volume2([1, 2, 3, 4]) // 6 сразу видит ошибку
// volume2([1, 2, '3']) // NaN сразу видит ошибку


type Person = [string, number];

const person: Person = ['Alex', 1999];
person[0] // Alex
person[1] // 1999
// person[2] // выдаст ошибку

// опциональные параметры
type Person2 = [string, number, boolean?];
const person1: Person2 = ['Alex', 1999];
const person2: Person2 = ['Alex', 1999, true];
// оба варианты верные