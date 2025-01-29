import { argv } from 'node:process'
import fs from 'node:fs/promises'

class Todo {
	constructor(args, todos) {
		this.args = args
		this.todos = todos
	}
	displayTodo() {
		this.todos.forEach((todo, index) => {
			console.log(`${!todo.done ? '[ ]' : '[\u{2713}]'}: ${index} ${todo.todo}`);
		});
	}
	updateTodo(index, status) {
		this.todos[index].done = status
		this.displayTodo()
	};

	init() {
		switch (this.args.length) {
			case 1:
				this.displayTodo();
				break;
			case 3:
				const argument = this.args[1]
				if (argument !== 'done' && argument !== 'ongoing') return
				this.updateTodo(this.args[2], this.args[1] === 'done')
				file.writeTodo(this.todos)
				break;
			case 4:
				if (this.args[1] === 'add') {
					this.todos.push({ todo: this.args[2], done: this.args[3] === 'true', status: 'show' })
					file.writeTodo(this.todos)
					this.displayTodo()
				}
				break;
			default:
				console.log('Oh-uh invalid arguments.')
				break;

		}
	}

}
class File {
	constructor(file) {
		this.file = file
	}

	async readTodo() {
		try {
			const data = await fs.readFile(this.file, "utf-8")
			const entries = data.split('\n').filter((enty) => enty.trim() !== '').map((entry) => {
				const [todo, done, status] = entry.split(',')
				const obj = { todo: todo, done: done === 'true' ? true : false, status: status }
				return obj
			})
			return entries.slice(1)

		} catch (err) {
			console.log(err)
			return null
		}
	}

	async writeTodo(todo) {
		try {
			let arrayToString = "todo,done,status\n";
			const parsedString = todo.map((entry) => {
				return `${entry.todo},${entry.done},${entry.status}\n`;
			});
			parsedString.forEach((entry) => { arrayToString += entry });;

			await fs.writeFile('data.csv', arrayToString)

		} catch (err) {
			cosole.log(err)
		}
	}
}

const argument = argv.slice(2);
const file = new File('data.csv')
// Reads current todos before initializing
const infile_todos = await file.readTodo()
// Initialize todo
const todo = new Todo(argument, infile_todos)
todo.init()
