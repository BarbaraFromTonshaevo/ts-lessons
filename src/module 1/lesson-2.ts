// ТЕМА: ОБЪЕДИНЕНИЕ ТИПОВ
let myString: string | null = null;

myString = 'TypeScript'


function parseDate(dateOrString: Date | string): Date {
    return new Date(dateOrString);
}

parseDate(new Date());
parseDate('2025-08-15');


// объединение типов и разъединение их
function toLowerCase(stringOrNumber: string | number): string {
    if(typeof stringOrNumber == 'string'){
        return stringOrNumber.toLowerCase();
    }
    if(typeof stringOrNumber == 'number'){
        return stringOrNumber.toString();
    }
    return ''
}

toLowerCase(123);
toLowerCase('123');
