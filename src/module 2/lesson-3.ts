// ТЕМА: ПЕРЕЧИСЛЕНИЯ ENUM
declare function translate(locale: 'ru-RU' | 'en-US', text: string): string

translate('ru-RU', 'some text')
translate('en-US', 'some text')

// не самый удобный вариант при большом количестве литералов 

const LOCALE = {
    RU: 'ru-RU',
    EN: 'en-US'
} as const;

type Locale = typeof LOCALE[keyof typeof LOCALE]
declare function translate2(locale: Locale, text: string): string

translate2(LOCALE.RU, 'some text')
translate2(LOCALE.EN, 'some text')

// с использованием enum

enum LocaleEnum{
    RU = 'ru-RU',
    EN = 'en-US'
}

declare function translate3(locale: LocaleEnum, text: string): string

translate3(LocaleEnum.RU, 'some text')
translate3(LocaleEnum.EN, 'some text')

const ru: LocaleEnum = LocaleEnum.EN

// ENUM в режиме реального времени
enum MOVE_DIRECTION{
    North,
    South,
    West,
    East
}

// этот объект превращается в объект
const move = {
    '0': 'North',
    '1': 'South',
    '2': 'West',
    '3': 'East',
    'North': 0,
    'South': 1,
    'West': 2,
    'East': 3
}

// поэтому можно обратиться по значениям к enum следующим образом
MOVE_DIRECTION.East; // 3
MOVE_DIRECTION[3]; // East

// но если для первого элемента проставить значение другое, то отсчет для других будет идти отсчитывая от этого значения
enum MOVE_DIRECTION2{
    North = 2,
    South,
    West,
    East
}
MOVE_DIRECTION2.East; // 5
MOVE_DIRECTION2[5]; // East

enum MOVE_DIRECTION3{
    North = 7,
    South = 0,
    West,
    East
}
MOVE_DIRECTION3.North; // 7
MOVE_DIRECTION3.South // 0
MOVE_DIRECTION3.West // 1
MOVE_DIRECTION3.East // 2

// Итог лучше самим проставлять значения
enum MOVE_DIRECTION4{
    North = 'North',
    South = 'South',
    West = 'West',
    East = 'East'
}