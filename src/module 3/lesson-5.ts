// ТЕМА: ИНТЕРФЕЙСЫ
// интерфейсы используют когда нужно реализовать конкретное поведение или маркер
interface Hashable {
    readonly key: number;
}

interface Woofable {
    woof(): void;
}

class Fox implements Hashable {
    constructor(public readonly key: number) {}
}

class Dog implements Hashable, Woofable {
    constructor(public readonly key: number) {}
    woof(): void{
        console.log('woof')
    }
}

declare function unique(items: ReadonlyArray<Hashable>): ReadonlyArray<Hashable>;

declare const foxes: ReadonlyArray<Fox>;

unique(foxes);

declare const dogs: ReadonlyArray<Dog>;

unique(dogs);


declare function woof(items: ReadonlyArray<Woofable>): void;

// woof(foxes) // ошибка

woof(dogs)