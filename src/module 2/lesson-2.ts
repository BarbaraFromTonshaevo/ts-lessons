// ТЕМА: Тайпгарды
const element = document.getElementById('input');

if(element instanceof HTMLInputElement){
    element.value
}

if(isHTMLInputElement(element)){
    element.value
}

// правильный вариант проверки на тип
function isHTMLInputElement(element: HTMLElement | null): element is HTMLInputElement {
    return element instanceof HTMLInputElement
}


// Прверка у примитивных типов
function format(value: number | string): string {
    let amount: number = 0;

    // if(typeof value === 'string'){
    //     amount = parseFloat(value);
    // }

    // if(typeof value === 'number'){
    //     amount = value;
    // }


    if(isString(value)){
        amount = parseFloat(value);
    }

    if(isNumber(value)){
        amount = value;
    }

    return amount.toFixed(2)
}

function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

function isString(value: unknown): value is string {
    return typeof value === 'string';
}

// Более сложные ситуации с тайпгайдами

type Person = { kind: 'person', name: string };
type Animal = { kind: 'animal', color: string };

function handle(value: Person | Animal): void {
    value.kind

    if(value.kind === 'animal'){
        value.color; // ? 
    }

    if(value.kind === 'person'){
        value.name; // ? 
    }

}

handle({kind: 'animal', color: 'green'});
handle({kind: 'person', name: 'Alex'});
