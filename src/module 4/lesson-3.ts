// ТЕМА: Дженерики в интерфейсах и классах, их свойствах и их методах

// будет принимать только те дженерики у которых есть id с типом number
abstract class Repository<T extends { id: number }> {
	protected entities: Record<number, T> = {}

	public add(entity: T): void {
		this.entities[entity.id] = entity
	}

	public get(id: number): T | null {
		return this.entities[id] ?? null
	}

	public delete(id: number): void {
		delete this.entities[id]
	}
}

type User = {
	name: string
	id: number
}

class UsersRepository extends Repository<User> {}

const usersRepository = new UsersRepository()

usersRepository.add({ id: 1, name: 'Alex' })
usersRepository.add({ id: 2, name: 'Alexa' })

console.log(usersRepository.get(1))
console.log(usersRepository.get(2))

type Message = {
	text: string
	id: number
}

class MessagesRepository extends Repository<Message> {}

const messagesRepository = new MessagesRepository()

messagesRepository.add({ id: 1, text: 'Hello' })
messagesRepository.add({ id: 2, text: 'Hehe' })

console.log(messagesRepository.get(1))
console.log(messagesRepository.get(2))
