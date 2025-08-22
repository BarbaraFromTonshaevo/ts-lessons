// ТЕМА: КЛАССЫ 

class Student {

    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if(value < 0) {
            throw new Error("Out of range: age must be greater than zero");
        }
        this._age = value;
    }

    get description(): string {
        return `Студент ${this.name} учиться на курсе ${this.program}`;
    }

    name: string;
    program: string;

    constructor(name: string, program: string) {
        this.name = name;
        this.program = program;
    }

    // getDescription(): string {
    //     return `Студент ${this.name} учиться на курсе ${this.program}`;
    // }
}

const student: Student = new Student('Alex', 'TypeScript');

console.log(student.name)
console.log(student.program)
student.age = 100
console.log(student.age)
// console.log(student.getDescription())
console.log(student.description)



