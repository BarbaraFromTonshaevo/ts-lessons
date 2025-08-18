// ТЕМА: Контракты
type Person = {
    name: string,
    salary: number
}

function createPerson(name: string, salary: number): Person {
    return {name} as Person
}

const person = createPerson('Alex', 15000)

person.salary.toLocaleString('en-US', {
    style: 'currency', currency: 'usd'
})
// должна быть ошибка так как функция не возвращает цену, она выведет либо undefined либо null

// Как правильно задавать 
type HttpResponsePending = {
    status: 'pending'
}
type HttpResponseSuccessful = {
    status: 'successful',
    data: string[]
}
type HttpResponseFailed = {
    status: 'failed',
    error: string
}
type HttpResponseCancelled = {
    status: 'cancelled',
    reason: string
}

type HttpResponse = HttpResponsePending | HttpResponseSuccessful | HttpResponseFailed | HttpResponseCancelled;

function handleResponse(response: HttpResponse): void {
    if(response.status === 'pending'){
        // response.data // будет сразу показываться ошибка ts понимает что свойства data у HttpResponsePending нет
    }
}