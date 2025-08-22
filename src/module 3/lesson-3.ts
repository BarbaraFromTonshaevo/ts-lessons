// ТЕМА: СТАТИЧЕСКИЕ МЕТОДЫ И СВОЙСТВА

class TimeSpan{
    constructor(public readonly ticks: number) {}
}

const ticksPerSeconds: number = 1000;
function fromSeconds(seconds: number): TimeSpan {
    return new TimeSpan(seconds * ticksPerSeconds);
};

const ticksPerMinutes: number = 1000 * 60;
function fromMinutes(minutes: number): TimeSpan {
    return new TimeSpan(minutes * ticksPerMinutes);
};

const ticksPerHours: number = 1000 * 60 * 60;
function fromHours(hours: number): TimeSpan {
    return new TimeSpan(hours * ticksPerHours);
};

const ticksPerDays: number = 1000 * 60 * 60 * 24;
function fromDays(days: number): TimeSpan {
    return new TimeSpan(days * ticksPerDays);
};


const fiveSeconds:  TimeSpan = fromSeconds(5)
// удобнее было бы все эти константы функций занести в класс и использовать примерно следующим образом
// const fiveSeconds:  TimeSpan = TimeSpan.fromSeconds(5)


// Чтобы это реализовать мы можем воспользоваться статистическими методами класса в TypeScript
class TimeSpan2{
    constructor(public readonly ticks: number) {}

    static ticksPerSeconds: number = 1000;
    static ticksPerMinutes: number = 1000 * 60;
    static ticksPerHours: number = 1000 * 60 * 60;
    static ticksPerDays: number = 1000 * 60 * 60 * 24;

    static fromSeconds(seconds: number): TimeSpan {
        return new TimeSpan(seconds * TimeSpan2.ticksPerSeconds);
    };

    static fromMinutes(minutes: number): TimeSpan {
        return new TimeSpan(minutes * TimeSpan2.ticksPerMinutes);
    };

    static fromHours(hours: number): TimeSpan {
        return new TimeSpan(hours * TimeSpan2.ticksPerHours);
    };

    static fromDays(days: number): TimeSpan {
        return new TimeSpan(days * TimeSpan2.ticksPerDays);
    };
}

const oneSeconds:  TimeSpan = TimeSpan2.fromSeconds(1)
