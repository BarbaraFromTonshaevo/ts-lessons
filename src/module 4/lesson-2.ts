// ТЕМА: ДЖЕНЕРИК В ТИПЕ

type HttpResponseSuccess<T> = {
	success: true
	data: T
}

type HttpResponseFail = {
	success: false
	error: string
}

type HttpResponse<T> = HttpResponseSuccess<T> | HttpResponseFail

type User = {
	id: number
	name: string
}

type UserHttpResponse = HttpResponse<User>

type Message = {
	id: number
	text: string
}

type MessageHttpResponse = HttpResponse<Message>

declare const response: UserHttpResponse

// response.error; // будет ошибка так как тип может и не содержать данного свойства
// response.data; // будет ошибка так как тип может и не содержать данного свойства

// ошибок не будет
if (response.success) {
	response.data
} else {
	response.error
}
