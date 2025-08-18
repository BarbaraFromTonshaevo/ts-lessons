// ТЕМА: ЛИТЕРАЛЬНЫЕ ТИПЫ И UNION

function translate(language: string, text: string): string {
    return text;
}

translate('ru-RU', '')
translate('en-US', '')
translate('ch-ZN', '') //хотим чтобы функция могла работать только с ru-RU и en-US




// для этого можно написать функцию следующим образом

function translateA(language: 'ru-RU' | 'en-US', text: string): string {
    return text;
}

translateA('ru-RU', '')
translateA('en-US', '')
// translateA('ch-ZN', '') // будет выводиться ошибка




// Литеральный тип

let language: 'ru-RU' | 'en-US';

// language = 'ch-ZN'; // тоже будет ошибка, так как к литеральным типам нельзя добавить элемент не из литерального типа

language = 'ru-RU' // ошибки не будет




// Более удобный вариант с использованием литерального типа

type Language = 'ru-RU' | 'en-US';

function translateB(language: Language, text: string): string {
    return text;
}

translateB('ru-RU', '')
translateB('en-US', '')
// translateB('ch-ZN', '') // будет выводиться ошибка



// Литеральный тип для чисел
type Direction = -1 | 0 | 1;


// Литеральный тип для Boolean 
function reload(force?: true) {}

reload()
reload(true)
// reload(false) // будет ошибка