// ТЕМА: ПРИВЕДЕНИЕ ТИПОВ AS
const input = document.getElementById('input') as HTMLInputElement;
input.value
const input2 = <HTMLInputElement>document.getElementById('input')
input2.value


function format(value: number | string): string {
    // для того чтобы убрать ошибку, "приводим" переменную в в число
    // ошибка пропала, но тем самым код получился небезопасным
    // потому что не каждую строку можно привести к числу
    return (value as number).toFixed(2);
}

function format2(value: object): string {
    // но данная запись будет недействующая с object
    // return (value as number).toFixed(2);
    return (value as unknown as number).toFixed(2);

}

// Итог лучше избегать приведение типов с помощью as так как его использование делает код небезопасным 