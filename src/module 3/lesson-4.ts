// ТЕМА: НАСЛЕДОВАНИЕ
class Person {
    public publicField: unknown;
    private privateField: unknown;
    protected protectedField: unknown;

    constructor(public readonly name: string) {
        this.publicField
        this.privateField
        this.protectedField
    }

    static isPerson(object: unknown): object is Person {
        return object instanceof Person;
    }

    description(): string {
        return `Меня зовут ${this.name}`
    }
}
    
class Student extends Person {
    constructor(name: string, public readonly program: string) {
        super(name); // обязательно указать в конструкторе переменные которые относятся к родительскому классу
        // this.publicField // имеем доступ
        // this.privateField // ошибка не имеем доступ
        // this.protectedField; // имеем доступ
    }

    static isStudent(object: unknown): object is Student {
        return object instanceof Student
    }

    // переопределение функции родителя
    override description(): string {
        const description = super.description()
        return `${description} и я учусь на курсе ${this.program}`;
    }
}

const person: Person = new Person('Alex');
// const person2: Student = new Person('Alex'); // будет ошибка так как person может быть не Student


const student: Student = new Student('Alexa', 'TypeScript');
// const student2: Person = new Student('Alexa', 'TypeScript'); // ошибки не будет так как Student всегда будет еще и Person

console.log(person.description())
console.log(student.description())

student.publicField // имеем доступ 
// student.privateField // ошибка не имеем доступ
// student.protectedField // ошибка не имеем доступ
