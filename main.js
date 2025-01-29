import readline from 'node:readline'
import { argv } from 'node:process'
import fs from 'node:fs/promises'

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
r1.close();


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
		if (this.args.length === 1) {
			this.displayTodo();
		};

		if (this.args.length === 3) {
			if (this.args[1] == 'done') {
				this.updateTodo(this.args[2], true)
			} else if (argument[1] === 'ongoing') {
				this.updateTodo(this.args[2], false)

			}

		};
	}

}
async function readTodo() {
	try {
		const data = await fs.readFile("data.csv", "utf-8")
		const entries = data.split('\n').filter((enty) => enty.trim() !== '').map((entry) => {
			const [todo, done] = entry.split(',')
			const obj = { todo: todo, done: done === 'true' ? true : false }
			return obj
		})
		return entries.slice(1)

	} catch (err) {
		console.log(err)
		return null
	}
}

const argument = argv.slice(2);
const todos = await readTodo()
const todo = new Todo(argument, todos)
todo.init()
