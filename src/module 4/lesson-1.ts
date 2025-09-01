// ТЕМА: ДЖЕНЕРИКИ В ФУНКЦИЯХ
type List = {
	[index: number]: any
}

const list: List = [1, 'string', true]

type Numbers = {
	[index: number]: number
}

const numbers: Numbers = [1, 2, 3]

type Numbers1 = number[]
type Numbers2 = Array<number>
type Numbers3 = ReadonlyArray<number>

// Правильный вариант работы с дженериками
type ListA<T> = {
	[index: number]: T
}

const numbersA: ListA<Number> = [1, 2, 3, 4]

// Название для дженерика может быть абсолютно любым
type ListHEHE<HEHE> = {
	[index: number]: HEHE
}

const numbersHEHE: ListHEHE<Number> = [1, 2, 3, 4]

// Пример где дженерик позволяет избежать ошибки

// function identity(argument){
//     return argument
// }

function identity<T>(argument: T): T {
	return argument
}

const number = identity(42)
// identity<number>(42)
// function identity<number>(argument: number): number{
//     return argument;
// }

const string = identity('string')
// identity<string>('string')
// function identity<string>(argument: string): string{
//     return argument;
// }

// string.toFixed(2)// без использования дженерика в функции ts не будет видеть ошибку

// Дженерик можно использовать внутри функции

function createList<T>(a: T): T[] {
	const items: T[] = [a, a, a]
	return items
}

createList(1)

// Можно передать несколько дженериков
function merge<T, U>(a: T, b: U): T & U {
	return { ...a, ...b }
}

const object = merge({ age: 26 }, { name: 'Barbara' })
