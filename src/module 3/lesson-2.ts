// ТЕМА: МОДИФИКАТОРЫ ДОСТУПА

class Student {
    // сокращенная версия
    constructor(public readonly name: string) { }

    getDescription(): string {
        // this.name = '' // ошибка, из-за readonly нельзя перезаписать изначальное значение
        return `Студента зовут ${this.name}`;
    }
}

const student: Student = new Student('Alex');

console.log(student.name)
// student.name = ''; //ошибка из-за readonly нельзя перезаписать изначальное значение
console.log(student.getDescription())


