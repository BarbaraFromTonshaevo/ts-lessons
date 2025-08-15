// ТЕМА: TYPE INFERENCE

let language = 'ru-RU';

// language = 123; 
// нельзя будет присвоить так как TS уже присвоил тип string переменной

let dates = ['2021-01-01', new Date()]
// TS сам присвоил массиву тип string или Date

dates.push('')
dates.push(new Date)
// dates.push(123) // будет ошибка


document.addEventListener('click', (e) => {}); // у e будет тип MouseEvent
document.addEventListener('drag', (e) => {}); // у e будет DragEvent
// TS сам может определять тип
