// ТЕМА: АБСТРАКТНЫЕ КЛАССЫ
abstract class Figure {
    abstract getArea(): number;

    static isFigure(object: unknown): object is Figure {
        return object instanceof Figure;
    }
}

// new Figure(); // абстрактный класс не может иметь инстанс

class Rectangle extends Figure {
    constructor(
        public readonly width: number,
        public readonly height: number
    ) {
        super();
    }

    getArea(): number {
        return this.width * this.height
    }
}
class Square extends Figure {
    constructor(
        public readonly size: number,
    ) {
        super();
    }

    getArea(): number {
        return this.size * this.size
    }
}

const items: ReadonlyArray<unknown> = [
    new Square(5),
    new Square(10),
    new Rectangle(5, 10)
]

for(const item of items) {
    if(Figure.isFigure(item)){
        console.log(item.getArea());
    }
}